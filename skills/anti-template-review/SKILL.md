# anti-template-review

## Activation

Use before direction approval and release.

## Purpose

Detect generic AI composition, page-level repetition, and brand-industry mismatch.

## Required inputs

- Project brief
- Art direction
- Full-page screenshots at required desktop and mobile widths
- Page composition map and components

## Workflow

1. Run context, concept, composition, content, responsive, and implementation gates against the complete page, not isolated components.
2. Run the Composition Repetition Audit below.
3. Run the Accidental Composition Audit below.
4. Apply red-team questions and identify replaceable generic patterns.
5. Recommend content-driven structural alternatives and re-check the complete page rhythm.

## Composition Repetition Audit

Inspect and count equivalent patterns across all major sections. Flag:

- Three or more sections with equivalent eyebrow / heading / body introductions
- Excessive or semantically empty eyebrow and kicker use
- Repeated centered introductions or repeated left-aligned heading + paragraph blocks
- Excessive three-card grids or rounded-card fields
- Mechanical image-left / image-right alternation
- Repeated CTA bands
- Identical vertical spacing cadence, container width, heading measure, or media ratio without purpose
- Identical component silhouettes
- Uniform density or the same hierarchy source throughout the page

For every repetition issue, use the repository's required review format and also name all affected sections, explain why the repetition weakens this page, identify which section should change, recommend an alternative composition, and explain why the alternative better serves that section's content. Do not recommend variety for its own sake.

## Accidental Composition Audit

Inspect bold-looking techniques that may not be supported by the content or selected direction: oversized type that produces isolated fragments; constrained heading measures used mainly to manufacture dramatic wrapping; excessive empty space used instead of hierarchy; viewport-height heroes with weak vertical relationships; arbitrary column offsets; and manual line breaks used mainly to imitate editorial design.

Classify each finding as:

1. **Intentional and content-supported:** the technique has a clear role, is competently executed across viewports, and may pass.
2. **Intentional but poorly executed:** the rationale is valid, but wrapping, balance, readability, or responsive behavior requires remediation.
3. **Accidental:** layout mechanics or imitation created the effect without a defensible compositional purpose; require remediation.

Only category 1 passes without remediation. Do not discourage legitimate asymmetry, oversized type, or negative space; require purpose, content support, and competent responsive execution.

## Output

Pass/fail checklist, composition repetition findings, and exact redesign actions.

## References

- `research/anti-template-patterns.md`
- `research/design-taxonomy.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- No project brief or selected direction

## Quality checks

- [ ] Structural critique, not taste alone
- [ ] Cards/gradients/radii justified
- [ ] Distinct without logo
- [ ] Full-page rhythm inspected at desktop and mobile widths
- [ ] Repetition evidence names affected sections and a content-driven alternative
- [ ] Composition diversity gate passes
- [ ] Dramatic typography, whitespace, and offsets pass the Accidental Composition Audit
- [ ] Every audited technique is classified as intentional and content-supported, intentional but poorly executed, or accidental

## Dependencies

- `art-direction-generator`
- `visual-design-review`
