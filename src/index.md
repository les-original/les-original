---
description: Light goods & technical oddities for freaks in nature
eleventyNavigation:
  key: Home
  title: ⇧ Home
  order: 1
layout: layouts/home.njk
---
  <r-grid columns=6 columns-s=2>
    <r-cell span=row>
      <h2 class="big">
        {{description}}
      </h2>
      
  </r-cell>
  <r-cell span=row>
    <h2>
      Projects
    </h2>
  </r-cell>
    {%- for post in collections['projects'] -%}
      <r-cell span=2 span-s=1 class="card">
        <a href="{{ post.url }}">
          {%- if post.data.image -%}
            <img src="{{ post.data.image }}" alt="{{ post.data.title }}" style="width: 100%; height: auto; margin-bottom: var(--les-padding-md); border-radius: var(--border-radius-sm);" />
          {%- endif -%}
          {{ post.data.icon }}
          <p>
            {{ post.data.title }}
          </p>
        </a>
      </r-cell>
    {%- endfor -%}
  
  </r-grid>
           