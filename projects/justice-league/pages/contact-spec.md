# Contact Page Specification

- Route: `/contact/`
- Page type: General inquiry, Documentary Community mode
- Objective: Provide clear inquiry categories and validate an accessible form shell without transmitting personal information.
- Audience/intent: Residents, media, partners, applicants, and prospective participants seeking the right contact path.
- Primary conversion: Test inquiry form shell. Secondary: Join the Work.
- Search intent: Contact Justice League of Greater Lansing.
- Proposed title: `Contact | Justice League GLM`
- Meta description: `Review contact pathways and the non-submitting inquiry form prototype for the Justice League of Greater Lansing.`
- H1: `Contact the Justice League`
- LCP candidate: Text H1.
- Schema: `ContactPage` only after contact information is verified; prototype uses `WebPage` only.
- Canonical/indexability: `/contact/`; prototype noindex, intended index after owner/privacy approval.
- Internal links: Join, Scholarship, Events, Support, Privacy.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Contact orientation | Is this the right form? | Inquiry categories and prototype warning | Select category |
| 2 | Form shell | What would I submit? | Name, email, category, message; no transmission | Test validation |
| 3 | Expectations | When will I hear back? | Visible unresolved owner/timing notice | Join the Work |
| 4 | Privacy | How would data be handled? | Policy shell link; no legal claim | Privacy shell |

## Requirements

- Mobile: Form follows orientation; labels and errors remain visible without side-by-side dependence.
- Accessibility/performance: Persistent labels, required instructions, autocomplete, error summary, associated errors, status region; minimal validation JS.
- Unknowns: `[NEEDS CLIENT INPUT: Verify public email/address, inquiry owner, routing, response expectation, retention, consent, and privacy policy.]`
- Acceptance: No data sent; invalid and success demo states are announced; no invented contact details.
