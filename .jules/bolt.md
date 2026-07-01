## 2024-07-01 - Manual SVG Inlining Required for LCP
**Learning:** `vite.build.assetsInlineLimit` is set to 0 in `astro.config.mjs`. This means Vite will not automatically inline any assets as base64 or raw strings during the build process.
**Action:** Small, critical assets like the application logo SVGs must be manually inlined directly into Astro components (e.g., using Vite's `?raw` import) to avoid extra network requests and optimize LCP/FCP.
