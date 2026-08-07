# History and Timeline Page Specification

- Route: `/about/history/`
- Page type: Editorial chronology, Evidence mode
- Objective: Explain why the organization formed and present a concise, source-labelled record of its development from 2021 through the latest milestone shown on the current Wix site.
- Audience/intent: Greater Lansing residents, houses of worship, educators, researchers, prospective partners, donors, and media seeking organizational history and evidence of reparations work.
- Primary conversion: Explore Reparations. Secondary: Join the Work.
- Search intent: Justice League GLM history, Justice League Greater Lansing timeline, and Greater Lansing reparations history.
- Proposed title: `History and Timeline | Justice League GLM`
- Meta description: `Trace the Justice League of Greater Lansing from its 2021 founding through public education, reparations scholarships, homebuilding, and regional collaboration.`
- H1: `History and Timeline`
- LCP candidate: Text H1; all timeline imagery loads below the fold.
- Schema: `WebPage` and `BreadcrumbList`; no `Event`, `Person`, or award schema.
- Canonical/indexability: `/about/history/`; prototype remains noindex. Intended production indexability follows final editorial and source review.
- Internal links: About, Leadership, Reparations, Scholarship, Impact, News, Join the Work, and Support Reparations.

## Approved source record

- Primary content source: `https://www.justiceleagueglm.org/timeline`
- Supporting context source: `https://www.justiceleagueglm.org/history`
- Source observation date: August 7, 2026.
- Client approval: Current-site information and the selected current-site photographs were approved for reuse on August 7, 2026.
- Editorial rule: The consolidated headless page replaces the need to reproduce separate History and Timeline destinations. Claims are summarized from the current Wix pages and linked back to that record; unsupported additions are prohibited.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Record introduction | What does this page document? | Source date, reuse approval, and prototype status | View current source |
| 2 | Historical context | Why was repair needed? | Current-site explanation of structural racial wealth harms and the organization’s faith-rooted response | Explore Reparations |
| 3 | Three-pillar foundation | How was the work organized? | Education, homeownership, and business entrepreneurship under African American Advisory Council oversight | View Leadership |
| 4 | Curated chronology | What happened from 2021 through 2026? | Ten dated milestones summarized from the approved current Wix timeline | Follow source links |
| 5 | Publication standard | How will the record remain accountable? | Source, caption, correction, and review requirements | Contact the organization |
| 6 | Continue learning | Where should a reader go next? | Reparations and participation pathways | Explore Reparations / Join the Work |

## Curated chronology

1. 2021 founding and adoption of the three-pillar framework.
2. October 2022 first formal public presentation.
3. January 2023 public apology at Lansing Reachout Christian Center.
4. June 2023 Juneteenth apology gathering at the Michigan State Capitol.
5. August 2024 first reparations scholarship cohort.
6. April 2025 first reparations-supported home build.
7. July 2025 establishment of the Justice League of Greater Kalamazoo.
8. August 2025 second scholarship cohort.
9. November 2025 fourth anniversary Fall Celebration and reported congregational pledge.
10. February 2026 `How Did We Get Here? Part II` and the reported Stables Communities Foundation recognition.

## Requirements

- Media: Use only the explicitly approved Wix-hosted images selected from the current timeline. Preserve aspect ratio, provide contextual alt text, lazy-load every timeline image, and keep text on a controlled black surface rather than on photography.
- Mobile: Use a vertical date-and-record sequence with the image following its related text. Do not create a horizontal timeline or force desktop alternation onto mobile.
- Accessibility: Use `ol`, `li`, `time`, headings in source order, descriptive source links, useful alt text, and captions that do not repeat the alt text verbatim.
- Performance: Use Wix’s resized `quality_auto`/AVIF-capable URLs, intrinsic dimensions, `loading="lazy"`, and `decoding="async"`; do not hydrate the chronology.
- Content maintenance: Treat the Wix timeline as the present source record until a Wix CMS history collection is created. New milestones require a date, approved copy, source, image rights, caption, and content owner.
- Remaining unknown: `[NEEDS CLIENT INPUT: Confirm who owns ongoing history corrections and milestone approval after launch.]`
- Acceptance: One H1; breadcrumb present; no duplicate `/timeline/` route; every milestone has a date and current-source link; all reused images have intrinsic dimensions and alt text; no unsupported quotation, statistic, award, or milestone; prototype remains noindex.
