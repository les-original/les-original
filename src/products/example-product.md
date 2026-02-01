---
layout: layouts/product.njk
title: Example Product
description: This is an example product page demonstrating the product template layout with gallery, details, and download links.
icon: "🧵"
image: https://via.placeholder.com/800x600/7175C4/FDFBF3?text=Example+Product
galleryPath: products/example-product/images
tags:
  - projects
  - 3D-printing
links:
  - label: Download on GitHub
    url: https://github.com/example/repo
    icon: "📦"
  - label: View on Printables
    url: https://printables.com/example
    icon: "🖨️"
specs:
  - label: Material
    value: PLA, PETG
  - label: Infill
    value: 15-20%
  - label: Supports
    value: None required
  - label: License
    value: CC BY-SA 4.0
eleventyNavigation:
  key: Example Product
  title: Example Product
  parent: Projects
  order: 10
---

## About This Product

This is an example product page that demonstrates how to use the new `product.njk` template. The layout features:

- **Large image display** with auto-populated gallery from a folder
- **Thumbnail navigation** for browsing multiple product images
- **Details sidebar** with description, download links, and specifications
- **Responsive design** that works on mobile and desktop

## How to Use This Template

### 1. Create Your Product Folder

```
src/products/your-product/
├── your-product.md      # Product page content
└── images/              # Gallery images folder
    ├── 01-main.jpg
    ├── 02-detail.jpg
    └── 03-side.jpg
```

### 2. Set Up Frontmatter

```yaml
---
layout: layouts/product.njk
title: Your Product Name
description: Brief product description
icon: "🔧"
galleryPath: products/your-product/images
links:
  - label: Download
    url: https://github.com/...
    icon: "📦"
specs:
  - label: Material
    value: PLA
---
```

### 3. Add Images

Place your product images in the `images/` folder. They will be:
- Automatically discovered and sorted alphabetically
- Optimized with 11ty-img (webp + jpeg, multiple sizes)
- Displayed as clickable thumbnails below the main image

## Notes

- Images are sorted alphabetically, so prefix with numbers (01-, 02-) for ordering
- The first image becomes the default main display
- If no gallery images are found, the `image` URL from frontmatter is used as fallback
