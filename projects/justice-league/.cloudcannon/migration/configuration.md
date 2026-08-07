# CloudCannon configuration

Observed: 2026-08-07

## Outcome

Unified Configuration exposes one **Pages** collection backed by `src/content/pages/*.json`. These records provide human-readable names, exact preview URLs, and editable SEO fields while the visual regions write only to bounded static HTML in the matching Astro route.

- Source folder at repository root: `/projects/justice-league/`
- Collection: `pages`
- Default editor: Visual
- Secondary editor: Data (SEO Title and Meta Description)
- Page creation: disabled
- Uploads: `public/images`
- Install: `npm ci`
- Build: `npm run build`
- Output: `dist`
- Node version: `.nvmrc`

The root and project-local `cloudcannon.config.yml` files intentionally mirror the collection configuration. The root file adds `source` for repositories connected above the project folder.

## Collection exclusions

The collection does not include the 404 page, privacy placeholder, demo event/story routes, sitemap endpoint, redirects, components, layouts, scripts, libraries, APIs, or generated output.

## Validation

The official CloudCannon CLI validated:

- repository-root `cloudcannon.config.yml`
- project-local `cloudcannon.config.yml`
- both `.cloudcannon/initial-site-settings.json` files

No deprecated `output`, `parser`, or source-folder collection keys are used.
