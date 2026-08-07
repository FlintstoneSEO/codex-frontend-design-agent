# Scholarship Page Specification

- Route: `/scholarship/`
- Page type: Program status and application orientation, Campaign mode
- Objective: Make current status, provisional eligibility, award terms, and application dependencies understandable without implying an open cycle.
- Audience/intent: Applicants, families, educators, donors, and partners checking eligibility and next steps.
- Primary conversion: View current scholarship status. Secondary: Support Reparations.
- Search intent: Greater Lansing reparations scholarship eligibility and application.
- Proposed title: `Reparations Scholarship | Justice League GLM`
- Meta description: `Review provisionally recorded eligibility, award information, historical recipient counts, and current-cycle status for the Reparations Scholarship.`
- H1: `Reparations Scholarship`
- LCP candidate: Text H1 and status band.
- Schema: `WebPage` and `BreadcrumbList`; no offer, event, or application schema.
- Canonical/indexability: `/scholarship/`; prototype noindex, intended index after current-cycle confirmation.
- Internal links: Reparations, Impact, Events, Support, Contact.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Cycle status | Can I apply now? | `Status not confirmed`; no active application CTA | Contact |
| 2 | Program snapshot | What does the current site describe? | Ten awards of $2,500; eligible applicant types; three counties, all dated provisional | None |
| 3 | Application path | What will be required? | Pending workflow, dates, uploads, consent, and confirmation | None |
| 4 | Historical record | What is publicly recorded? | Ten recipients in 2024 and ten in 2025; no names | Impact |
| 5 | Support | How can I help? | Support pathway without allocation claims | Support Reparations |

## Requirements

- Media: No recipient imagery or names without renewed consent and asset audit.
- Mobile: Status precedes all descriptive copy; eligibility uses a readable definition list.
- Accessibility/performance: Never encode open/closed by color alone; no form or third-party JS.
- Unknowns: `[NEEDS CLIENT INPUT: Confirm 2026 status, dates, eligibility, award terms, application URL, privacy, consent, and contact owner.]`
- Acceptance: Does not say applications are open; every numerical fact carries the August 6, 2026 observation label; one H1.
