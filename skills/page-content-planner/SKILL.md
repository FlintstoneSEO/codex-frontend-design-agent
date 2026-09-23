# page-content-planner

## Activation

Use before building each page.

## Purpose

Convert strategy, IA, SEO, and art direction into an implementation-ready page specification.

## Required inputs

- Project brief
- Selected art direction
- Route and page type
- Verified content

## Workflow

1. Define objective, audience, intent, conversion, search intent, metadata, H1, proof, links, schema, media, accessibility, and performance.
2. For every major section, define its purpose, key message, content type, composition archetype, dominant visual element, hierarchy source, alignment strategy, media behavior, CTA behavior, and mobile adaptation. When prominent type or large negative space carries the composition, also record the intended heading measure or manual-break rationale and the whitespace's compositional function.
3. Create a page-level composition map that names the page rhythm, dominant patterns, intentional repetition, patterns to avoid, and the relationship between neighboring sections.
4. Check hierarchy diversity before implementation. Flag consecutive `eyebrow -> heading -> paragraph` introductions, more than three consecutive sections with the same alignment, repeated silhouettes or spacing cadence, and hierarchy that comes from headings alone. Apply the roughly 40% eyebrow heuristic on pages with five or more major sections, but do not force unsupported variety.
5. Mark missing content and consequential assumptions.
6. Define acceptance criteria, including the composition diversity gate.

## Output

One page specification per route with an implementation-ready composition map. The map may live inside the page specification or in a linked artifact.

## References

- `references/page-brief-template.md`
- `research/section-composition-patterns.md`
- `research/seo-standards.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Critical facts or conversion are unknown
- Proposed page duplicates another page’s purpose

## Quality checks

- [ ] No filler sections
- [ ] Proof near claims
- [ ] SEO integrated
- [ ] LCP candidate identified
- [ ] Every major section has a content-driven hierarchy and mobile composition
- [ ] Neighboring sections do not repeat the same introduction, alignment, silhouette, and cadence without rationale
- [ ] Eyebrows are selective and semantically useful
- [ ] Intentional repetition is documented
- [ ] Prominent type and large negative space have implementation-ready intent where they carry the composition

## Dependencies

- `information-architecture`
- `art-direction-generator`
