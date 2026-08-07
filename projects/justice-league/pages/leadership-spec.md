# Leadership and Governance Page Specification

- Route: `/about/leadership/`
- Page type: Governance roster, Evidence mode
- Objective: Present the current-site roster as a dated prototype record while making recertification needs unmistakable.
- Audience/intent: Donors, partners, media, and prospective participants checking accountability.
- Primary conversion: Contact the Organization. Secondary: Join the Work.
- Search intent: Justice League GLM leadership and board.
- Proposed title: `Leadership and Governance | Justice League GLM`
- Meta description: `Review the provisionally recorded executive team, board, advisory council, and governance information for Justice League GLM.`
- H1: `Leadership and Governance`
- LCP candidate: Text H1.
- Schema: `WebPage` and `BreadcrumbList`; no `Person` schema before recertification.
- Canonical/indexability: `/about/leadership/`; noindex until roster and governance materials are approved.

## August 7, 2026 verified-media amendment

- The current Wix roster contains 4 Executive Team, 5 Board of Directors, and 7 Advisory Council records.
- Render every record from centralized typed data containing group, name, published role, local asset, source URL, dimensions, and optional focal position.
- Reuse the verified Wix leadership hero and the exact portrait associated with each person in the Wix repeater item. Repeated or misleading filenames are not identity evidence.
- Use semantic section headings and list markup, one page H1, meaningful portrait alt text containing the person’s name, intrinsic dimensions, `object-fit: cover`, and responsive one/two/three/four-column compositions.
- “Advisory Council” is the published role. Do not render “Role details not supplied.”
- The imagery extends the selected Documentary Community / Editorial Evidence direction through restrained crops, source dating, and visible governance context.
- Internal links: About, History, Impact, Contact, Join.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Review status | Is this roster current? | Observed August 6, 2026; not recertified | Contact corrections |
| 2 | Executive team | Who holds executive roles? | Supplied names and roles only | None |
| 3 | Board | Who provides board oversight? | Supplied chair/member names only | None |
| 4 | Advisory council | Who is listed as an advisor? | Supplied names only | None |
| 5 | Governance gaps | What documents are missing? | Visible document inventory | Impact and Contact |

## Requirements

- Media: No portraits until identity, consent, credits, and currentness are verified.
- Mobile: Roster is a ruled vertical ledger, never a dense card grid.
- Accessibility/performance: Semantic grouped lists; status is textual, not color-only; zero route JS.
- Unknowns: `[NEEDS CLIENT INPUT: Recertify names, roles, terms, distinctions, governance documents, and nonprofit-status evidence.]`
- Acceptance: Names exactly match supplied findings; no biographies or credentials are inferred; route remains noindex.
