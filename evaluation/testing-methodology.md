# Testing Methodology

## Experiment design

For each sample project:

1. Freeze the same verified brief, content set, media set, stack, and time box.
2. Create a baseline using the existing general prompt without this system.
3. Create a treatment using this repository and required workflow.
4. Do not let the treatment see the baseline score before completion.
5. Render the same routes and viewports.
6. Score both with the 100-point rubric using at least two reviewers where possible.
7. Run accessibility, SEO, performance, and anti-template checks.
8. Record time, context loaded, number of clarification cycles, defects, and rework.
9. Compare outcomes and identify overhead.

## Measures

- Total rubric score and category deltas
- Automatic failures
- Number of repeated generic patterns
- Mobile defects
- Accessibility defects by severity
- SEO requirements present before implementation
- LCP/CLS/TBT laboratory diagnostics and field data when available
- Number of fabricated or unsupported facts
- Design decision traceability
- Context size and workflow completion time
- Skill activation precision and missed activations

## Validity controls

- Same content and assets
- Same technical constraints
- Same target routes
- Blind or rubric-led review where practical
- Record deviations
- Do not infer conversion lift without analytics or controlled testing
