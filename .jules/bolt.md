## 2024-06-25 - Manual Asset Inlining Required for Critical SVGs
**Learning:** In `mietfolio-marketing`, `vite.build.assetsInlineLimit` is set to 0 in `astro.config.mjs`. This prevents Vite from automatically inlining small SVG assets into the HTML/JS output.
**Action:** To optimize LCP/FCP, critical small assets like SVGs (especially the logo used in the header) must be manually inlined directly into the Astro components rather than relying on standard `<img>` tags or CSS background images.
