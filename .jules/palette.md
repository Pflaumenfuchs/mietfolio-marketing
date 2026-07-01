## 2025-02-17 - Accessible Form Required Indicators
**Learning:** Adding a visible required indicator (like `*`) to form labels directly causes screen readers to read "star", which is confusing and non-semantic.
**Action:** When adding visual indicators for required fields, always wrap them in `<span aria-hidden="true">*</span>` and rely on the native HTML `required` attribute for semantic accessibility.
