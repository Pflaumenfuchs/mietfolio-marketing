# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working on the Mietfolio Marketing site.

## Overview

This is the **static marketing and legal site** for Mietfolio, built with **Astro 6** and **Tailwind CSS**. It serves:
- Public landing page (`/`)
- Feature/guide pages (`/funktionen/*`, `/ratgeber/*`)
- Legal pages (`/impressum`, `/datenschutz`, `/agb`, `/nutzungsbedingungen`)
- Waitlist page (`/warteliste`, `/registrieren`)

**This is a secondary project.** The main application is in `../mietbuddy-app/`.

## Tech Stack

- **Static Site Generator**: Astro 6
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Astro
- **Deployment**: Netlify (same project as React SPA, served via proxy rewrite)

## Repository

- **GitHub**: https://github.com/Pflaumenfuchs/mietfolio-marketing
- **Main branch**: All changes go to `main`
- **Netlify**: Auto-deploys from `main` branch

## Common Commands

```bash
# Development
npm run dev           # Start dev server (http://127.0.0.1:3000)

# Build & Deploy
npm run build         # Production build (outputs to `dist/`)
npm run preview       # Preview production build locally
npm run astro         # Astro CLI (migrations, etc.)

# Validation
npm run build         # Check for build errors
```

## Project Structure

```
mietfolio-marketing/
  src/
    pages/            # Astro route pages
      index.astro     # Landing page (/)
      legal/          # Legal pages (impressum, datenschutz, etc.)
      funktionen/     # Feature pages (/funktionen/*)
      ratgeber/       # Guide pages (/ratgeber/*)
      [page].astro    # Other pages
    
    components/       # Reusable Astro components
    layouts/          # Page layouts
    styles/           # Global styles
  
  public/             # Static assets (favicon, fonts, etc.)
  astro.config.mjs    # Astro configuration
  tailwind.config.js  # Tailwind configuration
```

## Key Concepts

**No Build-Time Hydration**: Astro pages are static HTML by default. JavaScript is island-based (only when needed).

**Tailwind CSS v4**: Uses the latest version with vite integration.

**Icons**: All icons via `lucide-astro` components or Lucide React in interactive islands.

**No Server-Side Logic**: Pure static site. If you need server functions, they belong in the React SPA (`../mietbuddy-app/`) as Supabase Edge Functions.

## Domain & Routing

**Domain**: `mietfolio.de` (points to Netlify)

**Routing Strategy**:
- Marketing pages served from Astro project
- App routes (`/app`, `/nebenkosten`, `/dokumente`, etc.) proxied to React SPA via Netlify rewrite
- SPA fallback handled by `public/_redirects` in React app

See `../mietbuddy-app/docs/CURRENT_STATE.md` for latest routing configuration.

## SEO & Metadata

All pages should have:
- Descriptive `<title>` (site title + page title)
- `<meta name="description">` (under 160 chars)
- `<meta name="canonical">` (full URL)
- `<meta name="robots">` (index/noindex as appropriate)
- Open Graph metadata for social sharing
- JSON-LD structured data (Organization, WebPage, FAQPage, etc.)

Astro layout: use `<Head>` component or Astro's `<meta>` tags in frontmatter.

## Performance & Bundle Size

- Prefer Astro static generation over client-side rendering
- Use `client:load` / `client:idle` sparingly for interactive islands
- Lazy-load JavaScript via `type="module"` in scripts
- Optimize images: use WebP, native `<picture>` element, or Astro `<Image>`

## Legal Pages

Maintain in `src/pages/legal/`:
- `impressum.astro` — Operator info, contact, legal basis
- `datenschutz.astro` — Privacy policy (DSGVO compliance)
- `agb.astro` — Terms of service (AGB)
- `nutzungsbedingungen.astro` — Usage terms
- `cookies.astro` — Cookie info (redirects to datenschutz)

**Important**: These pages reference the React SPA's privacy practices. Keep in sync with `../mietbuddy-app/src/pages/Legal.tsx`.

## Validation Before Push

```bash
npm run build         # Check for build errors
```

If changes affect routing or metadata, verify locally:
```bash
npm run preview       # Check live rendering and routing
```

## Deployment

**No special setup needed.** Netlify auto-builds from `main` branch on every push.

- Build command: `npm run build`
- Publish directory: `dist/`
- Environment variables: None required (static site)

Verify deployment at https://mietfolio.de

## When to Work Here vs. React SPA

**Work in mietfolio-marketing if:**
- Updating landing page copy, layout, or design
- Adding/updating SEO content (`/funktionen/*`, `/ratgeber/*`)
- Modifying legal pages (`/impressum`, `/datenschutz`, etc.)
- Adjusting styling for public pages

**Work in mietbuddy-app if:**
- Updating app functionality (`/app`, `/nebenkosten`, `/dokumente`, etc.)
- Changing auth, database, or backend logic
- Adding server-side features (Edge Functions)
- Modifying tenant portal (`/mieter/*`)

## Context Workflow

For any work on mietfolio-marketing:

1. **Check the main project first**: `../mietbuddy-app/CLAUDE.md`
2. **Understand monorepo structure**: See root `README.md`
3. **Validate locally**: `npm run dev` and `npm run build`
4. **Update legal pages consistently**: Keep in sync with React SPA if needed
5. **Commit and push**: Netlify auto-deploys from `main`

---

See the root `README.md` and `../mietbuddy-app/CLAUDE.md` for the complete monorepo context.
