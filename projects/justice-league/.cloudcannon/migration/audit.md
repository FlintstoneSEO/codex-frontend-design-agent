# CloudCannon migration audit

Observed: 2026-08-07

## Ownership decision

CloudCannon now owns approved static presentation copy in the existing Astro pages. Wix, Little Green Light, and third-party services remain authoritative for events, scholarship records, donor records, form/payment flows, and embedded news/video content. This supersedes the 2026-08-06 hosting-only decision, but it does not create a second copy of externally maintained records.

## Astro and dependencies

- Astro 7.2.0 with static output, directory-format URLs, and trailing slashes.
- TypeScript 6.0.3 and `@astrojs/check` 0.9.10.
- npm with `package-lock.json`; Node `>=22.12.0` and `.nvmrc`.
- No Markdown, MDX, Astro Content Collections, framework islands, Tailwind, remark, or rehype integrations.
- Plain Astro components and `src/styles/global.css`; images use `public/images` or existing Wix CDN transforms.

## Content and data sources

| Source | Current use | Editorial owner after migration |
| --- | --- | --- |
| `src/pages/**/*.astro` | Page-specific static presentation copy and route templates | CloudCannon for bounded Source Editable Regions; developer for Astro logic |
| `src/data/site.ts` | Organization facts, navigation, verified URLs, global metadata | Developer-controlled pending a separately approved global-data migration |
| `src/data/homepage.ts` | Verified homepage media and third-party URLs | Developer-controlled because responsive Wix transforms and integrations are coupled to the values |
| `src/data/content.ts` | Verified/provisional typed records and presentation fixtures | Developer-controlled |
| `src/data/leadership.ts` | Verified leadership roster and image associations | Developer-controlled; source verification is required before publishing changes |
| `src/data/supporters.ts` | Verified supporter roster and logo associations | Developer-controlled; source verification is required before publishing changes |
| `src/lib/wix.ts` | Wix Events and scholarship build-time reads | Wix/external; never editable in CloudCannon |
| `src/lib/donors.ts` and fallback JSON | Little Green Light donor report with privacy filtering and fallback | External/developer; never editable in CloudCannon |

## Public route and editor census

| Route | Source file | Layout | Static editable content | Developer-controlled content | Pattern |
| --- | --- | --- | --- | --- | --- |
| `/` | `src/pages/index.astro` | `BaseLayout` | Hero copy/CTAs, mission framing, founder narrative, methods, participation, trust copy | Wix event results, eLink, YouTube identifiers, responsive Wix media transforms | Source regions |
| `/about/` | `src/pages/about/index.astro` | `BaseLayout` | Intro, mission framing, vision/work explanation, trust links, action band | Verified mission/vision values imported from typed data | Source regions around static siblings |
| `/about/history/` | `src/pages/about/history/index.astro` | `BaseLayout` | Intro, contextual explanation, evidence note, action band | Milestone array, verified dates, citations, media associations | Source regions around static siblings |
| `/about/leadership/` | `src/pages/about/leadership/index.astro` | `BaseLayout` | Intro | Leadership roster, governance gap record, group counts, portraits, focal points | Bounded intro source regions |
| `/reparations/` | `src/pages/reparations/index.astro` | `BaseLayout` | Intro, definition, local model, faith framing, dated-claim warning, action band | Three-pillar typed array and source notice | Source regions around static siblings |
| `/scholarship/` | `src/pages/scholarship/index.astro` | `BaseLayout` | Intro and static explanatory labels/copy that do not assert cycle facts | Wix scholarship cycle, recipients, cohorts, dates, eligibility, documents, FAQs, images | Limited source regions; dynamic record remains read-only |
| `/impact/` | `src/pages/impact/index.astro` | `BaseLayout` | Intro, reporting standard, contextual evidence explanation, navigation, action band | Claims that require source reconciliation remain visibly labelled | Source regions |
| `/events/` | `src/pages/events/index.astro` | `BaseLayout` | Intro, campaign/meeting framing, event-record standard, action band | Wix Events result, state rendering, registration URLs | Limited source regions |
| `/news/` | `src/pages/news/index.astro` | `BaseLayout` | Intro | Media/archive explanation, eLink runtime embed, and verified Wix source URLs | Bounded intro source regions |
| `/join-the-work/` | `src/pages/join-the-work/index.astro` | `BaseLayout` | Intro, form-shell explanation | Participation dataset, prototype form behavior, newsletter integration | Limited source regions |
| `/support-reparations/` | `src/pages/support-reparations/index.astro` | `BaseLayout` | Intro | Designation dataset, handoff explanations, Wix donation/support-card URLs, organization facts, action band | Bounded intro source regions |
| `/contact/` | `src/pages/contact/index.astro` | `BaseLayout` | Intro and form-shell explanation | Verified contact facts, routing list, Wix form URL, prototype form behavior, action band | Limited source regions |
| `/ad-booklet/` | `src/pages/ad-booklet/index.astro` | `BaseLayout` | Intro, campaign explanation, submission guidance, action band | Verified placements/deadline/price data and Wix handoff | Source regions around fixed content; facts remain guarded |
| `/supporters/` | `src/pages/supporters/index.astro` | `BaseLayout` | Intro, roster explanation, donor distinction, action band | Verified supporter names/logo pairings | Source regions around roster |
| `/donors/` | `src/pages/donors/index.astro` | `BaseLayout` | Intro | LGL fetch, source explanation, privacy filtering, year groups, names, distinctions, action band, fallback state | Bounded intro source regions |

Excluded from the Pages collection: `404.astro`, `privacy/index.astro`, the demo event/story routes, `sitemap.xml.ts`, redirects, components, layouts, scripts, libraries, and all generated output.

## Component hierarchy

- `BaseLayout.astro`: head metadata, canonical, schema, global header/footer, page slot.
- Shared editorial components: `PageIntro`, `ActionBand`, `Breadcrumbs`, `SourceNotice`.
- Integration/state components: `UpcomingEvents`, `PriorityModule`, `ElinkNews`, `VideoFeature`, `PrototypeForm`, `NewsletterShell`.
- `PageIntro` and `ActionBand` are retained and extended with named slots so page-owned static content can remain in the route file and be bounded by Source Editable Regions.

## Build pipeline and exclusions

- Full build: `npm run build` (`astro check && astro build`).
- Test: `npm run test`.
- Output: `dist`; static files: `public`; uploads: `public/images`.
- Network failure must continue to render guarded fallback states rather than fail the build.
- CloudCannon must not edit imports, frontmatter code, CSS classes, JavaScript, API calls, environment variables, schema output, redirects, sitemap generation, or generated records.

## Sizing

- Public editorial pages: 15 (threshold >30: not tripped).
- Hardcoded pages requiring a full page-builder conversion: 0; the current 2026 Source Editable Regions API supports bounded HTML editing without restructuring.
- Distinct collections: 1 (`pages`; threshold >5: not tripped).
- Single-pass migration remains appropriate.
