## 2024-06-18 - [Hardcoded secrets in Astro client script]
**Vulnerability:** Found hardcoded fallback values for `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_PUBLISHABLE_KEY` in the client script of `src/pages/warteliste.astro`.
**Learning:** Client-side scripts in Astro components (`<script>`) will include whatever strings are hardcoded into them when shipped to the browser.
**Prevention:** Rely strictly on `import.meta.env` for environment variables, and ensure the deployment environment handles injecting these values. Add a runtime check to fail securely if these are missing.
