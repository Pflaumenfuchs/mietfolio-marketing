## 2024-05-24 - Inline Small SVGs Manually

**Learning:** This codebase sets `vite.build.assetsInlineLimit` to 0 in `astro.config.mjs`, meaning no assets are automatically inlined as data URIs by Vite. This forces extra network requests for small images like the site logo, delaying LCP (Largest Contentful Paint) and FCP (First Contentful Paint).
**Action:** When critical, small SVG assets (like logos or icons in the header) are identified, manually inline them using Vite's `?raw` import parameter and Astro's `set:html` attribute on a wrapper element, being careful to preserve ARIA attributes and styling without using vulnerable string manipulation like `.replace()`.
