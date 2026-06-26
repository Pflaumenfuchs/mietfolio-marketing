## 2024-05-24 - Do not leak API error messages
**Vulnerability:** The waitlist submission API exposed raw error details (`data.error` and `err.message`) to the client UI if they weren't matched as fetch/network errors.
**Learning:** Exposing un-sanitized API error messages to the client can lead to information leakage (e.g. database structure, logic errors) or potential user enumeration (if errors indicate why a specific input failed).
**Prevention:** Always fail securely by displaying a safe, generic error message (e.g. `defaultWaitlistError`) to the user, and use `console.error` to securely log detailed error information for debugging.
