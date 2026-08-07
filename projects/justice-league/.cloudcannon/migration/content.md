# CloudCannon content migration

Observed: 2026-08-07

## Editorial manifest

Fifteen JSON records in `src/content/pages/` form the Pages collection. Each record contains:

- human-readable page name
- built preview URL
- hidden Astro source path
- SEO Title
- Meta Description

Each existing route imports its matching record for metadata. Page layout and visible copy remain in the existing Astro template so the visual design and component system do not change.

## Static-copy treatment

Bounded Source Editable Regions expose verified static headings, paragraphs, lists, and links. Shared `PageIntro` and `ActionBand` components retain their original prop API and now also accept named content slots, allowing page-owned copy and links to remain inside the route file rather than moving component logic into editor-controlled data.

## Dynamic-data treatment

Wix Events, scholarship CMS records, Little Green Light donor output, verified leadership/supporter datasets, form/payment handoffs, eLink, video behavior, navigation, redirects, and schema logic were not migrated. This prevents dual ownership and keeps privacy filtering and source verification intact.

No Markdown, MDX, page builder, Astro Content Collection, or CloudCannon Structure was added because editors are not authorized to create or rearrange bespoke routes and the current Source Editable Regions API supports the required bounded edits with less architectural risk.
