## 2024-06-28 - Inlining critical SVGs with vite assetsInlineLimit=0
**Learning:** In Astro projects where `vite.build.assetsInlineLimit` is set to `0`, small SVGs used in critical rendering paths (like logos) won't be automatically inlined, causing an extra HTTP request and potentially delaying LCP/FCP.
**Action:** Use Vite's `?raw` import to manually inline these SVGs into Astro components using `set:html` on a wrapper element, avoiding maintainability issues from hardcoded paths and XSS risks from string replacement.
