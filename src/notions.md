---
layout: layouts/notions.njk
---

<div class="wrapper home">
  <r-grid columns=8 columns-s=4>
    <r-cell span=4 span-s=row>
      <h1>MYO Notions</h1>
      <br>
        <p>Open-source sewing bits for textile makers, optimized for 3D printers.</p>
        <a class="button" href="https://github.com/les-original/MYO-Notions/archive/refs/tags/v2.0.zip">Download</a>
        <a class="button" href="https://github.com/les-original/MYO-Notions">GitHub</a>
    </r-cell>
    <r-cell span=1-2 span-s=row>
      <h4>cord accessories</h4>
    </r-cell>
    <r-cell span=6>
      <ul>
      {%- for post in collections['cord accessories'] -%}
        <li{% if page.url == post.url %} aria-current="page"{% endif %}>
          <a href='{{ post.url }}'>{{ post.data.title }}</a>  — <i>Updated {{ post.data.page.date | htmlDateString }}</i>
        </li>
      {%- endfor -%}
      </ul>    
    </r-cell>
    <r-cell span=1-2 span-s=row>
      <h4>webbing accessories</h4>
    </r-cell>
    <r-cell span=6>
      Coming soon...
    </r-cell>
    <r-cell span=1-2 span-s=row>
      <h4>other</h4>
    </r-cell>
    <r-cell span=6>
      Coming soon...
    </r-cell>
  </r-grid>
</div>