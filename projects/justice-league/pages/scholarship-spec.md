# Scholarship Page Specification

- Route: `/scholarship/`
- Page type: Program status and application orientation, Campaign mode
- Objective: Give applicants and families a current, CMS-controlled answer about the 2026–2027 cycle, then present verified eligibility, award terms, required materials, dates, and contact details without reopening a closed application.
- Audience/intent: Applicants, families, educators, donors, and partners checking status, eligibility, requirements, dates, and next steps.
- Primary conversion: View the current scholarship status. When and only when Wix CMS marks a cycle active and supplies an allowlisted HTTPS URL, continue to the application.
- Secondary conversion: Contact the organization or Support Reparations.
- Search intent: Greater Lansing reparations scholarship eligibility, dates, and application status.
- Proposed title: `Reparations Scholarship | Justice League GLM`
- Meta description: `Check the current Justice League GLM Reparations Scholarship status, award structure, eligibility, dates, required materials, and contact information.`
- H1: `Reparations Scholarship`
- LCP candidate: Text H1 and CMS-driven status band.
- Schema: `WebPage` and `BreadcrumbList`; no offer, award, person, event, or application schema.
- Canonical/indexability: `/scholarship/`; prototype remains noindex. Intended production indexability follows content approval, application-flow accessibility review, and form privacy approval.
- Internal links: Reparations, Impact, Events, Support Reparations, and Contact.

## Wix CMS source

- Collection ID: `ScholarshipCycles`
- Collection purpose: Public scholarship-cycle content only. Never expose or query `2026ScholarshipApplicants` from the public frontend.
- Permissions: Anyone may read; only Wix CMS editors/admins may insert, update, or remove.
- Current item ID: `15d8e4e3-4f25-4f92-a8df-407360e5824a`
- Current public status: `closed`
- Source URL: `https://www.justiceleagueglm.org/scholarship`
- Source observation date: August 7, 2026.
- Source discrepancy: The current page reports an extended May 1, 2026 deadline while older sections still show April 17. The closed form and extended-deadline notice control the headless status; the discrepancy remains visible in a source note.
- Build behavior: Query one published cycle by latest application deadline. Validate required fields and allowed status values. Suppress application URLs unless status is `active` and the HTTPS hostname is allowlisted. Show an explicitly stale, dated source snapshot only when a static build cannot reach Wix.
- Recipient collection: `ScholarshipRecipients`, public-read and admin-write. Contains 30 client-approved public winner records from 2024, 2025, and 2026, including city, high school, continuing-education institution, approved essay URL, source date, and publication controls.
- Cohort collection: `ScholarshipCohorts`, public-read and admin-write. Contains the approved 2025 group photograph with year-specific alt text and caption.
- Publication gate: Query only records where `published`, `consentApproved`, and `publicationApproved` are all true. Never query the private `2026ScholarshipApplicants` collection.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Cycle status | Can I apply now? | CMS status `closed`, status message, and cycle label | Contact; no application CTA |
| 2 | Dates | When did this cycle run? | February 28 opening, May 1 extended deadline, May 26 notification date | None |
| 3 | Program snapshot | What was offered? | Ten qualifying recipients with $2,500 each for college, university, or vocational study | Explore Reparations |
| 4 | Eligibility | Who qualified? | Applicant types and Ingham, Clinton, or Eaton County residency from CMS | Contact with interpretation questions |
| 5 | Required materials | What did applicants need? | Completed application, unofficial transcript, and 500-word essay | None while closed |
| 6 | Essay topics | What did the essay address? | Racial Wealth Gap in America or Generational Wealth | Learn about Reparations |
| 7 | Source and contact | What if the information conflicts or I need help? | Current-site link, source date, discrepancy note, email, and mailing address | Contact the organization |
| 8 | Published recipients | Who received scholarships and where can I read their work? | Thirty client-approved public winner records from 2024–2026, 30 approved essay links, and the available approved 2025 group photograph | Read a published essay |
| 9 | Support | How can I support the pathway? | Stable support route without unsupported allocation claims | Support Reparations |

## CMS states

- `active`: Show opening/deadline and application CTA only if `applicationUrl` passes the HTTPS allowlist.
- `closed`: State that applications are closed and remove the application CTA.
- `upcoming`: Show the opening date and do not expose an early application URL.
- `paused`: Explain that the cycle is unavailable and direct questions to Contact.
- `empty`: State that no published cycle is available; do not substitute an old cycle as current.
- `error`: State that the published record is incomplete.
- `stale`: Display the dated, source-confirmed fallback with an explicit CMS-unavailable notice.

## Requirements

- Media: The client approved reuse of the recipient names, education details, essay links, and imagery already published on the current Wix scholarship page. Future records still require explicit consent and publication approval; individual portraits remain empty because the source page exposes only one 2025 group photograph.
- Mobile: Status and dates precede eligibility. Dates, currency, county names, email, and address must reflow at 320 CSS pixels. Use ruled lists rather than desktop cards.
- Accessibility: Never encode status by color alone. Use `time`, `dl`, `ul`, and ordered headings. Do not embed the current Wix upload/signature form until keyboard, signature alternatives, validation, errors, consent, retention, and confirmation behavior pass review.
- Performance: Static HTML and native `details` cohort disclosure; no page-specific hydration, embedded form, or third-party scripts. The single below-fold group photograph is lazy-loaded with intrinsic dimensions. Wix CMS is queried during the build.
- Security/privacy: The public adapter queries only `ScholarshipCycles`, `ScholarshipRecipients`, and `ScholarshipCohorts`, with explicit publication and consent filters. Applicant submissions, uploads, signatures, addresses, phone/email records, and unsuccessful applicants remain outside the public content boundary.
- Unknowns: `[NEEDS CLIENT INPUT: Confirm the next-cycle owner, approval/review schedule, final application destination, accommodation process, privacy and retention policy, consent wording, signature alternatives, confirmation workflow, and treatment of late or mailed applications.]`
- Acceptance: One H1; current cycle visibly closed; no Apply CTA; CMS state/source visible; all dates semantic; ten/$2,500 structure accurate; eligibility and documents match CMS; source discrepancy disclosed; 30 approved recipients and essay links grouped by year; approved 2025 group image labelled accurately; no private applicant fields; no submitting form; prototype noindex.
