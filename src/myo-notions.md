---
title: MYO-notions
icon: 🆓
description: Open-source printable notions for softgoods.
tags:
  - projects
  - 3D-printing
eleventyNavigation:
  key: MYO-notions
  title: ○ MYO-notions
  parent: Projects
  order: 1
layout: layouts/page.njk
---
  <r-grid columns=6 columns-s=2>
  <r-cell span=row>
      <a href="https://github.com/les-original/MYO-Notions/archive/refs/tags/v2.0.zip" class="button cta"
>Download</a>
      <a href="https://github.com/les-original/MYO-Notions" class="button ghost">GitHub</a>
    </r-cell>
  <r-cell span=row>
    <h2>
      {{title}}
    </h2>
  </r-cell>
    {%- for post in collections['cord accessories'] -%}
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
  <a href="https://github.com/les-original/MYO-notions/discussions" style="text-decoration: underline; font-weight: 500;" class="small"> Give feedback</a> 
