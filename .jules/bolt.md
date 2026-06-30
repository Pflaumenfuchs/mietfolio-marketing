## 2024-07-24 - Vite SVG Inlining
**Learning:** `vite.build.assetsInlineLimit` is set to `0` in `astro.config.mjs`, meaning small SVGs are not automatically inlined by Vite. Using `<img>` tags for critical SVGs like logos requires an extra HTTP request, delaying LCP/FCP.
**Action:** For critical, small SVGs, manually inline them using Vite's `?raw` import feature (e.g., `import icon from '../../public/logo.svg?raw';`) and render using `set:html` with a wrapper for accessibility and styling.
