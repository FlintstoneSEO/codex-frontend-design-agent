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
| Supporters | `/impact/` | Current “Repairers of the Breach” list added |
| Donors | `/impact/` | Maintained year-grouped Wix record linked; donors are not reclassified as current partners |
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
- Homepage approved hero, Willye Bryan feature, apology video, and eLink integration.
- The curated timeline's 2021, 2022, apology, scholarship, homeownership, Kalamazoo, Fall Celebration, and February 2026 milestones.

## Added

- Public email and mailing address on Contact and in the global footer.
- Registered 501(c)(3) and IRS Form 1023 links in the footer.
- Current vision commitments and three-pillar program framing on About.
- Faith-based reparations explanation and the Advisory Council's published oversight role.
- Current supporters list on Impact.
- Year-grouped donor-record handoff on Impact.
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

## Needs human confirmation

- Current privacy policy, data retention, consent, and production routing for Wix Forms and newsletter submissions.
- Current meeting dates, public access rules, and committee availability.
- Current fund balance, accounting period, program/administrative spending, and annual or audited financial report.
- Board terms, committee charters, conflict policy, Form 990 publication, and governance-document owner.
- A launch-safe Wix donation/form hostname or route that will not loop after the main domain moves to Astro.
- Whether the current Wix donor list should be migrated into a managed public CMS collection or remain a verified external record.
- Current social-profile URLs and which should appear in the redesigned footer.
- The authoritative July 2026 scholarship ceremony date for any future event archive.
- Rights, credits, captions, and crops for any additional Wix gallery images beyond those already approved for reuse.

## Validation record

- `npm run check`: passes with 0 Astro/TypeScript errors, warnings, or hints across 37 files.
- `npm run build`: passes and generates all 16 static pages. The sandboxed final run exercised the labelled Wix fallback states because outbound Wix access was denied; the immediately preceding network-enabled production build passed and retrieved the November 13, 2026 Fall Celebration from Wix Events.
- `npm run test`: passes 686 prototype assertions, including every built route, unique metadata, one-H1 and heading-order rules, canonicals, Open Graph metadata, prototype `noindex`, internal-link resolution, named controls, form labels, image alt attributes, protected new-tab links, external-link HTTPS safety, structured data, source-specific content, and contrast calculations.
- Rendered review passed on 14 public-content routes at 320, 375, 390, 768, 1024, and 1440 CSS pixels with no horizontal overflow and exactly one H1. The separate 320-pixel increased-text-spacing state also passed every route.
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
- [x] Supporters verified
- [x] Donor record verified and linked without reclassification
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
