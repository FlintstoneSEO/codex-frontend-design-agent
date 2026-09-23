# art-direction-generator

## Activation

Use after discovery and before implementation to create three genuinely different visual systems.

## Purpose

Generate, compare, and recommend three structural art directions.

## Required inputs

- Project brief
- Industry brief
- Available media and brand assets

## Workflow

1. Select three distinct taxonomy families.
2. Define strategy, emotion, type, color, page rhythm, content density, section composition vocabulary, media behavior, whitespace, typography scale relationships, alignment, hierarchy sources, components, interaction, mobile, accessibility, and performance.
3. Give content-supported examples of likely section compositions for each direction without fixing the project to a template.
4. Explain structural differences across composition, sequencing, media, density, alignment, and interaction. A palette, font, or surface-style change does not constitute a new direction.
5. Score fit and risk.
6. Recommend one while preserving all three.

## Output

Three completed art-direction documents and recommendation.

## References

- `research/design-taxonomy.md`
- `references/art-direction-template.md`
- `research/anti-template-patterns.md`
- `research/section-composition-patterns.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Directions differ only by color/type
- Directions preserve the same page rhythm, composition vocabulary, media behavior, alignment, and hierarchy sources
- Available content cannot support a direction

## Quality checks

- [ ] Distinct compositions
- [ ] Distinct page rhythm, density, whitespace, media behavior, alignment, interaction, and hierarchy sources
- [ ] Explicit mobile behavior
- [ ] Risks and tradeoffs
- [ ] No copied composition

## Dependencies

- `design-discovery`
- `industry-design-research`
