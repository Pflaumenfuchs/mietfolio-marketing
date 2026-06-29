## 2025-06-29 - Inlined Logo SVG

**Learning:** `vite.build.assetsInlineLimit` is set to `0` in `astro.config.mjs`, meaning small critical assets like SVGs are not automatically inlined by Vite during build.
**Action:** Small, critical SVGs should be explicitly inlined using Vite's `?raw` import and Astro's `set:html` attribute to avoid unnecessary network requests, which improves the First Contentful Paint (FCP) and Largest Contentful Paint (LCP) metrics.
