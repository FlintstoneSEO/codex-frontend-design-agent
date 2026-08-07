# 2026 Fall Celebration Ad Booklet Page Specification

- Route: `/ad-booklet/`
- Page type: Time-limited campaign landing page, Campaign mode
- Page objective: Help businesses, houses of worship, community partners, and supporters understand the 2026 Fall Celebration program-book advertising offer and continue to the verified Wix submission workflow.
- Target audience: Greater Lansing businesses, houses of worship, community partners, institutional supporters, and individuals purchasing a congratulatory or support message.
- User intent: Confirm the deadline, compare placement sizes and prices, understand file requirements, choose online or check payment, and submit an advertisement.
- Primary conversion: Continue to the current organization-owned Wix ad submission and payment workflow.
- Secondary conversion: Contact the organization about the campaign.
- Search intent: Justice League GLM 2026 Fall Celebration ad booklet, Justice League Greater Lansing program advertisement.
- Keyword/topic focus: 2026 Fall Celebration program booklet advertising in Greater Lansing.
- Proposed title: `2026 Fall Celebration Ad Booklet | Justice League GLM`
- Proposed meta description: `Review 2026 Fall Celebration program-book ad sizes, prices, file requirements, the September 30 deadline, and the verified Wix submission handoff.`
- H1: `2026 Fall Celebration Ad Booklet`
- LCP candidate: Text H1 and deadline; no campaign-specific media is available on the current source page.
- Structured data: `WebPage` and `BreadcrumbList` only. Do not add `Event`, `Product`, or `Offer` schema until the celebration record and transaction terms are independently maintained and launch-approved.
- Canonical/indexability: Retain `/ad-booklet/` to preserve the current public route. The prototype remains `noindex`; intended production indexing requires a launch-safe Wix handoff, final event context, and campaign owner.
- Required internal links: Events, Contact, Support Reparations, and Join the Work.

## Approved source record

- Primary source: `https://www.justiceleagueglm.org/ad-booklet`
- Source observation date: August 7, 2026.
- Wix site: Justice League GLM, site ID `03690829-a1bf-4449-984a-9542ff682ce7`.
- Current status: The public Wix page presents the campaign as active with a September 30, 2026 submission deadline.
- Editorial rule: Preserve only facts visible on the current source page. Do not infer the Fall Celebration date, venue, attendance, circulation, audience reach, ad availability, tax treatment, refund policy, or production specifications.

## Section hierarchy

| Order | Section | User question | Content/proof | Action | Layout rationale |
|---:|---|---|---|---|---|
| 1 | Campaign opening | What is being offered? | Five-year Fall Celebration program-book advertisement invitation | Review deadline and placements | Text-led campaign opening avoids unsupported event photography |
| 2 | Deadline status | Is the campaign still active? | September 30, 2026 deadline, sourced and dated | Continue to options | Full-width status band makes the time limit explicit without a false countdown |
| 3 | Audience and message | Is this relevant to me? | Businesses, houses of worship, partners, and supporters may submit congratulations, support, or encouragement | Compare placements | Compact editorial split establishes fit before pricing |
| 4 | Placement ledger | What sizes and prices are available? | Full, half, quarter, and business-card placements with dimensions and prices | Choose in Wix workflow | Ruled ledger supports comparison without generic cards |
| 5 | Submission process | What do I need to do? | Select placement, upload camera-ready file, choose online or check payment | Continue to Wix | Ordered pathway preserves task sequence |
| 6 | File requirements | What can I upload? | JPG, PNG, DOC/DOCX, or PDF; camera-ready requirement | Prepare file | Controlled reading surface prevents requirements from being lost near the CTA |
| 7 | Payment paths | How do I complete the purchase? | Verified current Wix page for online workflow; check payable and mailing instructions | Open current Wix form | Two explicit pathways explain what happens before the handoff |
| 8 | Integration notice | What remains provisional? | Current Wix page is the transaction source; launch-safe standalone handoff is unresolved | Contact | Visible prototype notice prevents the staging handoff from being mistaken for final architecture |
| 9 | Related action | What if I am not placing an ad? | Events, general support, and participation links | Explore Events / Contact | Keeps the campaign from becoming a dead end |

## Media requirements

- Use a text-led opening. The current Wix page does not expose substantive campaign photography or artwork suitable for reuse.
- Do not reuse the Wix header logo, social icons, decorative textures, or interface assets as campaign media.
- Add campaign artwork only after rights, source resolution, useful crop, alt text, and publication approval are supplied.

## Mobile adaptations

- Show campaign purpose and deadline before prices.
- Keep every placement in a single ruled row with price adjacent to its label and dimensions below.
- Preserve the process as a vertical ordered sequence.
- Present the Wix handoff before check instructions; do not place two equal-width desktop cards into a stacked mobile grid.
- Ensure long dimensions, currency values, file formats, mailing address, and placeholder text wrap without horizontal scrolling at 320 CSS pixels.

## Accessibility risks

- Do not use a countdown or color alone to communicate deadline status.
- Use semantic `time`, `dl`, `ol`, headings, and descriptive external-link text.
- State that the external Wix workflow opens in a new tab.
- The current Wix upload/payment forms require a separate keyboard, validation, error, upload, and payment accessibility audit before production handoff approval.
- Avoid reproducing two large forms on one page; the Astro prototype must not collect or transmit advertiser data.

## Performance risks

- Do not embed the Wix page, Forms & Payments widget, chat, or third-party scripts.
- Keep the route static HTML with no page-specific hydration.
- Text is the LCP candidate; initial image transfer is zero until approved campaign media exists.
- The external Wix transaction loads only after user activation.

## Unknowns/placeholders

- `[NEEDS CLIENT INPUT: Confirm the Fall Celebration date, venue, program circulation, ad production owner, proofing process, cancellation/refund policy, and availability limits.]`
- `[NEEDS CLIENT INPUT: Provide a standalone Wix-hosted form/payment URL or preserve the current Wix workflow on a verified legacy subdomain before DNS cutover.]`
- `[NEEDS CLIENT INPUT: Confirm privacy, file retention, payment confirmation, receipt, failure recovery, and advertiser support procedures.]`
- `[NEEDS CLIENT INPUT: Confirm whether DOC/DOCX remains a production-ready format or should be converted before acceptance.]`

## Acceptance criteria

- Exactly one H1 and a unique title/meta description.
- Breadcrumbs identify Home, Events, and the current campaign.
- Deadline is represented with a semantic `time` element and no countdown.
- All four placements exactly match the current Wix source as observed August 7, 2026.
- Accepted formats and check instructions match the current Wix source.
- No Astro form submits, uploads files, collects payment, or stores advertiser information.
- External handoff is HTTPS, organization-owned, descriptive, and visibly identified as the current Wix workflow.
- No unsupported event date, venue, circulation, availability, tax, impact, or refund claim.
- No horizontal overflow at 320 CSS pixels and deliberate layouts at 375, 390, 768, 1024, and 1440 pixels.
- Prototype remains `noindex` and demonstration/integration limitations remain visible.
