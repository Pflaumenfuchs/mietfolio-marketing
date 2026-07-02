## 2025-02-14 - Prevent payload abuse on user-facing endpoints
**Vulnerability:** Missing input length limits on the contact form (Netlify forms).
**Learning:** External or user-facing forms lacking length constraints can be abused to send excessively large payloads, leading to DoS risks or exceeding backend/database limits.
**Prevention:** Always enforce input length constraints (e.g., adding `maxlength` attributes to user-facing form inputs like Netlify forms) to prevent overly large payloads and mitigate DoS risks.
