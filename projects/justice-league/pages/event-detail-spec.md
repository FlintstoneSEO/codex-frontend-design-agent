# Event Detail Page Specification

- Route: `/events/[slug]/` (prototype fixture: `/events/demo-priority/`)
- Page type: Event detail, Campaign mode
- Objective: Validate a complete event-information and registration layout without suggesting the demo is real.
- Audience/intent: Prospective attendees deciding whether and how to participate.
- Primary conversion: Verified Wix registration handoff. Secondary: Support Reparations.
- Search intent: Specific event title and Lansing.
- Proposed title: `Demonstration Event Detail | Justice League GLM Prototype`
- Meta description: `A noindex demonstration of the verified facts and registration states required for a future Justice League GLM event page.`
- H1: `Demonstration Event Detail`
- LCP candidate: Text H1/status block.
- Schema: None for demonstration content; future verified records may use `Event` plus `BreadcrumbList`.
- Canonical/indexability: Fixture noindex and excluded from sitemap.
- Internal links: Events, Join, Support, Contact.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Prototype warning | Is this a real event? | Explicit `not a real event` label | Events |
| 2 | Fact ledger | What would I need to know? | Placeholder date/time/venue/cost/accessibility fields, visibly unresolved | None |
| 3 | Description | Why attend? | Structural placeholder only | None |
| 4 | Registration | How would I register? | Disabled/unavailable handoff with verification rule | Join the Work |

## Requirements

- Mobile: Status and date facts lead; action never obscures content.
- Accessibility/performance: Use `dl`, `time` only with real dates, descriptive disabled-state explanation; static HTML.
- Unknowns: `[NEEDS CLIENT INPUT: Supply an approved Wix event record and verified hosted registration URL.]`
- Acceptance: No `Event` schema, fake date, fake venue, or transaction; route is noindex.
