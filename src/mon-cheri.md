---
title: mon-cheri
tagline: "// cable crimps for FDM simps"
icon: "🍒"
description: Printable crimps that keep bicycle brake and shifter cable ends from fraying. Nine shapes, two screw sizes, free files.
status: Active
tags:
  - projects
  - 3D-printing
images:
  - https://media.printables.com/media/prints/40edf503-40bb-4f20-a254-11f774fccac7/images/10513588_83e8f060-6398-4622-91ed-6be5ec5b0901_1ba9233c-1fab-47f2-acfc-3ca71661ac06/thumbs/cover/320x240/jpeg/cc00a9ee-d7f8-4ecb-9d45-e7b83167e2f6_1_105_c.webp
  - mon-cheri/images/tri-on-cable.jpg
# TODO(release): GitHub releases on les-original/mon-cheri date from Dec 2021 and predate heart, square and the Tier A shapes (hex, bean, drop, squircle).
# Cut a new release with all 18 STLs plus the FreeCAD file, then point "Download all" at it.
links:
  - label: Download all (.zip)
    url: https://github.com/les-original/mon-cheri/archive/refs/heads/main.zip
  - label: STL files on GitHub
    url: https://github.com/les-original/mon-cheri
  - label: FreeCAD source
    url: https://github.com/les-original/mon-cheri/blob/main/src/mon-cheri.FCStd
specs:
  - label: Shapes
    value: Triangle, ball, barrel, square, heart, hex, bean, drop, squircle
  - label: Screws
    value: M3 or M4 grub (headless)
  - label: Material
    value: PETG
  - label: Perimeters
    value: 2 or more
  - label: Infill
    value: Barely matters, they're tiny
  - label: License
    value: CC0 (public domain)
eleventyNavigation:
  key: mon-cheri
  title: mon-cheri
  parent: Projects
  order: 2
layout: layouts/product.njk
---

`mon-cheri` are printed crimps that keep braided brake and shifter cable ends from fraying. They look neat, are easy to grip and come off when you need to adjust. Every shape fits typical bicycle cables.

## Downloads

Straight from the repo, always the latest files. Nine shapes, each in M3 and M4: 18 files.

| Style | Shape | M3 | M4 |
|-------|-------|----|----|
| **tri** | triangle | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-tri-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-tri-m4.stl) |
| **ball** | ball | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-ball-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-ball-m4.stl) |
| **barrel** | barrel | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-barrel-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-barrel-m4.stl) |
| **square** | square | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-square-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-square-m4.stl) |
| **heart** | heart | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-heart-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-heart-m4.stl) |
| **hex** | hex | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-hex-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-hex-m4.stl) |
| **bean** | bean | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-bean-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-bean-m4.stl) |
| **drop** | drop | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-drop-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-drop-m4.stl) |
| **squircle** | squircle | [M3 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-squircle-m3.stl) | [M4 .stl](https://github.com/les-original/mon-cheri/raw/main/mon-cheri-squircle-m4.stl) |

The [FreeCAD source](https://github.com/les-original/mon-cheri/blob/main/src/mon-cheri.FCStd) is there too. Most parameters drive the model, so you can loosen or tighten the fit for your screws or scale up a bigger size.

## Shapes

- **tri** - a triangle
- **ball** - a small round
- **barrel** - a puck-shaped
- **square** - a square
- **heart** - a classic heart
- **hex** - a six-sided nut-like shape
- **bean** - a horizontal oval
- **drop** - a teardrop with a blunt tip
- **squircle** - a rounded square with a slight tilt

Every shape comes in M3 and M4. M3 lets shapes run a bit smaller (lighter!) but the threads are delicate and the hex wrench size is *rare*. M4 is a more common wrench to carry and makes everything a bit more robust.

<!-- TODO(Marcus): swap these placeholders for real photos of the heart and square (hex, bean, drop and squircle have none yet either). Drop the files in src/mon-cheri/images/ and add them to the "images" list in src/mon-cheri.md. -->
<div class="photo-placeholders">
<div class="photo-placeholder"><span class="photo-placeholder-label">heart</span><span class="photo-placeholder-note">photo coming</span></div>
<div class="photo-placeholder"><span class="photo-placeholder-label">square</span><span class="photo-placeholder-note">photo coming</span></div>
</div>

## Grub screw length

| Style  | tri      | ball       | barrel     | heart    | square   | hex      | bean       | drop     | squircle |
|--------|----------|------------|------------|----------|----------|----------|------------|----------|----------|
| **M3** | 4 mm     | 5 mm       | 5 mm       | 4 mm     | 4 mm     | 4 mm     | 5 mm       | 4 mm     | 4 mm     |
| **M4** | 5 - 6 mm | 3.5 - 4 mm | 3.5 - 4 mm | 5 - 6 mm | 5 - 6 mm | 5 - 6 mm | 3.5 - 4 mm | 5 - 6 mm | 5 - 6 mm |

## Print and fit

1. Print in a tough, outdoor-friendly filament like PETG.
1. Use at least 2 perimeters. They're so small infill doesn't make much of a difference.
1. Poke out the cable hole to clear any stringing.
1. Thread in the grub screw. Keep it straight!
1. Place it on the end of a cleanly cut cable.
1. Tighten down to a reasonable tension. *Not too tight!*
1. Ride your bike!

Next time you need to remove the cables or make adjustments, just loosen up and repeat.

## Say thanks

Suggestions or some troubles? [Open an issue](https://github.com/les-original/mon-cheri/issues) on GitHub, or send a pull request if your change would help others. Say thanks on Instagram [@lesoriginal](https://www.instagram.com/lesoriginal).
