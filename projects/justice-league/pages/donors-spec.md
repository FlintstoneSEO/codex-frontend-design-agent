# Donors Page Specification

## August 7, 2026 publication-policy amendment

- Little Green Light parsing and fallback normalization must retain every valid source year.
- `PUBLIC_DONOR_MIN_YEAR` is applied only to normalized groups returned for public rendering.
- The public page renders 2026, 2025, 2024, and 2023 when present; 2022 and earlier remain in source/fallback data but are not rendered.
- This matches the current Wix public presentation and is not evidence of missing LGL records.
- Tests must prove that parsed/fallback 2022 records survive normalization while the public result excludes them.

- Route: `/donors/`
- Page type: Public acknowledgment ledger, Evidence mode
- Objective: Publish the donor acknowledgment directly on the Astro site from the public Little Green Light report while exposing only donor display names and recognition years.
- Audience/intent: Donors, reparations payees, supporters, residents, and institutional reviewers seeking the current public acknowledgment.
- Primary conversion: Support Reparations. Secondary: View Supporters.
- Search intent: Justice League GLM donors and reparations fund supporters.
- Proposed title: `Justice League GLM Donors | Reparations Payees & Administration Fund Supporters`
- Meta description: `View Justice League GLM donors acknowledged by year for the Reparations Payees and Administration funds.`
- H1: `Grateful Acknowledgment to Our Reparations Payees & Administration Fund Donors`
- LCP candidate: Text H1.
- Schema: `WebPage` and `BreadcrumbList`; no Person, Donation, or financial structured data.
- Canonical/indexability: `/donors/`; retain the site's global prototype `noindex` policy until launch.
- Internal links: Impact, Supporters, Reparations, Support Reparations, and Contact.

## Selected composition

Use the approved Editorial Evidence mode: an explicit source/status strip followed by a single year ledger. This is not a card collection. Years are strong section headings, and names use semantic lists in responsive columns.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Acknowledgment introduction | What is this record? | Exact public acknowledgment purpose and source relationship | None |
| 2 | Source status | Is this current and what is exposed? | LGL source, retrieval/fallback state, review date, privacy boundary | Impact |
| 3 | Year ledgers | Who is acknowledged and when? | Dynamically detected fiscal years, newest first; alphabetized donor display names | None |
| 4 | Related paths | How are donors and supporters different? | Plain-language distinction and separate destinations | Supporters / Support Reparations |

## Data and failure requirements

- Fetch the public LGL report at build time because this Astro project uses static output.
- Parse CSV with a typed normalizer; detect fiscal-year columns rather than hardcoding a fixed year list.
- A positive numeric value in a fiscal-year column means the `Addressee` is acknowledged for that year. Never render the value.
- Retain only `Addressee` and the derived recognition year. Exclude `Id`, amounts, `Groups`, response headers, and cookies from built HTML and fallback data.
- Ignore blank physical rows and blank addressee values. Reject malformed CSV or missing required headers.
- Deduplicate names within a year and sort names with an English locale-aware comparison; sort years descending.
- On fetch, HTTP, timeout, schema, or parsing failure, render a checked-in sanitized snapshot and show a visible stale-data notice. The build must not fail solely because LGL is unavailable.
- If both the live report and fallback are invalid, render an explanatory unavailable state rather than a blank ledger or fabricated names.

## Requirements

- Mobile: One name column at narrow widths; two columns when space permits; three columns on wide screens. Never create horizontal scrolling.
- Accessibility: Exactly one H1; each year is an H2; each donor group is a labelled `<ul>`; no JavaScript required to reveal names.
- Performance: Static HTML; no client-side CSV fetch; no private source fields or raw-report link in browser assets.
- Acceptance: Current and prior source years render newest first; representative names match LGL and Wix; private fields and amounts do not appear in generated HTML.
