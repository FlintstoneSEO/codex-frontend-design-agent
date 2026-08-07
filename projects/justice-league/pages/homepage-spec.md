# Homepage Specification: Justice League of Greater Lansing Michigan

## Status and dependencies

- **Route:** `/`
- **Page type:** Editorial orientation and action hub
- **Status:** Proposed for stakeholder approval; production implementation remains blocked by the content inputs listed below
- **Architecture dependency:** `projects/justice-league/information-architecture.md`
- **Selected direction:** Lansing in Action
- **Primary visual system:** Documentary Community
- **Supporting modes:** Editorial Evidence for mission/proof; Campaign mode for the current priority
- **Frontend / backend:** Astro with TypeScript / Wix Headless

This specification plans the homepage only. It does not authorize production copy, unverified claims, or Astro implementation.

## Page objective

Help a first-time or returning visitor quickly understand the Justice League’s specific Greater Lansing reparations mission, see one current verified priority, encounter credible evidence of the work, and choose between the dominant action—**Support Reparations**—and the lower-commitment path—**Join the Work**.

The homepage should establish local relevance and trust, then route deeper questions to purpose-built pages. It should not contain the full history, scholarship application, event catalog, gallery, or governance record.

## Audiences

### Primary audiences

- Greater Lansing residents interested in racial justice, reparations, and community participation
- Existing supporters and members returning for current priorities, events, and updates
- Prospective donors and event participants
- Scholarship applicants, recipients, and families
- Community partners and houses of worship

### Secondary audiences

- Sponsors and advertisers
- Media and public officials
- Grant makers and institutional partners
- Researchers and educators
- Volunteers and prospective committee participants

## User intent

### First-time visitor

- Confirm this is the Justice League of Greater Lansing Michigan.
- Understand what “repairing the breach” and reparations mean locally.
- See evidence that the organization is active, accountable, and connected to Greater Lansing.
- Find a trustworthy next step.

### Returning visitor

- Find the current campaign, event, scholarship cycle, or deadline.
- Register, apply, support, participate, read an update, or subscribe without searching through the full site.

## Conversion strategy

- **Primary conversion:** Support Reparations → `/support-reparations/`
- **Secondary conversion:** Join the Work → `/join-the-work/`
- **Contextual conversion:** Complete the current verified campaign action when it has a canonical destination, such as an event detail or current scholarship status
- **Retention conversion:** Subscribe to updates

Support Reparations receives the strongest stable visual treatment. Join the Work remains visible but secondary. The current campaign may be visually urgent, but its CTA must describe the specific action and must not create a second generic donation route.

## Search intent

- **Primary:** Navigational/brand — Justice League of Greater Lansing Michigan
- **Secondary:** Informational/local — reparations in Greater Lansing; racial justice and community action in Lansing
- **Supporting:** Scholarship, event, and participation discovery through internal links to their canonical pages

The homepage should target the organization and its local purpose, not attempt to rank for every program or repeat the detailed intent served by `/reparations/`, `/scholarship/`, `/events/`, or `/impact/`.

## Proposed metadata and heading

- **Proposed title tag:** `Justice League of Greater Lansing | Reparations in Action`
- **Proposed meta description:** `Learn how the Justice League of Greater Lansing advances reparations locally, explore current work, and find ways to support or participate.`
- **H1:** `Repairing the Breach in Greater Lansing`
- **Canonical:** `[NEEDS CLIENT INPUT: Confirm whether the canonical homepage is https://www.justiceleagueglm.org/ or the apex-domain equivalent]`
- **Indexability:** Index, follow; include in XML sitemap
- **Social metadata:** Unique Open Graph title/description and a rights-cleared documentary image with a safe social crop; do not use a campaign image that will make evergreen shares immediately stale

Metadata is proposed copy, not a verified claim set. Final wording should be reviewed with the approved mission statement.

## Content and message strategy

The opening should combine a short, specific local proposition with documentary evidence of place. It should not place a paragraph-sized headline over a full-bleed mobile photograph. The preferred composition is a controlled two-part editorial opening: readable text on a solid black surface and a separate, captioned image with an intentional crop.

The starting hierarchy is adjusted in two ways:

1. Mission and local context are introduced in the opening, then explained after the current priority. This gives the action meaning without delaying returning visitors.
2. “How the work happens” follows verified evidence. Visitors encounter proof before being asked to absorb a broad program model, and every method can then link to a canonical detail page.

## Section hierarchy

| Order | Section / mode | Purpose | User question answered | Required content and verified proof | CTA | Internal links | Layout rationale |
|---:|---|---|---|---|---|---|---|
| 1 | Documentary opening / Documentary Community | Establish identity, local mission, and stable action hierarchy | Who is this, what does it do in Greater Lansing, and what can I do now? | H1; approved 1–2 sentence mission statement; “Greater Lansing, Michigan” context; one authentic local image with date/context/caption/rights; no impact number | **Support Reparations**; secondary **Join the Work** | `/support-reparations/`, `/join-the-work/`, optional contextual text link to `/reparations/` | Asymmetrical text-and-image composition on black; text never baked into or dependent on the photograph; image is adjacent, not a mobile text-over-photo hero |
| 2 | Current priority / Campaign mode | Give returning visitors the one current, time-sensitive action | What is the most important current action, and is it still open? | One approved CMS record: status label, specific title, short summary, dates/deadline/time zone where applicable, destination, image optional, content owner; event/scholarship facts from their canonical record | Specific action such as “View event details,” “Apply for the scholarship,” or “Support this campaign” | Canonical event, scholarship, Support Reparations, or Join the Work destination | Full-width civic notice/editorial strip, not a carousel or equal card grid; expired/empty state falls back to an evergreen action without false urgency |
| 3 | Mission and local context / Editorial Evidence | Explain the organization’s reparations purpose in plain language | What does “repairing the breach” mean here, and why Greater Lansing? | Approved mission/vision excerpt; plain-language local context; definition or short explanation reviewed for accuracy; source note where a historical or wealth-gap claim appears | **Understand Reparations in Greater Lansing** | `/reparations/`, `/about/`, `/about/history/` | Short reading measure with an adjacent pull fact/definition only if verified; typography and rules create evidence mode without decorative cards |
| 4 | Verified scholarship or impact evidence / Evidence mode | Resolve the first credibility question with concrete, scoped proof | What has the organization actually done, and how do we know? | One approved evidence unit with reporting period, scope, methodology/source, and update date; or a verified scholarship story with consent, caption, and accurate status. No inferred totals | **See Impact and Accountability**; contextual **Explore the Scholarship** | `/impact/`, `/scholarship/` | One featured evidence narrative, document excerpt, or annotated image; avoid three statistics and avoid presenting a recipient as a testimonial unless approved |
| 5 | How the organization advances reparations / Editorial pathway | Connect the mission to understandable methods | How does support become local reparations work? | Approved descriptions of actual methods. Candidate topics from current materials—education, scholarships, relationships with houses of worship, and other economic-equity work—must be verified before publication | **Explore the Work** or method-specific descriptive links | `/reparations/`, `/scholarship/`, `/impact/` | Numbered editorial sequence or linked text index; not three interchangeable cards. Each method has distinct evidence and destination or is omitted |
| 6 | Community stories, news, and video / Documentary Community | Show current, dated community activity and provide depth | What is happening in the community, and can I see the work in context? | One lead story plus up to two secondary dated entries from the approved news source; authentic media, captions, authorship/publisher, transcript/captions for video; no auto-embedded feed | **Read the Latest Story**; secondary **All News & Stories** | `/news/[slug]/`, `/news/`, related `/events/[slug]/` | Editorial lead-and-index composition; do not use an autoplay video, social-wall embed, or a visually identical three-card row |
| 7 | Upcoming event or meeting / Campaign-to-documentary transition | Surface the next verified participation moment without duplicating Section 2 | When can I attend something next? | The next public Wix event with current status, date, time, time zone, location/online state, cost, accessibility details if known, and registration state. Hide section when no suitable record exists | **View Event Details** | `/events/[slug]/`, `/events/` | Compact event ledger with one dominant event. If the current priority is already this event, omit this section or show a simple “See all events” link to prevent duplication |
| 8 | Participation pathways / Documentary Community | Help visitors choose a realistic commitment level | How can I participate if I am not ready to give money? | Confirmed options, eligibility/expectations, time commitment where relevant, and next-step behavior; membership must not be implied unless real | **Join the Work**; method-specific contact/request link | `/join-the-work/`, `/events/`, `/contact/` | A progressive list grouped by commitment—learn/attend, contribute time, partner/request a presentation—only when those paths are verified; use rows or steps, not generic cards |
| 9 | Newsletter signup / Utility action | Retain visitors who want updates rather than immediate participation | How can I stay informed, and what will I receive? | Approved email cadence/description, privacy link, consent text, minimal email field, success/error/duplicate states, provider and owner | **Subscribe for Updates** | `/news/`, `[NEEDS CLIENT INPUT: Privacy-policy route]` | Compact inline form on a solid surface; visible label, no placeholder-only input, no competing donation message |
| 10 | Governance and transparency / Editorial Evidence | End with accountability paths and institutional contact | Who leads this work, and where can I verify or contact the organization? | Approved leadership/governance summary; verified status/documents only; current contact details; last-reviewed date where appropriate | **Meet the Leadership**; secondary **Contact the Organization** | `/about/leadership/`, `/impact/`, `/contact/`, `/about/` | Text-led trust index with descriptive links; no logo wall or unverified badges. Footer follows with repeated essential navigation only |

## Section behavior rules

- Section 2 and Section 7 must never feature the same event as two competing promotional modules. If the current priority is the next event, Section 7 collapses to a simple listing link or is omitted.
- Section 4 must not render until at least one evidence record has an approved claim, period, source/method, and publication owner. Its fallback is a verified qualitative scholarship/program feature, not an invented number.
- Section 5 includes only methods with substantive corresponding content. Do not use filler copy to force a symmetrical count.
- Section 6 is editorially selected; it is not an uncontrolled Wix/social feed.
- Every campaign date is machine-readable where appropriate and displayed with the time zone. Expired records must be replaced or visibly closed.
- Each section has one business/user purpose; decorative separators, slogans, and logo walls do not count as sections.

## Verified proof required

| Claim area | Minimum proof before publication | Owner / approval needed |
|---|---|---|
| Organization mission and local scope | Approved mission/vision text and exact geographic wording | Organization leadership |
| Nonprofit/tax status | Current approved status wording and linked document or authoritative record; confirm whether public linking is desired | Treasurer/administration and legal review |
| Current priority | Canonical source record, dates/status, destination, and named content owner | Campaign/event/scholarship owner |
| Scholarship evidence | Cycle, award terms, recipient consent, reporting period, and source records | Scholarship committee |
| Impact evidence | Definition, time period, methodology, source, limitations, and approval date | Administration/treasurer/program owner |
| Leadership/governance | Current names, roles, governing-body distinctions, bios, and photo permissions | Board/administration |
| Partner/supporter recognition | Written permission, correct name/logo, relationship description, and expiration/review policy | Organization and partner owner |
| Documentary media | Original/approved file, rights, subject consent where required, location/date/context, caption, and alt-text intent | Communications/content owner |
| Support transaction | Processor, designations, use-of-funds language, fees, tax/receipt wording, refund/contact process | Treasurer/website administrator/legal review |

## Required internal links

At minimum, the rendered homepage must contain descriptive crawlable links to:

- `/reparations/`
- `/scholarship/`
- `/impact/`
- `/events/` and a current event detail when available
- `/news/` and the selected lead story when available
- `/join-the-work/`
- `/support-reparations/`
- `/about/`
- `/about/leadership/`
- `/contact/`

Do not use repeated “Learn more” anchors without contextual accessible names. Do not link to empty planned routes in production; either complete the destination or omit the link until the route is ready.

## Structured-data recommendation

### Initial homepage graph

- `Organization` using only verified public properties: exact name, canonical URL, approved logo, verified contact point, verified postal address if publication is approved, and verified `sameAs` social URLs
- `WebSite` with name, URL, and publisher reference to the Organization
- `WebPage` for the homepage with name, description, URL, and `isPartOf`

### Restrictions

- Do not use ratings, reviews, awards, founding date, service area, nonprofit subtype, tax identifier, donor totals, or impact numbers unless verified and visibly supported.
- Do not add `SearchAction` unless a functioning site search exists.
- Do not mark homepage event teasers as an `Event` merely to obtain rich results. Event structured data belongs on the canonical event detail and must match visible date, location, status, price, and registration information.
- Do not mark story excerpts as `Article`; use Article on the canonical story detail.
- Home does not need `BreadcrumbList`.
- Validate the final graph against Schema.org and Google tooling before release.

## Image and media requirements

### Opening documentary image

- Authentic Greater Lansing community, event, scholarship, meeting, or leadership scene tied to the mission
- Rights and subject-consent status recorded
- Verified date/location/context and editorial caption
- Landscape desktop crop and a separately art-directed mobile crop; retain meaningful people/action rather than mechanically center-cropping
- No embedded text, poster copy, sponsor marks, or essential information inside the bitmap
- Provide original high-resolution source, focal-point metadata, and useful filename
- Purpose-based alt text based on the final use; caption carries names/date/context that would overload alt text
- Avoid using synthetic people or stock imagery that could be mistaken for participants

### Supporting media

- Evidence media must identify the record, date/period, and source.
- Recipient imagery requires approved publicity/consent documentation, especially for minors.
- Video requires accurate captions and a transcript or equivalent; use a poster/facade and user initiation rather than loading the full player at page load.
- Offscreen images use responsive `srcset`/`sizes`, AVIF/WebP where suitable, intrinsic dimensions, and lazy loading.
- If rights-cleared photography is insufficient, use source documents, typography, a verified timeline excerpt, or maps/diagrams rather than generic stock or AI people.

## LCP candidate

- **Expected LCP:** the opening documentary image on common desktop and mobile viewports
- Render the H1 and mission copy as HTML on the black canvas so they remain immediately readable independent of image loading.
- Do not lazy-load the opening image. Supply exact intrinsic dimensions and responsive sources; preload only after measurement confirms it is the consistent LCP resource.
- Use a mobile-specific crop and byte budget so a desktop source is not downloaded unnecessarily.
- If no approved image is available at prototype time, use a text-led opening with no placeholder stock photo; the H1/text block then becomes the expected LCP candidate.

## Mobile adaptations

### Opening at 320–430 CSS pixels

- Compose as mission text first, then a compact two-action group, then the documentary figure and caption. This is a deliberate reading order, not a stacked desktop split.
- Keep the H1 to a readable civic scale and controlled measure; avoid one-word lines and viewport-filling type.
- Keep copy on a solid surface rather than over the image.
- Primary action may span the content width; secondary action uses a clearly subordinate link/button treatment. Both remain visible without a sticky bottom bar.
- Use the mobile-specific focal crop, with an explicit aspect ratio to prevent layout shift.

### Current priority

- Place status and deadline before summary copy.
- Keep one action; do not horizontally scroll campaign items.
- Long event titles wrap normally without truncating decision-critical information.

### Evidence and methods

- Convert desktop side-by-side evidence to a source-first reading order: claim/context → period/method/source → action.
- Present work methods as a numbered vertical editorial list with sufficient separation, not collapsed accordions unless content length demands it.

### News, events, and participation

- Show one lead story at full readable width; secondary links become a compact dated index.
- Event facts use a definition-list-like stack in logical order, with registration status adjacent to the action.
- Participation choices are ordered by commitment and remain ordinary vertical links/rows rather than a swipe carousel.

### Navigation and footer

- Follow the mobile navigation model in the approved IA, including focus management and 44 by 44 CSS pixel practical target sizing.
- Footer groups become labelled sections in a deliberate priority order: action, explore, trust/contact, social/legal. Do not repeat every desktop menu disclosure.

### Viewport verification

- Verify no horizontal overflow at 320 CSS pixels.
- Visually review at 375, 390, 768, 1024, and 1440 pixels.
- Test 200% text resize, 400% zoom/reflow, increased text spacing, portrait/landscape, and long real CMS titles.

## Accessibility risks and planned controls

| Risk | Planned control | Verification |
|---|---|---|
| Red/green/gold treatments fail contrast or communicate status by color alone | Validate final tokens for 4.5:1 normal text, 3:1 qualifying large text and UI/graphics; pair status color with text/icon/shape | Automated contrast check plus manual review in every state |
| Text becomes unreadable over documentary photography | Keep substantive copy on solid black or approved reading surfaces; image remains a separate figure | Visual review with worst-case crops at all target widths |
| Large civic typography breaks mobile/reflow | Clamp responsibly, constrain measure, permit wrapping, and test real long text at 320px/200%/400% | Browser reflow and text-spacing checks |
| Campaign urgency or expired dates mislead users | Visible text status, machine-readable dates, one source record, automatic expiry plus editorial fallback | Test active, upcoming, closed, missing, and stale states |
| Menu or disclosures are keyboard/screen-reader inaccessible | Native buttons, accurate expanded state, labelled navs, logical focus, Escape/close/focus restoration for modal panel | Keyboard and screen-reader smoke test |
| Repeated CTAs create ambiguous link names | Use descriptive visible labels and contextual accessible names; limit dominant action per section | Link-purpose audit |
| Form labels/errors/consent are incomplete | Persistent labels, programmatic associations, text errors, error summary where needed, clear consent and confirmation | Keyboard, screen-reader, invalid/valid/duplicate submission tests |
| Video or image media excludes users | Purpose-based alt, captions, transcripts, contextual figure captions; no autoplay | Media-alternative review |
| Motion disrupts reading or vestibular users | No parallax/scroll-jacking; optional transform/opacity only; respect reduced motion | Reduced-motion and keyboard review |
| Sticky header obscures focused content | Provide skip link and appropriate scroll margin; keep mobile header compact | Focus traversal at zoomed viewports |
| Source/evidence notation is too small or visually de-emphasized | Treat methods, dates, and sources as readable content, not fine print | Contrast, text size, and content review |

Semantic baseline: one descriptive H1; one `main`; skip link; labelled navigation regions; logical heading hierarchy; native links, buttons, and form controls; figures/captions and time elements where appropriate; no ARIA where native HTML is sufficient.

## Performance risks and budgets

| Risk | Control |
|---|---|
| Large documentary LCP image | Art-directed responsive AVIF/WebP, intrinsic dimensions, compression review, no lazy load, preload only if measured |
| Multiple image-heavy story/event sections | Strict editorial selection, responsive sources, lazy load offscreen, omit context-free gallery |
| Wix Headless API latency or outages | Server render/pre-render where freshness allows; cache with invalidation; define stale/empty/error fallback for each integration |
| Wix/video/form third-party JavaScript | Use static HTML and Astro islands only for required interaction; video facade; defer nonessential scripts; prefer hosted secure handoff for payment |
| Font payload from civic typography | Maximum two families, minimal weights/character sets, self-hosted WOFF2 where licensing permits, deliberate `font-display`, preload only measured critical font |
| Campaign/event content causes CLS | Reserve media dimensions and stable module space; do not inject priority content after layout without a reserved frame |
| Analytics, embeds, and consent tools exceed budget | Each third party needs an owner and business purpose; load after consent/interaction as appropriate |

Initial compressed-transfer guardrails for the homepage:

- JavaScript: ≤ 150 KB
- CSS: ≤ 80 KB
- Initial images: ≤ 900 KB
- Fonts: ≤ 150 KB
- Third-party resources: ≤ 150 KB

Field targets at the 75th percentile: LCP ≤ 2.5 seconds, INP ≤ 200 milliseconds, CLS ≤ 0.1. Lighthouse is a diagnostic, not proof of field performance.

## Wix homepage data contract

### Site settings singleton

- approved organization name
- approved short mission
- contact details and social URLs
- canonical host setting
- footer trust/document links
- content review date and owner

### Current-priority collection

- internal name
- public status label
- title and concise summary
- priority/order
- start/end date and time zone
- content type: event, scholarship, support, join, news, or approved external action
- canonical destination reference/URL from an allowlist
- CTA label
- optional approved media/reference
- published/approved flag
- content owner and review date

Only one record may be the homepage priority at a time. If no approved active record exists, the module falls back to evergreen Support Reparations/Join the Work messaging or is omitted according to the approved copy—not to stale content.

### Featured evidence record

- public claim or qualitative evidence text
- program/type
- reporting period
- source/method and public source link where appropriate
- limitations/context
- related route
- optional approved image/document
- approved flag, approver, review date

### Editorial selections

- featured story reference
- optional secondary story references
- optional next-event override; otherwise derived from Wix Events

All content models need maximum-length guidance and validation against long real titles, not silent truncation.

## Content placeholders and unresolved inputs

Placeholders must remain visibly marked in planning/prototype review and must never ship as factual production copy.

- `[NEEDS CLIENT INPUT: Approve the exact 1–2 sentence Greater Lansing mission statement for the opening.]`
- `[PLACEHOLDER: The Justice League brings people and partners together to advance reparations and increase wealth equity for African Americans in Greater Lansing.]`
- `[NEEDS CLIENT INPUT: Select the current homepage priority, canonical destination, specific CTA, dates/status, and content owner.]`
- `[PLACEHOLDER: Current priority title and a two-sentence factual summary.]`
- `[NEEDS CLIENT INPUT: Provide an opening documentary image with original file, rights, subject-consent status, date/location/context, caption, and focal point.]`
- `[NEEDS CLIENT INPUT: Approve a plain-language reparations definition and supporting sources for the local-context section.]`
- `[NEEDS CLIENT INPUT: Provide one approved impact evidence record or scholarship feature with reporting period, methodology/source, and consent.]`
- `[PLACEHOLDER: Verified evidence statement; no numerical value will be inserted until approved.]`
- `[NEEDS CLIENT INPUT: Confirm which actual methods may be described publicly and provide evidence/links for each.]`
- `[NEEDS CLIENT INPUT: Confirm Wix Blog versus CMS as the source for news, stories, videos, and newsletter archives.]`
- `[NEEDS CLIENT INPUT: Confirm the event to feature, or approve the automatic next-public-event rule and its empty state.]`
- `[NEEDS CLIENT INPUT: Confirm participation pathways, membership status/process, expectations, meeting details, inquiry routing, and response timing.]`
- `[NEEDS CLIENT INPUT: Confirm newsletter provider, expected content/cadence, consent language, privacy link, double opt-in, and success/error behavior.]`
- `[NEEDS CLIENT INPUT: Provide current leadership/governance summary and approve any nonprofit/status documents shown.]`
- `[NEEDS CLIENT INPUT: Confirm the support processor, support designations, use-of-funds wording, tax/legal language, receipt, refund/contact, and post-payment flow.]`
- `[NEEDS CLIENT INPUT: Supply and approve brand-tokens.md or equivalent exact production colors/type rules based on original registered logo assets.]`
- `[NEEDS CLIENT INPUT: Confirm canonical hostname, privacy-policy route, analytics/consent requirements, and content owners.]`

## Acceptance criteria

### Strategy and content

- [ ] The opening names Greater Lansing and explains the mission specifically without invented claims.
- [ ] Support Reparations is the unmistakable stable primary conversion; Join the Work is visible and subordinate.
- [ ] The current-priority module has one current approved record, a specific CTA, a canonical destination, dates/status where relevant, and a safe stale/empty fallback.
- [ ] Every rendered section answers its documented user question and has a user/business purpose.
- [ ] No filler slogan, decorative section, generic nonprofit feature grid, testimonial, impact number, financial total, award, rating, membership claim, or partner claim is fabricated.
- [ ] Proof appears adjacent to the claim it supports, including period, method/source, and update context.
- [ ] Current priority and event modules do not duplicate the same promotion.
- [ ] All unresolved facts remain marked and are resolved before production publication.

### Architecture and conversion

- [ ] All homepage links resolve to approved canonical destinations and no planned/empty route is linked in production.
- [ ] Header, mobile navigation, content, and footer follow the approved IA.
- [ ] No orphan dynamic story/event is introduced; detail pages link to a parent and relevant evergreen content.
- [ ] The support, join, scholarship, event, newsletter, and contact handoffs explain what happens next.

### SEO

- [ ] Exactly one visible descriptive H1 is present.
- [ ] Title and meta description are unique, approved, and reflect the homepage purpose.
- [ ] Canonical host, robots directive, XML sitemap entry, Open Graph metadata, and social image are correct.
- [ ] Critical mission and link content is available in server-rendered/pre-rendered HTML.
- [ ] Heading order and anchor text are logical and descriptive.
- [ ] Organization/WebSite/WebPage structured data contains only visible, verified properties and passes validation.
- [ ] Event and Article schema are reserved for canonical detail pages.

### Accessibility

- [ ] WCAG 2.2 AA is the target; normal text reaches 4.5:1 and qualifying large text/UI/meaningful graphics reach applicable 3:1 thresholds.
- [ ] A skip link, one main landmark, labelled navigation regions, logical headings, native controls, visible focus, and meaningful focus order are present.
- [ ] Full keyboard operation works, including mobile navigation, disclosures, forms, and embedded/handoff controls.
- [ ] No action/status depends on color, hover, pointer precision, autoplay, or motion.
- [ ] Images have correct alt treatment and contextual captions; video has captions/transcript and user-initiated playback.
- [ ] Newsletter and other forms have persistent labels, instructions, associated errors, clear consent, and accessible confirmation.
- [ ] Content reflows without loss at 320 CSS pixels, 200% text resize, and 400% zoom; text-spacing overrides do not break content or controls.
- [ ] Reduced-motion preferences are honored.

### Responsive visual behavior

- [ ] The mobile opening is text-first with a separate controlled image, not oversized text over a full-bleed photograph.
- [ ] Mobile is deliberately composed at 375 and 390 pixels; it is not merely desktop columns stacked unchanged.
- [ ] No horizontal overflow occurs at 320 pixels.
- [ ] Visual review is completed at 375, 390, 768, 1024, and 1440 pixels with real/maximum-length CMS content.
- [ ] The layout does not default to a centered oversized hero, a three-card grid, glass panels, gratuitous pills, gradients, or identical rounded containers.

### Performance and resilience

- [ ] The LCP candidate and request chain are measured and documented; the opening image is not lazy-loaded.
- [ ] Responsive image sources, intrinsic dimensions, compression, and mobile art direction are implemented and visually reviewed.
- [ ] Initial compressed resources meet the nonprofit guardrails or every exception has a named owner and rationale.
- [ ] Static content ships as HTML; hydration is limited to necessary islands.
- [ ] Campaign, Wix Events, news, newsletter, and form integrations have loading, empty, stale, error, success, and fallback behavior as applicable.
- [ ] No autoplay background video, social-wall embed, carousel, or unnecessary third-party widget ships.
- [ ] Field targets remain LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1 at the 75th percentile; CI performance checks use representative routes and content.

### Truthfulness and governance

- [ ] Media provenance, rights, captions, and consent are recorded.
- [ ] Current leadership, event, scholarship, support, legal, and contact facts have owners and review dates.
- [ ] Synthetic or stock people are not presented as actual stakeholders.
- [ ] Structured data does not exceed visible verified content.
- [ ] The homepage has a named content owner and a process for expiring campaigns and reviewing evidence.

## Prototype gate

The homepage may proceed to a non-production prototype after the information architecture and this specification are approved and the following minimum inputs are supplied or explicitly accepted as visible prototype placeholders:

1. opening mission copy;
2. current priority and destination;
3. one rights-cleared opening image or approval for a text-led opening;
4. one verified evidence unit or approval to omit the evidence module;
5. real Join the Work pathways;
6. verified Support Reparations handoff behavior; and
7. approved provisional brand tokens with contrast evidence.

Production integration and launch require resolution of every applicable acceptance criterion and legal/content blocker above.
