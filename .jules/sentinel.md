## 2025-02-14 - Add input length constraints to contact form
**Vulnerability:** Missing input length constraints on user-facing form inputs (name, email, message) in `src/pages/kontakt.astro` (Netlify Forms).
**Learning:** Overly large payloads can be submitted, creating a Denial of Service (DoS) risk or hitting platform payload limits unnecessarily.
**Prevention:** Always enforce input length constraints (e.g., adding `maxlength` attributes) on user-facing form inputs.
