# Justice League Implementation Plan

## Objective

Validate the Phase 1 design agent by taking one real project from discovery through a working Wix Headless frontend, while preserving verified Justice League content and existing Wix business workflows.

## Confirmed technical direction

- Frontend: Astro with TypeScript
- Headless model: Wix Headless, self-managed
- Hosting: self-hosted provider to be selected before deployment
- Wix remains the backend for applicable CMS, Events, Forms, Contacts/CRM, payments, and email workflows
- Selected art direction: Lansing in Action, using Documentary Community as the primary system
- Supporting content modes:
  - Editorial Evidence for history, reparations education, governance, and impact
  - Campaign mode for events, scholarship cycles, fundraising, and deadlines

## Current visual system observed

The current site establishes a recognizable palette and visual identity:

- Black as the primary canvas
- Deep red and green derived from the Justice League logo
- Gold/yellow for headings, menu accents, and calls to action
- White for high-contrast body copy
- Documentary community photography
- Large uppercase civic headings

The new system should preserve this identity while improving hierarchy, readability, consistency, and mobile composition.

## Provisional brand tokens

Use `brand-tokens.md` as the source of truth. Exact production values must be checked against the original logo files before launch.

## Implementation sequence

### Milestone 1: Foundation and content inventory

Deliverables:

- Confirm selected art direction
- Finalize brand tokens
- Export and inventory Wix content
- Audit original image files and usage rights
- Identify Wix applications currently used
- Confirm donation, event, newsletter, and participation workflows
- Select hosting provider

Exit criteria:

- No unresolved blocker affecting homepage structure
- Original logo and primary images are available
- Wix Headless project and credentials can be configured

### Milestone 2: Information architecture

Create:

- Sitemap
- Primary navigation
- Utility navigation
- Footer architecture
- Conversion paths
- Wix data-source map
- URL migration and redirect plan

Recommended initial routes:

- `/`
- `/about`
- `/mission-and-history`
- `/leadership`
- `/reparations`
- `/scholarship`
- `/events`
- `/events/[slug]`
- `/impact`
- `/join-the-work`
- `/support-reparations`
- `/news`
- `/contact`

Exit criteria:

- Every route has a defined audience, purpose, conversion, data source, and indexability status

### Milestone 3: Homepage page specification

Create the homepage specification before code.

Proposed hierarchy:

1. Local documentary opening with a specific mission statement
2. Primary actions: Support Reparations and Join the Work
3. Current campaign or event module
4. Mission and local context
5. Verified impact or scholarship evidence
6. Ways the work happens
7. Community stories/news
8. Participation pathway
9. Newsletter signup
10. Governance and trust links

Do not recreate the current oversized text-over-photo mobile section. The new mobile opening should use a controlled image crop, shorter text measure, and visible action hierarchy.

### Milestone 4: Design-system prototype

Build only the shared foundation and homepage prototype:

- Tokens
- Typography
- Header and mobile navigation
- Buttons and links
- Content containers
- Documentary media component
- Evidence module
- Campaign module
- Event teaser
- Impact statistic treatment
- Newsletter form shell
- Footer

Exit criteria:

- Homepage renders at 375, 390, 768, 1024, and 1440 pixels
- No horizontal overflow at 320 pixels
- Keyboard navigation and focus states work
- No fabricated content

### Milestone 5: Headless integrations

Integrate one workflow at a time:

1. Wix CMS content
2. Wix Events listing and detail
3. Wix Forms or CRM submission
4. Newsletter integration
5. Donation or hosted checkout path

Use Wix-hosted checkout for payment-sensitive flows initially unless a verified custom-headless payment flow is justified.

Exit criteria:

- Success, error, loading, and empty states are implemented
- Each integration has a fallback and owner

### Milestone 6: Remaining pages

Build in this order:

1. Reparations
2. Scholarship
3. Events
4. About/history
5. Leadership and governance
6. Join the Work
7. Support Reparations
8. News/resources
9. Contact

Each route requires a completed page specification.

### Milestone 7: Review and release

Run:

- Visual-design review
- Responsive-design review
- Anti-template review
- Accessibility audit
- Technical SEO audit
- Performance review
- Website QA

Create redirects from current Wix URLs before domain cutover.

## Working experiment

To validate the agent, compare the new homepage prototype against the current homepage using the repository rubric.

Measure:

- Strategic-fit score
- Brand-distinctiveness score
- Mobile overflow and readability defects
- Accessibility defects
- Primary-action clarity
- Generic AI-pattern count
- Performance budget
- Time and context required to complete the workflow

## Immediate next task

Run `information-architecture`, then `page-content-planner` for the homepage. Do not build the full website first. The first implementation target is one complete, reviewable homepage prototype connected to only the minimum Wix data needed to validate the system.