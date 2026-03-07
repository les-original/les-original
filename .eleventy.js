const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const path = require("path");
const fs = require("fs");

// Async shortcode for optimized images
async function imageShortcode(src, alt, sizes = "100vw", widths = [400, 800, 1200]) {
  if (!src) return '';

  // Handle both relative and absolute paths
  let inputPath = src;
  if (!path.isAbsolute(src) && !src.startsWith("http")) {
    inputPath = path.join("./src", src);
  }

  try {
    let metadata = await Image(inputPath, {
      widths: widths,
      formats: ["webp", "jpeg"],
      outputDir: "./build/img/",
      urlPath: "/img/",
      filenameFormat: function (id, src, width, format) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}-${width}w.${format}`;
      }
    });

    return Image.generateHTML(metadata, { alt, sizes, loading: "lazy", decoding: "async" });
  } catch (e) {
    // Fallback for blocked/unavailable remote images (works fine in production)
    console.warn(`[image] Could not optimize ${src}, using original: ${e.message}`);
    return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" style="max-width:100%;height:auto;">`;
  }
}

// Sync function to get product gallery images from a folder
function getProductImages(galleryPath) {
  if (!galleryPath || typeof galleryPath !== 'string') return [];
  const fullPath = path.join("./src", galleryPath);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const files = fs.readdirSync(fullPath);
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

  return files
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
    .sort()
    .map(file => path.join(galleryPath, file));
}

// Async shortcode to generate a product gallery with optimized images
async function productGalleryShortcode(galleryPath, productTitle) {
  const images = getProductImages(galleryPath);

  if (images.length === 0) {
    return `<p class="gallery-empty">No images found in ${galleryPath}</p>`;
  }

  let galleryHtml = '<div class="product-gallery">';

  // Generate optimized images for the main display and thumbnails
  for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i];
    const inputPath = path.join("./src", imgSrc);
    const alt = `${productTitle} - Image ${i + 1}`;

    try {
      let metadata = await Image(inputPath, {
        widths: [200, 600, 1200],
        formats: ["webp", "jpeg"],
        outputDir: "./build/img/",
        urlPath: "/img/",
        filenameFormat: function (id, src, width, format) {
          const extension = path.extname(src);
          const name = path.basename(src, extension);
          return `${name}-${width}w.${format}`;
        }
      });

      const jpeg = metadata.jpeg;
      const webp = metadata.webp;

      // Main image (large version)
      const mainSrcset = webp.map(img => `${img.url} ${img.width}w`).join(", ");
      const mainFallback = jpeg[jpeg.length - 1].url;
      const thumbUrl = webp[0].url; // smallest webp for thumbnail

      galleryHtml += `
        <div class="gallery-item${i === 0 ? ' active' : ''}" data-index="${i}">
          <picture class="gallery-main-picture">
            <source type="image/webp" srcset="${mainSrcset}" sizes="(max-width: 600px) 100vw, 60vw">
            <img src="${mainFallback}" alt="${alt}" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async">
          </picture>
          <img class="gallery-thumb" src="${thumbUrl}" alt="${alt} thumbnail" data-index="${i}">
        </div>`;
    } catch (error) {
      console.error(`Error processing image ${imgSrc}:`, error);
    }
  }

  galleryHtml += '</div>';
  return galleryHtml;
}

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2"
  ]);
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Image optimization shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("productGallery", productGalleryShortcode);

  // Filter to get product images from a folder path
  eleventyConfig.addFilter("getProductImages", getProductImages);
  
  /*
  From: https://github.com/artstorm/eleventy-plugin-seo
  
  Adds SEO settings to the top of all pages
  The "glitch-default" bit allows someone to set the url in seo.json while
  still letting it have a proper glitch.me address via PROJECT_DOMAIN
  */
  const seo = require("./src/seo.json");
  if (seo.url === "glitch-default") {
    seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
  }
  eleventyConfig.addPlugin(pluginSEO, seo);

  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  /**
   https://github.com/11ty/eleventy-base-blog/pull/34
   https://www.browsersync.io/docs/options#option-ghostMode
   
   Noticed by @clottman - we do NOT want to be transmitting the full browsersync
   to all users. I 
  */
  
  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });
  
  /*
  From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426 
  
  Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
  */
  eleventyConfig.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("notions");

    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};
