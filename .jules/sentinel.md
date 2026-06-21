## 2026-06-21 - Secure Error Handling in Astro Client Scripts
**Vulnerability:** The Astro client-side script for the waitlist form was directly throwing the error message returned from the backend (`data.error`) or passing raw `fetch` error messages back to the UI.
**Learning:** This exposes backend internals to the user, potentially leaking sensitive information (like Supabase details, SQL errors if unhandled in the Edge Function, or internal network states). Information disclosure in client scripts can be chained with other attacks.
**Prevention:** Always log raw backend/fetch errors to the console (where they are only visible to the user themselves via DevTools) and throw/display a generic, safe-listed error message (e.g., "The waitlist is currently unavailable") to the UI.
