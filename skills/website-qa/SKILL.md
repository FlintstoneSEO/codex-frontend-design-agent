# website-qa

## Activation

Use before release for integrated verification.

## Purpose

Coordinate content, functional, visual, browser, accessibility, SEO, and performance checks.

## Required inputs

- Release candidate
- Test routes
- Project brief
- Acceptance criteria

## Workflow

1. Resolve placeholders.
2. Test links/forms/states.
3. Run full-page screenshot reviews and the composition diversity gate.
4. Run accessibility, SEO, performance checks.
5. Test representative browsers/devices.
6. Record blockers and sign-off evidence.

## Output

Release checklist, defects, owners, retest evidence, and go/no-go recommendation.

## References

- `references/website-qa-checklist.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Automatic failure remains
- Critical fact or legal content is unresolved

## Quality checks

- [ ] All core journeys tested
- [ ] No automatic failures
- [ ] Evidence attached
- [ ] Known risks documented

## Composition diversity gate

- [ ] No accidental repeated section-heading formula
- [ ] Eyebrows and kickers are selective and semantically useful
- [ ] Consecutive sections do not share the same hierarchy without justification
- [ ] Page rhythm includes meaningful, content-supported variation in scale, density, alignment, media, and whitespace
- [ ] Visual hierarchy comes from multiple content types where appropriate
- [ ] Mobile composition was designed rather than merely stacked
- [ ] Remaining repetition is intentional and documented
- [ ] Components and CMS fields reflect content semantics rather than one universal section schema

## Dependencies

- `visual-design-review`
- `responsive-design-review`
- `accessibility-audit`
- `technical-seo-audit`
- `performance-review`
- `anti-template-review`
