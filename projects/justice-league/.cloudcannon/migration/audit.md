# CloudCannon migration audit

Observed: 2026-08-06

## Hosting and content ownership decision

CloudCannon is the static build, preview, and deployment host. Wix remains the canonical editor and backend for public events, media, forms, donations, leadership, scholarship records, and future maintained editorial content. CloudCannon must not create a second, drifting copy of Wix-managed content.

The first CloudCannon pass therefore configures a reproducible Astro build and environment variables. CloudCannon page-builder collections and Visual Editor regions are intentionally deferred unless the organization later decides that specific presentation copy should be owned in CloudCannon instead of Wix.

## Astro and dependencies

- Astro 7.2.0, static output.
- TypeScript strict configuration.
- No React, Vue, Svelte, Solid, Tailwind, MDX, remark, or rehype integrations.
- npm with `package-lock.json`.
- Node 24.14.0 locally; the repository declares Node `>=22.12.0` and includes `.nvmrc` for CloudCannon.
- Official Wix packages: `@wix/sdk` and `@wix/events`.
- CSS is maintained in `src/styles/global.css`.

## Content collections and data

- No Astro content collections exist.
- `src/data/site.ts` contains navigation, presentation copy, and prototype fixtures.
- `src/data/content.ts` contains typed local review fixtures and provisional current-site summaries.
- Public Wix events will be fetched at build time through a typed adapter. Honest local empty/error states preserve builds when Wix is unavailable.
- The eLink news publication is third-party runtime content and is not a CloudCannon collection.

## Routing census

All routes are explicit Astro files. There are no dynamic, paginated, taxonomy, or server-only routes.

| Page file | Distinct content sections | Repeated layout? | Editors add similar pages? | CloudCannon classification |
| --- | --- | --- | --- | --- |
| `src/pages/index.astro` | hero, priority, mission, founder/video, events/news rail, pathways, newsletter, trust | No | No | Page builder if CloudCannon-owned; retained Wix-backed route |
| `src/pages/about/index.astro` | intro, mission, context, work, trust, CTA | Partially | No | Page builder if CloudCannon-owned; retained Wix-backed route |
| `src/pages/about/history/index.astro` | intro, chronology, sources, CTA | No | No | Page builder if CloudCannon-owned; retained route |
| `src/pages/about/leadership/index.astro` | intro, review notice, rosters, sources | No | No | Fixed schema if CloudCannon-owned; Wix-backed route planned |
| `src/pages/reparations/index.astro` | intro, context, methods, sources, CTA | Partially | No | Page builder if CloudCannon-owned; retained route |
| `src/pages/scholarship/index.astro` | status, eligibility, award, process, history, contact | No | No | Page builder if CloudCannon-owned; Wix-backed route planned |
| `src/pages/impact/index.astro` | intro, evidence policy, scholarship snapshot, gaps | No | No | Page builder if CloudCannon-owned; retained route |
| `src/pages/events/index.astro` | intro, states, event list, CTA | Yes, with homepage event | Yes, in Wix | Wix Events-backed listing; not a CloudCannon collection |
| `src/pages/events/demo-priority/index.astro` | demonstration detail | Yes | No | Prototype-only hardcoded route |
| `src/pages/news/index.astro` | intro, states, story list, newsletter | Yes, with homepage news | Yes, outside CloudCannon | External/Wix-backed listing; not a CloudCannon collection |
| `src/pages/news/demo-story/index.astro` | demonstration article | Yes | No | Prototype-only hardcoded route |
| `src/pages/join-the-work/index.astro` | intro, pathways, form shell, CTA | No | No | Page builder if CloudCannon-owned; retained route |
| `src/pages/support-reparations/index.astro` | intro, designations, handoff, disclosures | No | No | Page builder if CloudCannon-owned; Wix Donations handoff planned |
| `src/pages/contact/index.astro` | intro, categories, form shell, fallback | No | No | Page builder if CloudCannon-owned; Wix Forms handoff planned |
| `src/pages/privacy/index.astro` | policy placeholder | No | No | Hardcoded noindex placeholder until approved legal copy exists |

## Layouts and components

- `BaseLayout.astro` owns metadata, structured data, header, footer, skip link, and the page slot.
- Shared components cover navigation, action bands, breadcrumbs, prototype forms, newsletter, source notices, and priority states.
- Interactivity uses small native scripts only; there are no hydrated framework islands.
- Existing `set:html` use is limited to JSON-LD serialization.
- There are no scroll-reveal systems or content-hidden entrance animations.
- Images currently use remote Wix media or plain `<img>` output; responsive Wix CDN transforms will be supplied by the adapter/presentation data.

## Primitive/computed and editable-region census

No CloudCannon component registry exists. Wix data and presentation-state computations stay inside typed components/adapters rather than becoming CloudCannon editable expressions. There are no CloudCannon `data-editable` regions in this hosting-only pass.

## Build pipeline

- Build command: `npm run build`.
- Full pipeline: `astro check && astro build`.
- Output: `dist`.
- Static directory: `public`; it contains the site favicon and is available for future approved uploads.
- Canonical site: `https://www.justiceleagueglm.org`.
- Trailing slashes and directory-format output are enabled.
- Required public build configuration: Wix client ID and Wix site ID. Both have safe checked-in defaults and may be overridden in CloudCannon environment settings.
- Network failure must not fail the build; it must produce explicit event error/empty UI.

## Sizing

- Total page routes: 15 (threshold >30: not tripped).
- Hardcoded routes that would become CloudCannon collections if CloudCannon owned their content: 11 (threshold >15: not tripped).
- Distinct CloudCannon content collections proposed: 0 (threshold >5: not tripped).
- Tripped thresholds: 0/3. A single-pass hosting configuration is appropriate.

## Deferred CloudCannon work

- Visual editing is deferred because Wix is the approved content system.
- CloudCannon content restructuring is deferred to prevent dual ownership.
- If presentation copy later moves to CloudCannon, create one multi-schema `pages` collection rather than one collection per route, then repeat the audit and visual-editing phases.
