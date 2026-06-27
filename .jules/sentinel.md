## 2026-06-27 - Missing input limits and insecure error handling
**Vulnerability:** Contact form inputs (name, email, message) lacked `maxlength` attributes creating a DoS risk, and the waitlist API call catch block silently swallowed errors without internal logging.
**Learning:** In static sites using form submissions or client-side fetch, input constraints are often forgotten in HTML, and error states often skip logging to prevent leakage but fail to leave a trace for internal debugging.
**Prevention:** Always add HTML validation constraints like `maxlength` to all user inputs. In `catch` blocks, use `console.error` for internal visibility while rendering a safe, generic message to the UI.
