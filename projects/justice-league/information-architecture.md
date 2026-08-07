# Justice League of Greater Lansing Michigan: Information Architecture

## Status and planning basis

- **Status:** Approved prototype architecture; amended August 7, 2026 for public-route reconciliation, leadership media, and donor publication policy
- **Site:** Justice League of Greater Lansing Michigan
- **Frontend / backend:** Astro with TypeScript / Wix Headless
- **Selected direction:** Lansing in Action, led by Documentary Community with Editorial Evidence and Campaign modes
- **Sitewide primary CTA:** Support Reparations
- **Sitewide secondary CTA:** Join the Work
- **Primary geography:** Greater Lansing, Michigan; exact service area remains `[NEEDS CLIENT INPUT: Confirm whether the formal service area is Ingham, Clinton, and Eaton counties or another boundary]`.

This architecture groups content around user tasks rather than the current Wix menu structure. It does not create separate location pages or duplicate pages for keyword targeting. Current-site facts and URLs were inspected on August 6, 2026; a complete Wix URL and content export is still required before migration.

## Architecture principles

1. Make the two stable participation paths—support reparations and join the work—available throughout the site without allowing them to compete equally on every page.
2. Keep the homepage a local orientation and action hub, not the full repository for history, scholarship instructions, media, or governance.
3. Separate three genuinely different user intents:
   - understand reparations and the local model;
   - evaluate or use the scholarship program;
   - verify activity, outcomes, leadership, and governance.
4. Use one canonical page for each purpose. FAQs belong on the page whose decision they support unless the volume later proves a separate resource is necessary.
5. Treat events, news, and campaign priorities as maintainable Wix-backed collections. A current campaign may be promoted across the site but should not duplicate its canonical event, scholarship, or support content.
6. Preserve documentary material with context, captions, dates, rights, and descriptive links. Do not create a context-free gallery.
7. Do not publish impact, supporter, donor, leadership, financial, or structured-data claims until they are verified and approved.

## Recommended sitemap

```text
/
├── about/
│   ├── history/
│   └── leadership/
├── reparations/
├── scholarship/
├── impact/
├── events/
│   └── [slug]/
├── news/
│   └── [slug]/
├── join-the-work/
├── support-reparations/
└── contact/
```

Campaign promotion is a CMS content type, not a separate indexable branch in the initial sitemap. Each campaign record points to one canonical destination: an event, scholarship action, Support Reparations, Join the Work, or an approved external action. If a future campaign has substantial unique information that cannot live on one of those page types, it may receive `/campaigns/[slug]/` only after a page specification establishes a distinct purpose.

## Route table

| Route | Page name | Audience | User intent | Primary conversion | Secondary conversion | Search intent | Wix data source | Indexability | Required content | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | Home | All audiences; especially Greater Lansing residents, prospective supporters, and returning participants | Identify the organization, understand its local purpose, see what matters now, and choose a next step | Support Reparations | Join the Work | Brand + Greater Lansing reparations/community organization | Site settings singleton; current-priority CMS record; featured event; featured story; verified evidence records | Index; self-canonical | Approved mission statement, current priority, authentic lead image, verified proof, participation paths, trust links | Ready for page specification; content blockers remain |
| `/about/` | About the Justice League | Prospective supporters, partners, donors, media, grant makers | Understand mission, vision, local role, organizational model, and legitimacy | Join the Work | Support Reparations | Organization name, mission, Greater Lansing nonprofit | About singleton; governance/document references | Index | Approved mission and vision, organizational description, verified status, governance summary, contact pathway | Planned; needs approved copy and governance evidence |
| `/about/history/` | History and Timeline | Researchers, educators, supporters, media, partners | Learn how the organization began and trace verified milestones | Explore Reparations | Join the Work | Justice League GLM history, Greater Lansing reparations history | Milestones collection; historical media; citations | Index | Verified founding narrative, dated milestones, sources, image rights/captions | Planned; verify every milestone and quotation |
| `/about/leadership/` | Leadership and Governance | Donors, partners, members, media, grant makers | Identify accountable leadership and understand governance | Contact the Organization | Join the Work | Justice League GLM leadership, board, governance | Typed verified roster; locally migrated Wix portraits and hero; future people collection | Prototype noindex; index after launch approval | Current names, published roles, verified portraits, group distinctions, correction path, governance gaps | Current roster and media implemented; governance documents still need client input |
| `/reparations/` | Reparations in Greater Lansing | Residents, houses of worship, partners, educators, donors | Understand what reparations means in this organization and how the local work operates | Support Reparations | Join the Work | Reparations Greater Lansing, faith-based reparations, racial wealth gap Lansing | Reparations page singleton; sources collection; related stories and media | Index | Plain-language definition, local context, methods, source notes, scope of faith relationships, links to evidence and action | Planned; claims and sources require editorial verification |
| `/scholarship/` | Reparations Scholarship | Applicants, families, educators, donors, partners | Check current cycle, eligibility, requirements, dates, and application status | Apply or view current scholarship status | Support the Scholarship | Greater Lansing reparations scholarship, Lansing scholarship eligibility/application | Scholarship cycle collection; Wix Form/CRM or approved hosted form; document assets; recipient stories with consent | Index; expired cycle content must remain accurate | Current dates/status, award terms, eligibility, requirements, process, accessible application, privacy/consent text, FAQ, contact | Blocked until current cycle and workflow are confirmed |
| `/impact/` | Impact and Accountability | Donors, partners, grant makers, media, residents | Verify what the organization has done and how support connects to outcomes | Support Reparations | View Governance | Justice League GLM impact, reparations work Lansing | Verified evidence collection; milestone references; approved supporter/partner records; documents | Index only after substantive verified evidence exists | Defined reporting period, methodology, scholarship/program evidence, funding/use explanation, citations, approvals | Blocked by verified evidence and transparency content |
| `/events/` | Events and Meetings | Residents, supporters, members, applicants, media | Find upcoming events and recurring meetings; understand registration status | Register for an Event | Join the Work | Justice League GLM events, reparations events Lansing | Wix Events; optional meeting CMS records if not represented as Wix Events | Index | Upcoming events, dates/times/time zone, locations or virtual access, cost, accessibility, registration state, past-event policy | Planned; integration and content ownership need confirmation |
| `/events/[slug]/` | Event Detail | Event-specific attendees and supporters | Decide whether and how to attend, register, buy a ticket, sponsor, or advertise | Event-specific registration/action | Support Reparations | Specific event name + Lansing | Wix Events detail; optional related campaign record | Index for public substantive events; noindex for private/test/thin events | Verified date, time, place, cost, capacity/status, accessibility details, organizer, description, image, cancellation/contact policy | Dynamic template planned |
| `/ad-booklet/` | 2026 Fall Celebration Ad Booklet | Businesses, houses of worship, community partners, and supporters | Compare placements, prepare a camera-ready file, choose a payment path, and submit an advertisement | Continue to verified Wix ad workflow | Contact the Organization | Justice League GLM Fall Celebration ad booklet | Current Wix page and Wix Forms & Payments; standalone headless handoff pending | Prototype noindex; index only while the campaign is maintained and launch-safe | Deadline, placement sizes/prices, formats, submission process, check instructions, campaign owner, form/payment handoff | Active current-site campaign observed August 7, 2026; static prototype planned |
| `/news/` | News, Stories, and Newsletter Archive | Supporters, media, partners, researchers | Follow current work and browse dated organizational updates | Read a Current Story | Subscribe | Justice League GLM news, reparations news Lansing | Wix CMS or Wix Blog `[NEEDS CLIENT INPUT: Confirm source]`; newsletter archive records | Index | Dated entries, clear content types, excerpts, authors/organization attribution, media rights, archive policy | Planned; source system and migration inventory needed |
| `/news/[slug]/` | Story or Update | Story-specific audiences | Read a complete, dated account with context and related action | Contextual action tied to the story | Read Related Work | Specific story/event/topic | Wix CMS or Wix Blog; media assets | Index when original and substantive; noindex for thin notices | Headline, date, author/publisher, body, sources, media/captions, related route, correction/update date | Dynamic template planned |
| `/join-the-work/` | Join the Work | Prospective members, volunteers, committee participants, houses of worship, presenters/hosts | Compare participation pathways and submit an appropriate inquiry | Submit Participation Interest | Subscribe | Join Justice League GLM, volunteer reparations Lansing, request presentation | Wix Forms + Contacts/CRM; participation-options CMS singleton | Index | Real participation options, commitment expectations, meeting details if public, response owner/timing, privacy notice, success/error behavior | Blocked by confirmed participation and membership process |
| `/support-reparations/` | Support Reparations | Individual donors, houses of worship, partners, event supporters | Understand support options and complete a reparations payment or donation | Complete Support Transaction | Join the Work | Donate/support reparations Greater Lansing | `[NEEDS CLIENT INPUT: Confirm Wix donation/payment product or external processor]`; support-designation content | Index | Verified support designations, use of funds, tax language, processor, fees, recurring options, receipt and post-payment flow, mailing instructions | Blocked by processor, financial copy, and legal review |
| `/contact/` | Contact | General inquiries, media, partners, applicants | Find a verified contact method or send a general inquiry | Send an Inquiry | Join the Work | Contact Justice League of Greater Lansing | Wix Forms + Contacts/CRM; site settings singleton | Index | Email/address approved for publication, inquiry categories, response expectation, privacy notice, accessible errors/success | Planned; verify contact details and owner |

## Primary navigation

Approved reconciled desktop/mobile navigation order:

1. **About**
   - About the Justice League
   - History and Timeline
   - Leadership and Governance
2. **Our Work**
   - Reparations in Greater Lansing
   - Reparations Scholarship
   - Impact and Accountability
3. **Events & Meetings**
   - Upcoming events
   - Committee meetings
   - Ad booklet
4. **News & Media**
   - Recent news and videos
   - Photos
   - Apology 2023
   - E-News Briefs
5. **Join the Work**
6. **Support Reparations** — visually dominant action, separate from the standard text links

Rationale:

- “Our Work” groups distinct program/evidence destinations without reproducing the current, deep “Our Vision” menu.
- Events and News remain top-level because they answer frequent, time-sensitive returning-user tasks.
- Join the Work is a descriptive, lower-commitment participation path.
- Support Reparations is the only sitewide primary action treatment. Campaign modules may use a more specific CTA when the destination is current and verified.
- Do not add a “Media” parent containing disconnected photos, videos, news, and newsletters. Media should appear within dated stories, historical evidence, impact, or reparations education according to context.
- Labels under News & Media link to the relevant contextual record or stable fragment; they do not recreate a context-free media silo.

The authoritative, testable Wix-to-Astro mapping is centralized in `src/data/route-reconciliation.ts`. It records the Wix label and URL, current public state, Astro destination, treatment, navigation location, migration state, and rationale for every exposed public concept reviewed on August 7, 2026.

## Utility navigation

Use a restrained utility area rather than a second crowded menu:

- Contact
- Newsletter signup or “Subscribe” anchor
- Current meeting link only when its date, access details, and owner are maintained
- Search only after enough substantive content exists and a usable search implementation is selected

Do not expose administrative Wix account links unless a verified member-only workflow exists. Do not label a link “Apply” outside an active scholarship cycle.

## Mobile navigation model

- Compact header with logo/home link and a native menu button; avoid text placed over uncontrolled photography.
- The menu opens as an in-flow or modal panel with a clear label, close control, focus management, Escape support, focus restoration, and background interaction prevention where modal.
- Show primary destinations in a single vertical reading order. “About” and “Our Work” may use native button-controlled disclosures, expanded one group at a time; destination links remain separate from disclosure controls.
- Place **Support Reparations** as the first visually distinct action inside the opened menu and **Join the Work** immediately after the main destinations. Do not use a persistent bottom CTA that obscures content.
- Put Contact and Subscribe in a lower-contrast utility group.
- Ensure 44 by 44 CSS pixel practical targets, visible focus, 320-pixel reflow, and no hover dependency.
- On an event or scholarship page, the local page action may replace repeated sitewide CTA emphasis within content, while the menu remains stable.

## Footer structure

### Identity and local context

- Registered logo, exact organization name, concise approved mission sentence
- Verified mailing/contact details
- Greater Lansing service-area wording only after approval

### Explore

- About
- Reparations
- Scholarship
- Impact and Accountability
- Events
- News & Stories

### Take action

- Support Reparations
- Join the Work
- Subscribe
- Contact

### Governance and trust

- Leadership and Governance
- Verified nonprofit/status document links only when approved and accessible
- Privacy policy `[NEEDS CLIENT INPUT: Provide or approve]`
- Accessibility statement/contact `[NEEDS CLIENT INPUT: Define process]`
- Terms or donation disclosures if legally required `[NEEDS CLIENT INPUT: Legal review]`

### Social and legal

- Verified social profiles with descriptive accessible names
- Copyright year and organization name
- No partner, sponsor, accreditation, or tax-status claim without current evidence

## User journeys

### 1. Resident learning about local reparations

Search/social/referral → Home local mission → Reparations in Greater Lansing → methods, sources, and local evidence → Support Reparations or Join the Work.

Trust requirement: definitions and claims must be sourced; action must follow understanding rather than interrupt it.

### 2. Prospective donor or reparations payer

Home/current story/event → Impact and Accountability or Reparations → Support Reparations → designation/amount/processor → confirmation and receipt → optional newsletter or Join the Work.

Trust requirement: explain use, designation, processor, and what happens after payment before the financial commitment.

### 3. Scholarship applicant or family

Search/direct link → Scholarship → current status and eligibility → requirements/dates → accessible application → confirmation and contact fallback.

Trust requirement: cycle dates, county/geography rules, award terms, required uploads, consent, and closed-state behavior must be current. Do not make applicants traverse impact or donor copy to find requirements.

### 4. Event attendee

Home priority/Event listing → Event detail → date/time/location/cost/accessibility → Wix registration or hosted checkout → confirmation → calendar/updates.

Trust requirement: registration state and event facts must be sourced from one maintained record.

### 5. Potential participant, member, volunteer, or host

Home → Join the Work → compare real pathways and expectations → submit interest → explicit confirmation and response expectation.

Trust requirement: do not imply membership exists until the process and obligations are approved.

### 6. Partner, house of worship, media, or grant maker

About/Reparations → Impact and Accountability → Leadership and Governance → Contact or request a presentation through Join the Work.

Trust requirement: current leadership, documents, evidence dates, and contact owner must be visible.

### 7. Returning supporter

Direct/Home → current campaign, Events, or News → specific action → Subscribe for updates.

Trust requirement: remove or label expired priorities promptly; never manufacture urgency.

## Conversion paths

### Primary: Support Reparations

Entry points:

- Header and mobile menu
- Homepage opening action group
- Homepage verified evidence section
- Reparations explanation after the local model is clear
- Impact and Accountability beside relevant proof
- Event details when support is appropriate and separate from registration
- Story details when the story establishes a truthful connection

Destination: `/support-reparations/`, except a verified Wix-hosted event checkout remains the event CTA. The support page must explain the transaction before sending users to any hosted processor.

### Secondary: Join the Work

Entry points:

- Header/navigation
- Homepage opening action group
- Homepage participation pathways
- Reparations, About, Events, and News in context
- Footer

Destination: `/join-the-work/`, where pathways are differentiated by real task rather than presented as equal generic cards.

### Contextual conversions

- Scholarship: Apply/view status
- Events: Register/buy ticket/RSVP
- News: Subscribe or take the action related to the story
- Contact: Send an inquiry

Contextual actions may become the dominant page-level CTA, but they do not change the sitewide conversion strategy.

## URL strategy

- Use lowercase, hyphenated, human-readable paths with trailing-slash behavior normalized consistently at the hosting layer.
- Keep evergreen concepts stable: `/reparations/`, `/scholarship/`, `/impact/`.
- Preserve event and story slugs when they are descriptive and conflict-free.
- Do not put dates in story URLs unless needed to prevent collisions; display dates in content and metadata.
- Do not create city-swapped pages for Lansing, East Lansing, or surrounding counties.
- Use query parameters only for non-indexable filters/tracking. The unfiltered listing is canonical.
- Canonical tags must resolve to the preferred HTTPS `www` or apex hostname `[NEEDS CLIENT INPUT: Select canonical hostname]`.
- XML sitemap includes only canonical, public, indexable URLs. Expired events may remain indexable when they retain useful original content; closed/private/thin records should be noindex or removed with an appropriate redirect/status.

## Internal-linking plan

| Source | Required destinations | Link purpose |
|---|---|---|
| Home | Reparations, Scholarship, Impact, current Event/Story, Join the Work, Support Reparations, About/Leadership | Orient and expose proof/action without reproducing every page |
| About | History, Leadership, Reparations, Impact, Contact | Move from identity to verification and participation |
| History | Reparations, dated related stories, Impact, Join the Work | Connect milestones to explanation, evidence, and current action |
| Leadership | About, Impact, Contact, Join the Work | Establish accountability and a contact path |
| Reparations | Impact, Scholarship, History, related stories/events, Support Reparations, Join the Work | Connect education to local proof and action |
| Scholarship | Support Reparations, Contact, relevant news/recipient stories, Reparations | Serve applicants first; then explain/support the program |
| Impact | Reparations, Scholarship, History, Leadership, Support Reparations | Keep proof tied to method, governance, and support |
| Events listing | Event details, Join the Work, News | Support discovery and participation |
| Event detail | Events parent, relevant program, Support Reparations when appropriate, related story | Provide breadcrumbs, context, and next action |
| News listing | Story details, Subscribe, Events | Support discovery and retention |
| Story detail | News parent, related program/event, contextual CTA | Prevent orphan articles and connect reporting to action |
| Join the Work | Events, Reparations, Contact, Subscribe | Let visitors understand work before submitting |
| Support Reparations | Impact, Reparations, Contact | Resolve trust questions around support |
| Contact | Join the Work, Scholarship where relevant, Support Reparations | Route specialized requests to the correct process |

Every dynamic detail page needs crawlable breadcrumbs and at least one related evergreen page. Automated related links must have a manual editorial override and must not create circular “read more” lists without purpose.

## Wix data-source and integration map

| Experience/content | Proposed Wix source or integration | Astro responsibility | Required validation / fallback |
|---|---|---|---|
| Organization settings | CMS singleton: name, mission excerpt, contact details, social URLs, canonical settings | Server-render shared header/footer and organization metadata | Confirm content owner, canonical hostname, exact registered name, and publish workflow |
| Current priority campaign | CMS collection with status, eyebrow, title, summary, start/end, media, CTA label, canonical destination, priority, and fallback | Select one current approved record server-side; render stable empty/fallback state | Dates/time zone, approval state, destination allowlist, owner; fall back to evergreen Support Reparations/Join the Work copy |
| About/reparations page content | CMS singletons or structured sections | Pre-render/server-render semantic content | Define fields carefully; avoid a freeform builder that can break heading hierarchy |
| Historical timeline | CMS milestones collection | Sort verified dates, render citations/captions, generate anchors | Editorial verification; undated/uncertain milestones visibly qualified |
| Leadership/governance | CMS people and governance records; Wix Media for approved photos/documents | Render roles, bios, document links | Approval/expiration fields; no unpublished or former leadership shown as current |
| Scholarship | `ScholarshipCycles`, `ScholarshipRecipients`, and `ScholarshipCohorts` public CMS collections plus a future approved Wix Form/CRM workflow | Query approved cycle, winner, essay, and cohort-media records at build time; show current status and the public recipient archive | Public content collections are connected. Require explicit consent/publication flags; keep applicant submissions private; confirm future form destination, upload/signature accessibility, privacy/retention, confirmation, and next-cycle ownership |
| Impact evidence | CMS evidence collection with claim, value/text, period, method, source, approval, program, and updated date | Render only approved records with nearby method/source | Do not calculate or infer public metrics from incomplete Wix data; fallback is qualitative verified evidence |
| Events | Wix Events API/headless SDK | Render listings/details as HTML, normalize dates/time zones, link to hosted registration/checkout | Confirm API permissions, recurrence, capacity/status, cancellation, error/empty states; cached fallback with freshness label |
| Event registration/payments | Wix-hosted registration or checkout initially | Provide truthful handoff and return/confirmation path | Confirm deep links, authentication, fees, receipts, refunds, accessibility, and cross-domain analytics |
| News/stories/newsletters | `[NEEDS CLIENT INPUT: Confirm Wix Blog versus CMS collection and newsletter archive source]` | Render listing/detail pages, metadata, RSS if approved | Export inventory, authorship, dates, redirects, media rights; link to accessible HTML rather than PDF-only updates where possible |
| Images/video | Wix Media Manager or approved external video host | Responsive images, intrinsic sizes, captions, lazy loading below fold; facade for video | Original files, rights, focal points, alt/caption fields; no autoplay; transcript/captions for media |
| Join/contact forms | Wix Forms and Contacts/CRM | Accessible form UI or verified hosted handoff; server-side validation; success/error states | Confirm supported headless submission method, spam protection, consent, routing, response owner/time; fallback contact email |
| Newsletter | Wix Email Marketing/Contacts through supported form/API `[NEEDS CLIENT INPUT: Confirm]` | Minimal email form with consent and clear confirmation | Double opt-in, privacy link, error state, duplicate subscriber behavior, owner |
| Support payments | `[NEEDS CLIENT INPUT: Identify current donation/reparations processor, Wix product, and designation model]` | Explain designations/use and link to or integrate only an approved PCI-safe flow | Never collect card data directly in Astro without an approved compliant architecture; confirm receipts, recurring support, refunds, tax wording, and post-payment state |
| Search | Defer initially; later use server-generated index or approved service | Search only substantive public content | Do not ship search until content volume justifies it and accessibility/performance budgets are met |
| Analytics/consent | `[NEEDS CLIENT INPUT: Analytics, Search Console, consent requirements, and owner]` | Minimal, consent-aware loading; conversion events without sensitive data | Define baseline, retention, privacy policy, cross-domain tracking, and third-party budget |

All critical content should be available as server-rendered or pre-rendered HTML. Interactive Wix integrations must define loading, empty, stale, error, success, and no-JavaScript/handoff behavior before implementation.

## Redirect requirements from the current Wix site

The following routes were observed on the public site on August 6, 2026. They are a seed map, not a complete migration inventory.

| Current Wix route | Proposed destination | Requirement / note |
|---|---|---|
| `/` | `/` | Retain; replace content in place |
| `/donate` | `/support-reparations/` | Permanent 301 after the new support flow is verified |
| `/scholarship` | `/scholarship/` | Normalize only if trailing-slash policy differs |
| `/faq` | `/scholarship/#frequently-asked-questions` | 301 only after visible FAQ content and a stable fragment exist |
| `/vision-justice-league-lansing` | `/about/` | 301; retain unique mission/vision content during consolidation |
| `/history` | `/about/history/` | 301 |
| `/timeline` | `/about/history/#timeline` | 301 only after full timeline migration and stable fragment |
| `/reparations` | `/reparations/` | Normalize only if needed |
| `/faithbased` | `/reparations/#faith-and-reparations` | 301 after approved faith-based content is preserved |
| `/supporters` | `/impact/#community-support` | Conditional: obtain naming/logo consent and preserve substantive content; otherwise map to `/impact/` |
| `/donors` | `[NEEDS CLIENT INPUT: Preserve approved recognition on /impact/ or retire private/outdated donor listings]` | Do not redirect until consent, currentness, and destination content are resolved |
| `/ourteam` | `/about/leadership/` | 301 after current roles are verified |
| `/gallery` | `/news/` | 301 after contextualized photo/video stories are migrated; do not recreate a context-free gallery |
| `/apology-2023` | `/news/[approved-public-apology-slug]/` or `/about/history/#public-apology` | Select based on content depth; preserve video, transcript/caption, date, and context |
| `/e-news-briefs` | `/news/#newsletter-archive` | 301 after archive migration and stable fragment |
| `/recent-news` | `/news/` | 301 |
| `/upcomingevents` | `/events/` | 301 |
| `/commiteemeetings` | `/events/#meetings` | Correct legacy spelling; redirect only after current meeting information exists |
| `/contact` | `/contact/` | Keep route; add clear path to `/join-the-work/` for participation inquiries |
| `/ad-booklet` | `/ad-booklet/` | Retain the active 2026 campaign route; remove or redirect only after the September 30, 2026 deadline and an approved archive/closure decision |
| `/event-details-registration/[legacy-slug]` | `/events/[preserved-slug]/` | Generate one-to-one redirects for every exported event; retain useful past events or map true duplicates to the closest canonical record |
| Wix file/PDF URLs under `/_files/` | Preserved accessible file URL or the HTML page that replaces it | Inventory inbound links; do not redirect a necessary application/document until an accessible equivalent exists |

Before cutover:

1. Export Wix page URLs, event URLs, blog/CMS URLs, media/PDF URLs, SEO titles, canonical tags, traffic/backlink data, and status codes.
2. Crawl both discovered links and XML sitemaps; supplement with Search Console top pages and external backlinks.
3. Assign every legacy URL one outcome: retain, one-hop 301 to the closest equivalent, 410 for intentionally removed content with no replacement, or noindex while retained for a required workflow.
4. Avoid chains, loops, blanket redirects to Home, and redirects to expired campaigns.
5. Preserve query parameters only when required by a working Wix transaction; strip marketing parameters safely.
6. Test old URLs, canonical URLs, internal links, XML sitemap, and hosted Wix return URLs in staging and after launch.
7. Keep the redirect map version-controlled and monitor 404s for at least the post-launch period `[NEEDS CLIENT INPUT: Define owner and monitoring duration]`.

## Content gaps and unresolved questions

### Blocks homepage prototype content approval

- `[NEEDS CLIENT INPUT: Confirm the current homepage priority campaign/event/scholarship record, CTA, destination, start/end dates, and owner.]`
- `[NEEDS CLIENT INPUT: Provide the approved specific Greater Lansing mission statement and confirm whether current-site wording may be reused.]`
- `[NEEDS CLIENT INPUT: Provide at least one rights-cleared, high-resolution Greater Lansing documentary image with date, context, subjects/consent status, focal point, and caption.]`
- `[NEEDS CLIENT INPUT: Approve one piece of scholarship or impact evidence, its reporting period, methodology/source, and public wording.]`
- `[NEEDS CLIENT INPUT: Confirm the real Join the Work pathways, whether membership is offered, and what happens after submission.]`
- `[NEEDS CLIENT INPUT: Confirm the support processor, support designations, use-of-funds copy, legal/tax wording, and post-payment flow.]`

### Blocks later route implementation or migration

- Exact redesign scope and launch phases.
- Complete Wix content, URL, SEO, form, event, media, and PDF inventory.
- Current leadership, board, advisory council, governance documents, and publication approvals.
- Exact geographic/service scope and terminology.
- Scholarship cycle dates, eligibility, award terms, form/privacy/retention rules, and accessible alternatives.
- Approved impact evidence; donor/supporter recognition consent and expiration policy.
- Wix applications, APIs, credentials, environments, rate limits, and content owners.
- Event ownership, recurrence, cancellation, accessibility, ticketing, refund, and archive policies.
- News source system, migration scope, authorship, corrections, and archive policy.
- Newsletter provider, consent model, double-opt-in behavior, and privacy policy.
- Contact categories, CRM routing, spam protection, response time, and fallback contact.
- Canonical hostname, self-managed hosting provider, redirect mechanism, analytics, consent, Search Console, and monitoring owner.
- Required privacy, accessibility, terms, donation, and scholarship legal content.
- Language, reading-level, and assistive-technology needs beyond the WCAG 2.2 AA baseline.
- Original logo assets and usage rules; `brand-tokens.md` is not present and production values must be validated against source artwork.

## Approval criteria

The information architecture is ready for approval when:

- stakeholders confirm that every route has a distinct purpose and owner;
- Support Reparations and Join the Work are accepted as the stable sitewide hierarchy;
- the current-priority campaign model and canonical-destination rule are accepted;
- scholarship, event, donation, join, newsletter, and contact workflows have named Wix sources or approved fallbacks;
- the redirect seed map is accepted as provisional pending a full Wix export/crawl;
- no route depends on invented organization facts, duplicate location content, or unverified proof;
- navigation labels are tested against the primary audience tasks; and
- unresolved content remains visibly marked rather than silently filled.

## Approved donor and supporter amendment — August 7, 2026

The acknowledgment content now has three distinct responsibilities:

- `/impact/` remains the accountability framework and dated program-evidence page. It links to, but does not contain, the full acknowledgment rosters.
- `/supporters/` is the canonical Repairers of the Breach page. It uses the current Wix Supporters page as the curated roster and logo source.
- `/donors/` is the canonical donor acknowledgment page. It consumes the public Little Green Light report at static build time and uses a sanitized checked-in fallback if the external request or validation fails.

Add **Supporters** and **Donors** as separate children of **Our Work** in desktop and mobile navigation. Add both to the footer trust group. This keeps the labels explicit and avoids reclassifying either dataset.

Only `Addressee` and derived recognition-year membership may cross the donor integration's public boundary. LGL IDs, fiscal-year amounts, groups, response headers, and cookies are not public page data. See `pages/donors-spec.md` and `pages/supporters-spec.md` for the approved page-level compositions and acceptance criteria.
