<div align="center">

# PixelUtil

[![CSS](https://img.shields.io/badge/CSS-88.7%25-663399)](./src)
[![JavaScript](https://img.shields.io/badge/JavaScript-9.9%25-F0DB4F)](./src)
[![HTML](https://img.shields.io/badge/HTML-1.4%25-E34F26)](./src)
[![License](https://img.shields.io/badge/License-view-blue)](./LICENSE)

<br>

A BEM-oriented, utility-first CSS framework for building clean, consistent websites fast. From modern minimal looks to video game dev exclusive component preset lybrary.

</div>

PixelUtil gives you a consistent set of design variables (colors, spacing, typography, shadows, and more), a full set of utility classes, and optional prebuilt components in the presets folder.

---

## Features
- **Consistent design variables** — every color, spacing value, font size, and shadow is a CSS variable, so your whole design updates from one place.
- **Utility-first classes** — style directly in your markup without writing custom CSS for common layout, spacing, and color needs.
- **Light & dark themes** — built in and switchable with a single `data-theme` attribute.
- **BEM-friendly components** — optional, prebuilt structural classes that pair naturally with the utility layer.
- **Website template** — Instead of starting from zero, there is a pixelUtil template for building website with all the main folder directories needed. Add as you wish.
- **Zero runtime dependencies** — plain CSS, no JS framework, no build step required to use it.

---

## Philosophy
> Good design tends to follow proportions found in nature. PixelUtil's spacing and sizing scales are built around those same relationships. Ratios like the golden ratio (1.618).

---

## Installation
Download the latest build from [!dist][./dist] and link it in your HTML:

```html
<link rel="stylesheet" href="pixelutil-core.min.css">
```

---

## Prefixes
Every utility class follows prefix-value. Here's what each prefix maps to:

```
p-                padding
m-                margin
gap-              flex/grid gap
fs-               font size
fw-               font weight
bg-clr-           background color
text-clr-         text color
border-clr-       border color
border-           border width
border-radius-    corner radius
box-shadow-       shadow
z-                z-index
w-                width
h-                height
flex-             flex direction/behavior
grid-cols-        grid columns
```

Sizing stays consistant throughout the css util class selectors: 

<h6>xs</h6> <h5>sm</h5> <h4>md</h4> <h3>lg</h3> <h2>xl</h2> <h1>2xl</h1>

```html
<div class="flex items-center justify-between gap-md p-lg bg-clr-surface border-radius-md">
  <span class="fs-lg fw-600 text-clr-header">Balance</span>
  <span class="fs-xl fw-700 text-clr-primary">$240.00</span>
</div>
```

---

## Documentation

Full documentation including the complete spacing scale, color scale, typography variables, utility class reference, component examples, and available looks is available at [./docs/index.html].

---

## License

See license.md for framework licensing and font usage terms.

## Author
Pixel Games