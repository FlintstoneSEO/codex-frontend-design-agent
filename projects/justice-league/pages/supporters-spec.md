# Supporters Page Specification

- Route: `/supporters/`
- Page type: Curated organization acknowledgment, Documentary Community mode
- Objective: Reproduce the current Wix `Repairers of the Breach` roster as a separate, editable supporter dataset with correctly paired approved logos.
- Audience/intent: Residents, houses of worship, community organizations, donors, media, and prospective collaborators checking current organizational supporters.
- Primary conversion: Join the Work. Secondary: View Donors.
- Search intent: Justice League GLM supporters and Repairers of the Breach.
- Proposed title: `Repairers of the Breach | Justice League GLM Supporters`
- Meta description: `Meet the organizations currently recognized by Justice League GLM as Repairers of the Breach.`
- H1: `Repairers of the Breach`
- LCP candidate: Text H1.
- Schema: `WebPage` and `BreadcrumbList`; do not infer sponsorship levels or Organization relationships in structured data.
- Canonical/indexability: `/supporters/`; retain the site's global prototype `noindex` policy until launch.
- Internal links: Impact, Donors, Reparations, Join the Work, and Contact.

## Selected composition

Use the approved Documentary Community mode with Editorial Evidence discipline: a concise introduction and a uniform logo ledger. Every organization receives the same cell grammar and image treatment; natural logo proportions may vary, but visual prominence must not imply rank.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Repairers introduction | What does this roster represent? | Curated current supporter acknowledgment, not the donor ledger | None |
| 2 | Supporter logo ledger | Which organizations are currently listed? | 18 source-verified names with correctly paired approved Wix-migrated logos | None |
| 3 | Related paths | Where are individual/yearly donors? | Explicit distinction between supporters and donors | Donors / Join the Work |

## Requirements

- Centralized typed data with `name`, local `logo`, `alt`, and source asset URL.
- Use only the logo image paired with that organization on the current Wix Supporters page. Do not search for, recreate, or infer a logo.
- Alt text must name the organization. Visible organization names remain present beside/below images.
- Responsive grid: one column at narrow mobile, two at tablet, three at desktop where content width supports it.
- Preserve each asset's intrinsic proportions with `object-fit: contain`; avoid logo-size ranking.
- Exactly one H1, logical headings, static HTML, visible focus, and no horizontal overflow at 320 CSS pixels.
- Acceptance: All 18 current Wix organizations render once, in source order, with a local approved asset and meaningful alt text.
