## 2024-10-24 - Async Form Feedback using ARIA live regions
**Learning:** Adding dynamic states (success/error messages, loading spinners) to async forms without `aria-live` or `role` attributes leaves screen reader users unaware of form submission outcomes.
**Action:** Always wrap dynamically inserted success or error messages in elements with appropriate `role` (e.g., `status` or `alert`) and `aria-live` (e.g., `polite` or `assertive`) attributes to ensure assistive tech announces them. Also apply `aria-hidden="true"` to visual-only loading indicators like spinners.
