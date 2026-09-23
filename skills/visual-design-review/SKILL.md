# visual-design-review

## Activation

Use after a page is rendered or when screenshots are available.

## Purpose

Evaluate strategic fit, hierarchy, page rhythm, composition diversity, type, spacing, content clarity, conversion, and distinctiveness.

## Required inputs

- Full-page screenshots at required widths, including a long-page view where practical
- Page specification
- Art direction
- Project brief

## Workflow

1. Compare rendered result to strategy.
2. Inspect the full page before isolated sections. Ask whether the page has a recognizable rhythm; whether major sections have differentiated roles; whether scale, density, alignment, media behavior, and whitespace change meaningfully; and whether repetition feels intentional.
3. Test whether multiple sections could be swapped without materially changing the experience, whether the long screenshot becomes monotonous, whether the design remains distinctive without the logo or brand name, and whether the composition fits this industry and content.
4. Compare desktop and mobile composition maps to the rendered adaptations.
5. Score the rubric. Do not award a strong page-level score merely because individual sections are polished.
6. Identify viewport-specific issues using the exact issue format.
7. Prioritize remediation and re-score.

## Output

Scored review and actionable remediation table.

## References

- `references/design-review-rubric.md`
- `references/screenshot-review-workflow.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Required screenshots missing
- Review lacks project context

## Quality checks

- [ ] No vague feedback
- [ ] Every deduction has evidence
- [ ] Automatic failures identified
- [ ] Complete-page rhythm and composition diversity assessed
- [ ] Intentional and accidental repetition distinguished
- [ ] Mobile preserves each major composition's design idea

## Dependencies

- `frontend-ui-builder`
