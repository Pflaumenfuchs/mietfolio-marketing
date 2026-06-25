## 2025-06-25 - Accessible Mobile Menus in Astro
**Learning:** When building custom overlays (like mobile menus) with vanilla JavaScript in Astro `<script>` tags, toggling visual visibility via CSS classes is not enough for screen readers and keyboard users.
**Action:** Always ensure accessibility by adding `aria-controls` to the toggle button and implementing an `Escape` key listener that securely closes the overlay and restores focus (`button.focus()`) to the original trigger button.
