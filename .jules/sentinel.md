
## 2024-05-15 - Add input length constraints to Netlify forms
**Vulnerability:** The contact form on `/kontakt` lacked length limits on input fields, allowing users to submit excessively long payloads (DoS risk).
**Learning:** Netlify forms do not enforce arbitrary input length limits automatically, leaving inputs vulnerable to very large strings.
**Prevention:** Always add `maxlength` attributes to all user-facing `<input>` and `<textarea>` fields.
