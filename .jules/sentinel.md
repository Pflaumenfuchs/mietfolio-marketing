## 2025-02-23 - Information Exposure in Error Messages
**Vulnerability:** The waitlist form endpoint could expose backend error details or stack traces to users by using `data.error` from the API response.
**Learning:** Exposing raw backend errors to the frontend can inadvertently leak sensitive internal details (e.g. database schema, edge function logic, or 3rd party failures).
**Prevention:** Always fail securely by catching API errors and presenting a safe, generic error message (e.g., `defaultWaitlistError`) to the user instead of displaying the raw response.
