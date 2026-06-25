## 2024-05-24 - Vite configuration prevents automatic SVG inlining
**Learning:** In `mietfolio-marketing`, `vite.build.assetsInlineLimit` is explicitly set to 0 in `astro.config.mjs`. This prevents Astro/Vite from automatically inlining small imported SVGs.
**Action:** Small, critical assets like the main logo SVG (especially those above the fold, which impact LCP/FCP) must be manually inlined directly into Astro components.
