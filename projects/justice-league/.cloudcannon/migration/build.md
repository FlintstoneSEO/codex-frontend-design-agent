# CloudCannon build verification

Observed: 2026-08-07

## Local checks

- `npm run check`: passed with 0 errors, warnings, or hints across 48 Astro/TypeScript files.
- `npm run build`: passed; 19 normal pages plus configured redirect outputs, sitemap, and 404 generated.
- `npm run test`: passed all 830 prototype assertions.
- Official CloudCannon CLI validation: passed for root and project-local configuration and initial-site settings.
- All 15 Pages collection URLs resolve to built HTML.
- All 15 page records supply the rendered SEO title and meta description.
- Built pages contain 90+ Source Editable Region markers; every collection page has at least two.

The sandboxed build exercised the existing Wix/Little Green Light fallback paths. Their network failures remained contained and did not fail the build.

## Hosted verification still required

CloudCannon account access is not present locally. In the hosted site, verify that:

1. **Pages** appears in the left sidebar.
2. Each entry opens the URL named in its manifest.
3. Yellow editable outlines appear on representative static content.
4. Changing an outlined heading saves to the expected `src/pages/**/index.astro` file.
5. Changing SEO Title in Data view saves to the expected `src/content/pages/*.json` file and appears after rebuild.
6. Dynamic Wix/LGL sections do not expose edit controls.
