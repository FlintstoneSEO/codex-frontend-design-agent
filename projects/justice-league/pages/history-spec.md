# History Page Specification

- Route: `/about/history/`
- Page type: Editorial chronology, Evidence mode
- Objective: Establish a sourced historical record without filling gaps with narrative invention.
- Audience/intent: Residents, researchers, educators, partners, and media seeking the organization's origin and milestones.
- Primary conversion: Explore Reparations. Secondary: Join the Work.
- Search intent: Justice League GLM history and Greater Lansing reparations history.
- Proposed title: `History and Timeline | Justice League GLM`
- Meta description: `Review the developing, source-labelled history of the Justice League of Greater Lansing and its local reparations work.`
- H1: `History and Timeline`
- LCP candidate: Text H1.
- Schema: `WebPage` and `BreadcrumbList`; no event or person schema.
- Canonical/indexability: `/about/history/`; prototype noindex, intended index after milestone approval.
- Internal links: About, Reparations, Scholarship, News, Join.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Record introduction | What can I trust here? | Current-site observation date and approval status | About |
| 2 | Chronology | When did the organization begin? | `2021` founding statement, explicitly provisional | View source note |
| 3 | Missing record | What remains undocumented? | Visible request for verified milestones, citations, and media rights | Contact |
| 4 | Continue learning | What context belongs next? | Links to Reparations and Scholarship | Explore Reparations |

## Requirements

- Media: Omit until original historical files, captions, dates, and rights are supplied.
- Mobile: Timeline becomes date, rule, and narrative in source order; no horizontal axis.
- Accessibility/performance: Use `ol` and `time`; source note is normal-size text; static HTML.
- Unknowns: `[NEEDS CLIENT INPUT: Verify founding date and provide dated milestones, sources, captions, and rights.]`
- Acceptance: No unsupported milestone or quotation; one H1; breadcrumb present; every date has a review label.
