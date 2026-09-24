# site-redesign

## Activation

Use for a substantial redesign of an existing website when visual direction, structure, UX, content hierarchy, or conversion flow needs material change while verified content, working functionality, platform conventions, CMS capability, integrations, and SEO value may need preservation.

Do not use as the default workflow for a new site, a small design fix, an isolated component change, maintenance, or a simple content update. Route those tasks directly to the appropriate lower-level skill.

## Purpose

Coordinate the repository's planning, implementation, and review skills so an existing site is redesigned without treating it as a blank-slate rebuild.

Keep these distinctions explicit throughout the work:

- Content migration versus design migration
- Functional preservation versus visual restructuring

The existing repository and site are source material to audit, not evidence that every current claim is verified or every current implementation should remain.

## Required inputs

- Existing repository and, when available, the running site
- Stakeholder request and known constraints
- Existing content, media, brand assets, and analytics context
- Access needed to inspect current functionality, CMS behavior, integrations, and deployment conventions

## Workflow

### 1. Audit the existing site

Inspect the repository before proposing or changing the design. Inventory:

- Framework or platform, package manager, deployment configuration, and validation commands
- Routes, pages, navigation, header and site-shell architecture, header-to-hero relationship, footer, reusable components, design tokens, fonts, breakpoints, images, and media
- CMS and content model, editing capability, forms, calls to action, user flows, business logic, ecommerce, and authentication
- Integrations, analytics, and third-party scripts
- Metadata, structured data, canonicals, redirects, and other SEO assets
- Existing accessibility behavior and working responsive behavior

Audit the content separately for factual trustworthiness. Existing copy is not automatically verified. Apply the truthfulness and placeholder rules in `AGENTS.md`.

Produce an existing-site audit with evidence, important dependencies, validation gaps, and the baseline behavior that later reviews must compare against.

### 2. Build the redesign classification

Classify each important route, content group, feature, integration, component family, site-shell behavior, or design behavior as:

- **PRESERVE:** Retain verified facts, authentic media, useful URLs, required CMS capability, or working functionality.
- **IMPROVE:** Keep the role while improving its execution.
- **RESTRUCTURE:** Change hierarchy, sequencing, grouping, or composition while retaining the underlying purpose or content.
- **REPLACE:** Substitute an implementation or treatment that no longer serves the brief.
- **REMOVE:** Eliminate duplicated, obsolete, dead, unsupported, or valueless material.
- **NEEDS CLIENT INPUT:** Stop the affected decision because facts, ownership, requirements, or approval are missing.

Record the result as a matrix with: item or feature, current role, classification, rationale, dependency or risk, and intended redesign treatment.

### 3. Establish the Redesign Contract

Before implementation, document and approve the boundary of the redesign.

**Must preserve**

- Verified facts and required legal content
- Working functionality and business logic
- Required integrations, analytics, and tracking
- Required CMS editing capability
- Important SEO assets and existing URLs where practical

**May change**

- Layout, section order, visual hierarchy, typography, spacing, and imagery treatment
- Component architecture, interaction treatment, CTA presentation, and responsive behavior

**Must not**

- Invent content or silently replace verified content with filler
- Drop working functionality, break integrations, or destroy CMS editing capability without approval
- Remove important SEO routes without an approved redirect plan
- Treat a visual redesign as permission to rewrite facts
- Flatten the site into a generic landing-page formula or one repeated major-section composition

Record consequential choices in `templates/design-decision-log.md`.

### 4. Complete discovery and strategy

Use `design-discovery` when the existing brief is incomplete. Use `industry-design-research` when category conventions, trust barriers, competitor patterns, or differentiation need current evidence.

The completed redesign brief must establish the business and user goals, audiences, primary conversion, current problems, strengths worth preserving, brand traits, available media, platform and CMS constraints, known functionality and SEO considerations, content gaps, and success criteria.

Do not proceed while an `AGENTS.md` stop condition applies.

### 5. Select an art direction

Use `art-direction-generator` to produce three substantially different directions and select one with a recorded rationale.

For each direction, add redesign-specific reasoning: which existing brand qualities remain, which visual behaviors change, and how the direction affects content emphasis, page rhythm, composition vocabulary, media, density, whitespace, typography relationships, header/site-shell architecture, the header-to-hero relationship, CTAs, responsive behavior, and resistance to generic AI patterns. Explicitly decide whether the existing shell is preserved, improved, restructured, or replaced.

### 6. Confirm or revise information architecture

Use `information-architecture` when navigation, grouping, hierarchy, routes, or conversion paths require change. Do not change IA merely to make the redesign appear more extensive.

Preserve useful URLs where practical. For every changed or removed route, record the reason, SEO implications, internal-link impact, and redirect requirement before implementation.

### 7. Plan every redesigned page

Use `page-content-planner` for each route. Require a page specification and implementation-ready composition map before code changes.

Verify that every major section records its purpose, composition archetype, dominant element, hierarchy source, alignment, density, media behavior, CTA behavior, and mobile adaptation.

At the orchestration level, confirm that each plan:

- Improves hierarchy and task flow rather than merely restyling existing sections
- Preserves useful verified content and removes unnecessary duplication
- Uses content-supported composition diversity and meaningful negative space
- Defines a deliberate mobile strategy
- Avoids accidental repetition, including repeated section-introduction formulas and default reuse of the same header/site-shell silhouette

Leave detailed composition, typography, and whitespace rules to `AGENTS.md`, `page-content-planner`, and their references.

### 8. Implement in the native project

Use `frontend-ui-builder`. Implementation may begin only after the project brief, three art directions, selected direction and rationale, approved IA, page specification, and composition map exist.

Verify that the implementation follows the Redesign Contract, selected direction, and approved composition maps; carries forward verified content; preserves required functionality and integrations; and preserves or improves required CMS editing. Do not reproduce `frontend-ui-builder` implementation guidance here.

### 9. Run the redesign review pipeline

After implementation, run these skills in order:

1. `responsive-design-review`
2. `visual-design-review`
3. `accessibility-audit`
4. `technical-seo-audit`
5. `performance-review`
6. `anti-template-review`
7. `website-qa`

Use the issue format required by `AGENTS.md`. Treat documented findings as unresolved work, not completion evidence.

The latest headline-wrapping, typography-integrity, whitespace, dead-space, composition-balance, header/site-shell-diversity, and accidental-composition checks are inherited through `page-content-planner`, `frontend-ui-builder`, the review skills, and `website-qa`. Do not restate or fork those checks in this skill.

### 10. Remediate and recheck

For every blocker or high-severity finding:

1. Return to the earliest planning or implementation stage that owns the cause.
2. Remediate the issue.
3. Rerun the affected review.
4. Rerun downstream reviews when the change could alter their evidence or conclusions.

Examples of routing include page-rhythm failures back to the composition map and implementation; heading-wrap failures back to implementation and responsive review; hero dead space back to page planning or implementation and then visual and responsive review; and route regressions back to IA or implementation and then SEO and final QA.

## Output

Maintain an inspectable redesign record containing:

- Existing-site audit
- Redesign classification matrix
- Redesign Contract
- Completed or updated project brief
- Three art directions and selected-direction rationale
- IA confirmation or approved revision, including redirects when applicable
- Page specifications and composition maps
- Design-decision log updates
- Implemented code and required screenshots
- Review findings, remediation records, retest evidence, and final QA result

Use existing templates and references where they fit. Do not create a parallel template unless a redesign-specific artifact cannot be expressed clearly in the audit, classification matrix, contract, or decision log.

## Completion conditions

A redesign is complete only when:

- Required planning artifacts and implementation exist
- The Redesign Contract was honored
- Required functionality, integrations, CMS capability, and verified content remain intact or have approved changes
- Important routes are preserved or redirected according to the approved plan
- The selected art direction is recognizable and the composition maps were implemented rather than flattened
- Responsive, visual, accessibility, SEO, performance, anti-template, and website QA reviews have run with evidence
- All blocker and high-severity findings have been remediated and rechecked
- Remaining medium and low issues are documented
- Final website QA gives a release-ready result

## Failure conditions

Stop implementation and request or visibly record missing input when:

- The primary conversion is unknown or the intended audience is materially ambiguous
- Essential business facts cannot be verified or implementation would require invented client facts
- Required functionality is unclear
- Removing or changing an integration lacks approval
- CMS ownership or editing expectations are unclear and materially affect architecture
- Route changes have unresolved SEO consequences
- The selected art direction conflicts with available content, media, or accessibility requirements
- Required legal, pricing, schedule, location, or availability information is missing
- Any `AGENTS.md` stop condition applies

## Quality checks

- [ ] Existing architecture and validation commands inspected
- [ ] Existing functionality, content trust, integrations, CMS behavior, and SEO assets inventoried
- [ ] Redesign classification matrix completed
- [ ] Redesign Contract completed
- [ ] Verified content and required functionality preserved
- [ ] Existing header/site shell classified and redesign treatment documented
- [ ] Three art directions completed and selection documented
- [ ] IA confirmed or changed intentionally with redirects defined
- [ ] Page specifications and composition maps completed
- [ ] Implementation uses the native platform and preserves required CMS capability
- [ ] Required reviews completed in order
- [ ] Blocker and high-severity issues remediated and rechecked
- [ ] Final website QA passed

## Dependencies

- `design-discovery`
- `industry-design-research`
- `art-direction-generator`
- `information-architecture`
- `page-content-planner`
- `frontend-ui-builder`
- `responsive-design-review`
- `visual-design-review`
- `accessibility-audit`
- `technical-seo-audit`
- `performance-review`
- `anti-template-review`
- `website-qa`
