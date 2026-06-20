## 2024-05-24 - Google Fonts request batching
**Learning:** Multiple `<link>` tags for Google Fonts in the `<head>` trigger separate, render-blocking HTTP requests which slow down the Critical Rendering Path.
**Action:** Always combine all Google Fonts into a single `family=` query string when using multiple families (e.g., `family=FontA&family=FontB`).
