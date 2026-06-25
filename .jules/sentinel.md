## 2025-02-27 - [Information Disclosure via Raw Backend Errors]
**Vulnerability:** The waitlist form exposed raw backend error responses (`data.error`) directly to the frontend for any failed request, potentially leaking internal server states or database stack traces on 5xx errors.
**Learning:** Returning explicit backend error messages is useful for validation (400 Bad Request) but dangerous for server errors. Codebases must actively distinguish between safe client errors and unsafe server errors.
**Prevention:** Only bubble up `data.error` when `response.status === 400` (or another explicit expected error code). For all other non-OK statuses, fail securely by throwing a generic UI-friendly error message.
