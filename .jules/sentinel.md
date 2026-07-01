## 2025-07-01 - Missing Input Length Constraints on Netlify Form
**Vulnerability:** The contact form (src/pages/kontakt.astro) lacked input length limitations (maxlength) on user-facing inputs, creating a risk for overly large payloads being submitted.
**Learning:** Netlify forms will accept large inputs if not constrained on the client-side, making the site vulnerable to basic resource exhaustion or abuse.
**Prevention:** Always enforce input length constraints (e.g., adding `maxlength` attributes to text inputs and textareas) on user-facing forms to prevent overly large payloads and mitigate DoS risks.
