## 2024-05-24 - Custom Overlays Focus Management
**Learning:** When building custom overlays (like mobile menus) with vanilla JS in Astro `<script>` tags, native accessibility features aren't automatic. `hidden` classes don't communicate state properly, and keyboard users can get trapped.
**Action:** Always add `aria-controls` to trigger buttons, and implement `Escape` key listeners that explicitly restore focus back to the original trigger button when the overlay closes.
