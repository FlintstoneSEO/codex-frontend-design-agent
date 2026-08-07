# Story Detail Page Specification

- Route: `/news/[slug]/` (prototype fixture: `/news/demo-story/`)
- Page type: Editorial article, Documentary Community mode
- Objective: Validate long-form story structure, source notes, corrections, and contextual action without publishing fictional news.
- Audience/intent: Readers seeking a complete dated account and a relevant next step.
- Primary conversion: Contextual related action. Secondary: Read related work.
- Search intent: Specific story topic and organization.
- Proposed title: `Demonstration Story | Justice League GLM Prototype`
- Meta description: `A noindex demonstration of the editorial, sourcing, and correction structure required for future Justice League GLM stories.`
- H1: `Demonstration Story Structure`
- LCP candidate: Text H1.
- Schema: None for fixture; future verified records may use `Article` and `BreadcrumbList`.
- Canonical/indexability: Fixture noindex and excluded from sitemap.
- Internal links: News, Reparations, Join, Contact.

## Section hierarchy

| Order | Section | User question | Proof/content | Action |
|---:|---|---|---|---|
| 1 | Prototype warning | Is this published reporting? | Explicit fixture notice | News |
| 2 | Metadata | Who published and when? | Structural labels with unresolved values | None |
| 3 | Article body | How will context be organized? | Clearly marked placeholder paragraphs and subheadings | Reparations |
| 4 | Sources/corrections | How is accountability handled? | Source and update policy | Contact |

## Requirements

- Mobile: Reading measure stays narrow; metadata remains attached to article.
- Accessibility/performance: Semantic `article`, headings, source list; zero route JS.
- Unknowns: `[NEEDS CLIENT INPUT: Supply approved story records, publisher policy, sources, media, captions, and correction owner.]`
- Acceptance: No `Article` schema or fictional claim; all placeholder text is labelled; route noindex.
