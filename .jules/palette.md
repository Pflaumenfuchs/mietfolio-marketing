## 2024-06-28 - Visually distinguishing required/optional form fields

**Learning:** Adding visual indicators like `*` for required fields can cause screen readers to read out "star", cluttering the experience. The proper UX/a11y pattern is to visually mark required fields but hide the indicator from screen readers while relying on the HTML `required` attribute.
**Action:** Always use `<span aria-hidden="true">*</span>` or explicit `(optional)` text when visually differentiating form fields. Let the HTML `required` attribute handle the semantics for assistive technologies.