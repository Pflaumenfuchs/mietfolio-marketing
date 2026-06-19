## 2024-05-24 - Hardcoded Supabase Keys in Frontend
**Vulnerability:** Hardcoded Supabase URL and Publishable Key found in `src/pages/warteliste.astro` fallback logic.
**Learning:** Hardcoding secrets as fallbacks for environment variables exposes them to version control and anyone viewing the source code.
**Prevention:** Always rely strictly on `import.meta.env` for environment variables, especially keys. Provide secure error handling if keys are missing instead of falling back to hardcoded values.
