## 2026-06-21 - Initializing Palette Journal\n**Learning:** Just starting out.\n**Action:** Will log critical UX/a11y learnings here.

## 2025-02-12 - Mobile Menu Escape Pattern
**Learning:** Pure HTML/CSS hidden menus (like standard Astro mobile menus) don't naturally trap or manage focus. Users relying on keyboards can get stuck if they open a menu and can't easily dismiss it or lose focus context when it's closed.
**Action:** Always add an `Escape` keydown listener to custom dropdowns and mobile menus that not only closes the menu, but explicitly restores `.focus()` back to the trigger button so the user doesn't lose their place on the page.
