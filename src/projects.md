---
title: Projects
description: Projects
eleventyNavigation:
  key: Projects
  title: ⬒ Projects
  parent: Home
  order: 2
layout: layouts/page.njk
---
  <r-grid columns=6 columns-s=2>
  <r-cell span=row>
  </r-cell>
    {%- for post in collections['projects'] -%}
      <r-cell span=2 span-s=1 class="card">
        <a href="{{ post.url }}">
          {{ post.data.icon }}
          <p>
            {{ post.data.title }}
          </p>
        </a>
      </r-cell>
    {%- endfor -%}
  </r-grid>
           