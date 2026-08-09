# Reparations and History reconciliation

Date: 2026-08-09

## Source review and constraint

The implementation was compared with the existing Astro pages, the previously approved Wix History and Timeline material already transcribed into the repository, and the legacy Reparations subjects supplied for this reconciliation. Direct HTTP review of the three live Wix routes was attempted on August 9, 2026, but the execution environment's web proxy returned `401 Unauthorized` through the browser tool and `403 CONNECT tunnel failed` through `curl`. The live URLs remain linked from the pages so a stakeholder can complete a final visual/source check outside this environment.

## Content comparison

| Subject | Before this reconciliation | Decision |
|---|---|---|
| Slavery and uncompensated labor | Implied in the introduction | Add explicitly to the Reparations progression |
| Emancipation and Special Field Orders No. 15 | Emancipation summarized; land order absent | Add cautious, concise context |
| Homestead Acts and sharecropping | Land programs generalized; sharecropping only named on History | Add to a grouped freedom-without-repair record |
| Jim Crow and G.I. Bill administration | Present in one short record | Retain and clarify the distinction between promised benefits and discriminatory administration |
| Housing, Levittown, Greater Lansing/East Lansing, and redlining | Housing and redlining present; examples absent | Add examples in one housing record without turning them into separate sections |
| Racial wealth divide, generational wealth, and structural racism | Present but compressed | Connect them causally and avoid presenting an undated statistic |
| Reparations Endowment strategy | Fund briefly described | Retain congregational commitments, capital campaigns, stewardship, and African American governance; omit the expired 2025 target |
| Education, homeownership, business development | Already prominent | Preserve unchanged as the three primary pathways |
| Faith responsibility and repairing the breach | Already present | Preserve and add documentary evidence from the apology gathering |
| Organization origin and chronology | Strong 2021–2026 timeline already present | Preserve chronology and enrich only the concise “why we formed” introduction |

## Page architecture

- **Reparations** owns the deeper educational narrative: history → accumulated harm → wealth divide → local repair model → pathways → action. Six progressive records use native disclosures so the page remains scannable and works without JavaScript.
- **History and Timeline** owns the organization narrative: why the organization formed → how the three-pillar model developed → what the organization has documented by date → publication standard and next participation paths.
- Cross-links let readers move from History to the deeper Reparations explanation and from Reparations to dated organizational evidence without duplicating either page.

## Media inventory

| Wix media | Decision | Current use | Notes |
|---|---|---|---|
| Willye Bryan founder portrait | Already used | 2021 timeline milestone | Retained with intrinsic dimensions, alt, caption, lazy loading |
| October 2022 Socialight Society presentation | Already used | October 2022 timeline milestone | Retained |
| January 2023 Lansing Reachout apology gathering | Reuse in a second, contextually distinct crop | January 2023 timeline milestone and Reparations faith/action section | Documentary-photo reuse permission was confirmed by the stakeholder on August 9, 2026; the Reparations variant is a bounded 900×598 Wix transform, not a new duplicate file |
| June 2023 Capitol apology gathering | Already used | June 2023 timeline milestone | Retained |
| 2024 scholarship cohort | Already used | August 2024 timeline milestone | Retained |
| McCullough Street home build | Already used | April 2025 timeline milestone | Retained |
| Kalamazoo launch gathering | Already used | July 2025 timeline milestone | Retained |
| 2025 scholarship cohort | Already used | August 2025 timeline milestone | Retained |
| Fourth anniversary gathering | Already used | November 2025 timeline milestone | Retained |
| How Did We Get Here? Part II graphic | Already used | February 2026 timeline milestone | Retained as a dated event artifact |
| Legacy redlining and racial-wealth graphics | Omit pending review | None | Attribution and reuse rights could not be confirmed in this environment; no screenshot or invented replacement was added |
| Other Wix gallery/event media | Omit | None | The selected timeline set already documents founder, apology, education, housing, coalition, and public-event records; importing the full gallery would dilute context and add payload |

## Accuracy and unresolved review

- No undated racial-wealth statistic was migrated. Legacy figures must retain their data year and named research source before publication.
- Special Field Orders No. 15, Homestead access, G.I. Bill administration, and Levittown are summarized cautiously rather than reproducing broad legacy claims verbatim.
- Congregational dollar figures, scholarship awards, and home-build amounts remain only in dated timeline entries and are explicitly historical records rather than current balances or availability.
- The legacy “$1 million by the end of 2025” target is intentionally omitted.
- No current endowment balance, grant amount, application availability, eligibility, or deadline was introduced.
- The stakeholder confirmed permission on August 9, 2026, to reuse all remotely referenced Wix documentary photographs. This confirmation applies to the organization-owned Wix photography used by the Astro site; it does not establish republication rights for third-party research graphics.
- Client confirmation remains required for: source/rights for legacy research graphics; exact wording and evidence for Greater Lansing/East Lansing housing discrimination; the current African American advisory governance name and remit; ongoing history content ownership and approval.
