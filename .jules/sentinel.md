## 2024-06-28 - Missing Input Length Limits on Netlify Forms
**Vulnerability:** Contact forms processed via Netlify Forms lacked `maxlength` constraints on input fields (Name, Email, Message).
**Learning:** Without length limits, attackers can submit overly large payloads (e.g., massive strings in the message field), potentially leading to Denial of Service (DoS) or excess billing on the Netlify platform.
**Prevention:** Always enforce strict input length constraints (e.g., `maxlength` attributes) on all user-facing form inputs to prevent oversized payloads and mitigate DoS risks.