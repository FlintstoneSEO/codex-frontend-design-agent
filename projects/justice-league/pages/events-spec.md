# Events Index Page Specification

- Route: `/events/`
- Page type: Event discovery, Campaign mode
- Objective: Demonstrate truthful active, past, empty, and error states without representing a fixture as a real event.
- Audience/intent: Residents, supporters, applicants, and partners looking for current gatherings.
- Primary conversion: Register for a verified event. Secondary: Join the Work.
- Search intent: Justice League GLM events and reparations events Lansing.
- Proposed title: `Events and Meetings | Justice League GLM`
- Meta description: `Review the event discovery prototype and how verified Justice League GLM events, meetings, and registration states will appear.`
- H1: `Events and Meetings`
- LCP candidate: Text H1.
- Schema: `WebPage` only; fixtures receive no `Event` schema.
- Canonical/indexability: `/events/`; prototype noindex, intended index after Wix Events is connected.
- Internal links: Demo event, Join, News, Scholarship, Contact.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Source status | Are these events live? | Wix Events not connected notice | None |
| 2 | State demonstration | What happens in each state? | Labelled active, past, empty, and error fixture views | Open demo detail |
| 3 | Registration standard | What will a real listing show? | Date, zone, place, cost, accessibility, status, handoff owner | Join the Work |

## Requirements

- Media: No flyer images; future imagery needs HTML facts and contextual alt/caption.
- Mobile: Event ledger is vertical; facts precede action; no carousel.
- Accessibility/performance: Buttons announce selected state; status text is programmatic; minimal local JS only for demo switching.
- Unknowns: `[NEEDS CLIENT INPUT: Connect Wix Events and verify public records, checkout URLs, accessibility facts, and ownership.]`
- Acceptance: Fixtures say `Demonstration`; no unverified external link; all four states work by keyboard.
