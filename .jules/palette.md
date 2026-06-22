## 2024-12-16 - Custom Overlay Accessibility in Astro
**Learning:** When creating custom overlays (like mobile menus) using standard DOM manipulation in Astro components, it's critical to pair `aria-controls` on the toggle button with an `Escape` key listener on the document. Without this, keyboard users are trapped and screen readers lack context.
**Action:** Always implement a reusable `close` function for custom overlays that restores focus to the original trigger button (`button.focus()`) and attach it to both link clicks and `Escape` key events.
