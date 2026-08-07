# Justice League GLM Content Reconciliation

Last reviewed: August 7, 2026
Astro project: `projects/justice-league`
Production source: <https://www.justiceleagueglm.org/>

## Source and publication rules

- The current published Justice League GLM Wix site is the primary factual source.
- Current Wix Events and published program records take precedence over older page copy.
- Dated historical claims remain dated; they are not rewritten as current totals or availability.
- The Astro redesign, component system, responsive behavior, accessibility treatment, and visual direction are preserved.
- The current Wix site remains live. The Astro preview therefore remains globally `noindex` and uses verified Wix handoffs for transactions and forms that are not yet connected headlessly.

## Wix-to-Astro content map

| Wix content | Astro route or treatment | Reconciliation status |
| --- | --- | --- |
| Home | `/` | Mission, founder feature, approved media, apology video, Wix Events priority, and eLink treatment aligned |
| Our Vision | `/about/` | Mission, faith-rooted vision, fund governance, and three pillars added |
| History | `/about/history/`, `/reparations/` | Structural context summarized without carrying old statistics forward as current |
| Timeline | `/about/history/` | Curated chronology aligned through February 2026; key congregational, education, scholarship, housing, and regional milestones included |
| Our Team | `/about/leadership/` | Executive, board, and advisory groups aligned to current roster |
| Faith Based | `/reparations/` | Faith, repentance, relationship, and material-repair framing added |
| Reparations | `/reparations/` | Organization definition, local model, governance, and three pillars added; expired 2025 goal treated as historical |
| Scholarship | `/scholarship/` | Current cycle, status conflict, requirements, 2024–2026 recipients, essays, and approved group image aligned through Wix CMS and dated fallback |
| Scholarship FAQ | `/scholarship/` | No separate route; the live FAQ widget exposes no usable questions, so no duplicate SEO page was created |
| Upcoming Events | `/events/`, homepage priority | Wix Events is the current source; stale July listing is not presented as upcoming |
| Committee Meetings | `/events/`, `/join-the-work/` | Meeting types retained; historical visible dates are not presented as upcoming |
| Ad Booklet | `/ad-booklet/`, `/events/` | 2026 deadline, dimensions, pricing, formats, check instructions, and Wix handoff aligned |
| Donate | `/support-reparations/` | Two designations, verified Wix donation handoff, check instructions, and support card added |
| Supporters | `/supporters/` | Dedicated “Repairers of the Breach” roster with 18 correctly paired, locally migrated Wix logo assets; `/impact/` links to the record |
| Donors | `/donors/` | Dedicated year-grouped acknowledgment rendered directly from the public Little Green Light report with a sanitized checked-in fallback; `/impact/` links to the record |
| Recent News | `/news/` | Current two-video treatment represented with a verified source link |
| E-News Briefs | `/news/` | Empty public archive state documented; no issues invented |
| eLink collection | `/`, `/news/` | Consent-gated third-party embed plus direct fallback retained |
| Gallery and Apology 2023 | `/`, `/about/history/`, `/news/` | Approved documentary media and apology record used selectively; no duplicate gallery route |
| Contact / Join the Work | `/contact/`, `/join-the-work/` | Email, mailing address, current inquiry choices, and verified Wix form handoff aligned |
| Registered nonprofit and IRS Form 1023 documents | Global footer | Current document links added |

## Updated

- Centralized the organization name, mission, email, mailing address, Wix source routes, and nonprofit-document links in `src/data/site.ts`.
- Updated the default source-observation date from August 6 to August 7, 2026.
- Replaced provisional About copy with the approved mission and current vision commitments.
- Updated leadership language to distinguish the executive team, Board of Directors, and African American Advisory Council.
- Replaced the Events page's incorrect “not connected” claim with its existing live Wix Events adapter.
- Corrected the obsolete `/upcoming-events` fallback to the published `/upcomingevents` route.
- Limited participation choices to the choices currently exposed by the Wix contact form: committee, general meeting, presentation, and updates.
- Replaced the unsupported donation blocker with the verified organization-owned Wix donation handoff and published mail-a-check instructions.
- Replaced the generic Reparations placeholders with the organization's local, faith-rooted, three-pillar framework.
- Updated News to use the current eLink collection, recent-media page, and honest empty E-News archive state.
- Replaced the dead City Pulse article URL with a verified Presbytery of Lake Michigan page documenting Willye Bryan’s February 2025 City Pulse recognition.

## Already correct

- Official organization name and approved mission.
- 2021 founding year and founder identification.
- Current executive, board, and advisory roster names and roles.
- The 2026–2027 scholarship is closed.
- Ten awards of $2,500 are described for the current scholarship program.
- Ingham, Clinton, and Eaton county eligibility.
- College, university, and vocational-school eligibility.
- The 2024, 2025, and 2026 public recipient records and linked essays.
- The current 2026 Fall Celebration ad-booklet deadline and placement pricing.
- The current Repairers of the Breach roster of 18 organizations, verified against the published Wix Supporters page on August 7, 2026.
- Homepage approved hero, Willye Bryan feature, apology video, and eLink integration.
- The curated timeline's 2021, 2022, apology, scholarship, homeownership, Kalamazoo, Fall Celebration, and February 2026 milestones.

## Added

- Public email and mailing address on Contact and in the global footer.
- Registered 501(c)(3) and IRS Form 1023 links in the footer.
- Current vision commitments and three-pillar program framing on About.
- Faith-based reparations explanation and the Advisory Council's published oversight role.
- Dedicated Supporters and Donors routes, with separate desktop navigation, mobile navigation, footer links, and Impact-page pathways.
- Current Repairers of the Breach supporter names and their Wix-paired logo assets in a typed, editable local dataset.
- Typed donor CSV parsing, dynamic year grouping, static HTML rendering, source-state messaging, a sanitized fallback snapshot, and source-sync tooling.
- Early 2023 congregational commitments, 2024 public education, and the second 2025 home build to the curated timeline.
- Current Wix Events rendering on the Events route.
- General and committee meeting context without repeating expired dates.
- Verified Wix donation and contact-form handoffs.

## Removed or archived

- Removed copy saying Wix Events was not connected.
- Removed the broken `/upcoming-events` path.
- Removed unverified volunteer and community-partner availability from the current Join choices.
- Removed claims that the public email and mailing address were unavailable.
- Removed the City Pulse article URL that redirected to a “Page not found” response.
- Archived the reparations page's $1 million by end-of-2025 goal as a dated historical planning claim rather than a current target.
- Past scholarship ceremony and February/March committee dates are not presented as upcoming.
- Demonstration event and story routes remain `noindex`, prototype-only, and outside public navigation.
- Removed the hardcoded supporter-name ledger and external-only donor handoff from `/impact/`; the page now explains and links the two distinct records.
- Removed the external Wix donor link from the footer in favor of the local `/donors/` acknowledgment.

## Wix source contradictions

### Scholarship deadline

- **Subject:** 2026 scholarship application deadline.
- **Source A:** The current scholarship page says the deadline was extended to May 1, 2026.
- **Source B:** The same page still lists February 28–April 17, 2026 in the application and important-dates sections.
- **Version used:** May 1, 2026, because it is the explicit extension notice. The form's closed state controls current availability.
- **Human confirmation:** Required before this record is reused for another cycle.

### Scholarship cycle label

- **Subject:** Whether the public program is the “2026” or “2026–2027” scholarship.
- **Source A:** The page H1 says “Reparations Scholarship 2026–2027.”
- **Source B:** The embedded form heading says “2026 Justice League Scholarship.”
- **Version used:** 2026–2027 for the program cycle; 2026 for the application and recipient cohort.
- **Human confirmation:** Not required unless the organization intends a different naming convention.

### Scholarship ceremony date

- **Subject:** 2026 Scholarship Acknowledgment Ceremony date.
- **Source A:** The Upcoming Events listing shows July 25, 2026.
- **Source B:** The event-detail page shows July 27, 2026.
- **Version used:** Neither is presented as upcoming because both dates have passed. The contradiction remains documented.
- **Human confirmation:** Required before adding the event to a formal historical archive.

### Current events listing

- **Subject:** Which event is currently upcoming.
- **Source A:** The Wix homepage and Wix Events API expose the 5th Annual Fall Celebration & Fundraiser on November 13, 2026.
- **Source B:** The `/upcomingevents` page still shows the completed scholarship ceremony.
- **Version used:** Wix Events API/current homepage record. The Astro page does not treat the July ceremony as upcoming.
- **Human confirmation:** The stale Wix listing page should be corrected or redirected.

### Meeting availability

- **Subject:** Current general and committee meeting dates.
- **Source A:** The contact form invites people to join a committee or attend a general meeting.
- **Source B:** The committee-meetings page exposes only February and March 2026 dates, which are past.
- **Version used:** Participation interest remains available, but no meeting date is advertised as current.
- **Human confirmation:** Required for the next meeting schedule and public-access rules.

### Reparations fund progress

- **Subject:** Current fund or endowment total.
- **Source A:** The reparations page contains an expired goal of $1 million by the end of 2025.
- **Source B:** Timeline entries cite more than $350,000, more than $400,000, and more than $500,000 at different dated milestones.
- **Version used:** Each amount remains attached to its historical date. No single current balance is published by Astro.
- **Human confirmation:** Required for any current fund total, accounting period, or financial-progress claim.

### Nonprofit language

- **Subject:** Legal designation formatting.
- **Source A:** The Wix footer says “Registered 501(c)3 nonprofit.”
- **Source B:** Standard formatting is “501(c)(3).”
- **Version used:** “Registered 501(c)(3) nonprofit,” with the current source document linked.
- **Human confirmation:** Confirm whether this exact public label should be reviewed by counsel before launch.

## Donor and supporter integration

**The authoritative donor source is the public Little Green Light report currently consumed by the production Wix site through Velo. The Astro redesign now consumes that source to display the donor acknowledgment directly.**

### Donor implementation

- **Source URL:** <https://justiceleagueglm.littlegreenlight.com/rptlink/c6a0a3da-df47-45f3-969e-53a4586160d0>
- **Deployment strategy:** This project is Astro static output, so `/donors/` fetches and normalizes the report during the build. Donor names are emitted as static semantic list markup and do not require client-side JavaScript.
- **Detected CSV schema:** Quoted comma-delimited `text/csv` with CRLF rows and headers `Id`, `Addressee`, `2026 - FY`, `2025 - FY`, `2024 - FY`, `2023 - FY`, `2022 - FY`, `2021 - FY`, and `Groups`. The August 7 report contained 281 source rows, no blank addressees, no duplicate IDs, and no replacement characters.
- **Parsing approach:** `src/lib/donor-csv.ts` performs quote-aware CSV parsing, validates row width and required headers, discovers headers matching `YYYY - FY`, treats a positive numeric fiscal-year value as recognition membership, ignores physical blank rows and blank addressees, deduplicates by display name within each year, alphabetizes names, and sorts years newest first. Malformed rows, unterminated quotes, missing headers, or nonnumeric year values reject the live payload.
- **Public fields retained:** `Addressee` and the year derived from each positive fiscal-year column.
- **Fields intentionally excluded:** `Id`, every fiscal-year amount, `Groups`, cookies, response headers, and any other LGL/account metadata. The fallback file contains only `observedAt`, `year`, and donor display-name arrays. No amounts, IDs, emails, addresses, phone numbers, notes, transactions, or gift histories are serialized to browser assets or HTML. The donor page names Little Green Light as the source but does not link visitors to the raw CSV attachment.
- **Fallback behavior:** A build first requests the live report with an eight-second timeout. Fetch, HTTP, timeout, schema, or parsing failure logs a warning and renders `src/data/donors-fallback.json`, a sanitized snapshot refreshed by `npm run sync:donors`. The page visibly labels fallback use. If the snapshot also fails validation, the page renders an explanatory unavailable state and no names. A sandboxed build exercised the fallback successfully; a final network-enabled build exercised the live path successfully.
- **Rendered years and counts on August 7, 2026:** 2026 — 63; 2025 — 162; 2024 — 119; 2023 — 106; 2022 — 2. The empty 2021 column does not render. The production Wix page currently begins at 2023, while the current LGL source contains two positive 2022 acknowledgments; the Astro parser follows the source-of-truth rule and renders every non-empty discovered year.
- **Live comparison:** Multiple 2026–2023 names visible on the Wix page also appear in the LGL-backed Astro output, including Amber Paxton, Kathryn Fore, Winalee and Ron Zeeb, Alexander L Bennett lll & Linda Bennett, Kristina Schmidgall, Zenon Wisniewski, Adam Moore, Katherine L Hickner, Wendy King, All Saints Episcopal Church, Refreshology, LLC, and Sharon Ketchum. The two 2022 source acknowledgments are Anonymous and First Presbyterian Church of Holt. No obvious truncation was observed.

### Supporter implementation

- **Roster source:** <https://www.justiceleagueglm.org/supporters>, verified August 7, 2026.
- **Architecture:** `src/data/supporters.ts` holds 18 typed records with the published name, local logo path, meaningful alt text, and exact Wix source asset URL. The page does not query or infer anything from LGL.
- **Logo handling:** The 18 images paired with the 18 organizations on Wix were downloaded directly from their Wix media URLs, converted to optimized WebP files, and reduced to 498,692 bytes total. Original migration downloads were removed after successful conversion. Visual review confirmed the Wix-paired image remains beside the correct organization name.
- **Roster verified:** StableCommunities Foundation; Mason First Presbyterian Church; Reachout Christian Center Church; University United Methodist Church; Restorative Actions; Lansing Church of God In Christ; Kingdom Ministries; Matthew 25; Unity Spiritual Center of Lansing; Edgewood UCC; Unitarian Universalist Church of Greater Lansing; Holt First Presbyterian Church; Red Cedar Friends; University Lutheran Church; Grace Lutheran Church; All Saints Episcopal; Sycamore Creek; Lansing First Presbyterian.

### Tests and rendered verification

- Parser fixtures cover quoted commas, empty rows, blank addressees, positive-year grouping, deduplication, alphabetical ordering, descending years, malformed CSV rejection, external fetch failure, malformed live payload fallback, and fallback validation.
- Built-page assertions cover every sanitized year-record, current/prior year headings, representative source names, exactly one H1, SEO metadata, no client data fetch, private-field/value exclusion, all 18 supporter names, name/logo pairing, local asset existence, alt text, responsive CSS rules, concept separation, navigation, footer links, and internal-link resolution.
- Rendered browser review covered `/donors/`, `/supporters/`, and `/impact/` at 320, 375, 390, 768, 1024, and 1440 CSS pixels. Every state had one H1, no horizontal overflow, no broken supporter image, all 452 donor year-records, and the intended one/two/three-column responsive progression. The mobile menu exposes Supporters and Donors separately under Our Work.

## Needs human confirmation

- Current privacy policy, data retention, consent, and production routing for Wix Forms and newsletter submissions.
- Current meeting dates, public access rules, and committee availability.
- Current fund balance, accounting period, program/administrative spending, and annual or audited financial report.
- Board terms, committee charters, conflict policy, Form 990 publication, and governance-document owner.
- A launch-safe Wix donation/form hostname or route that will not loop after the main domain moves to Astro.
- Whether a future editorial policy should intentionally suppress source-backed pre-2023 donor years. The current implementation follows Little Green Light and includes the two non-empty 2022 acknowledgments.
- Current social-profile URLs and which should appear in the redesigned footer.
- The authoritative July 2026 scholarship ceremony date for any future event archive.
- Rights, credits, captions, and crops for any additional Wix gallery images beyond those already approved for reuse.

## Validation record

- `npm run check`: passes with 0 Astro/TypeScript errors, warnings, or hints across 44 files.
- `npm run build`: passes and generates all 18 static pages. A sandboxed build exercised the labelled donor, Wix Events, and scholarship fallbacks; the final network-enabled build loaded the live LGL report and current Wix sources successfully.
- `npm run test`: passes 801 prototype assertions, including every built route, unique metadata, one-H1 and heading-order rules, canonicals, Open Graph metadata, prototype `noindex`, internal-link resolution, donor parser/fallback/privacy behavior, static donor completeness, supporter logo pairing/assets/alt text, concept separation, named controls, form labels, protected new-tab links, external-link HTTPS safety, structured data, source-specific content, and contrast calculations.
- Rendered review passed for the new `/donors/`, `/supporters/`, and revised `/impact/` routes at 320, 375, 390, 768, 1024, and 1440 CSS pixels with no horizontal overflow and exactly one H1. Donor columns progress from one to two to three, supporter columns from one to two to three, all 18 images load, and mobile navigation exposes both destinations. The existing broader site review remains recorded for the other routes.
- Keyboard review verified the skip link focuses the main landmark and the mobile menu closes on Escape with focus restored to its trigger.
- Important Wix HTML source routes, the eLink publication, the apology video, the replacement Willye Bryan profile source, and all 23 linked Wix-hosted PDFs were verified in a real browser. The check exposed the dead City Pulse destination, which was removed rather than retained or guessed.

## Completion checklist

- [x] Entire Astro route and shared-data inventory completed
- [x] Current Wix site inspected beyond the homepage
- [x] Wix-to-Astro content map created
- [x] Homepage verified
- [x] About and mission content verified
- [x] Scholarship content verified
- [x] Events connected and current/past status reconciled
- [x] Timeline compared and key missing milestones added
- [x] Board and leadership roster verified
- [x] Supporters verified, centralized, correctly paired with approved source assets, and rendered on `/supporters/`
- [x] LGL schema inspected directly; donor parser, privacy boundary, build-time fetch, sanitized fallback, and `/donors/` rendering verified
- [x] Donation information verified
- [x] Contact and global organization information verified
- [x] All internal links checked in a rendered preview
- [x] All important external links checked for final HTTP destination/status
- [x] Every route's metadata and heading structure included in the extended validator
- [x] Accessibility and multi-viewport review completed after reconciliation
- [x] Repository searched for major stale facts discovered during this pass
- [x] Current Wix contradictions documented
- [x] `CONTENT-AUDIT.md` created
- [x] Production Astro build succeeds
- [x] No unresolved build or type errors introduced
