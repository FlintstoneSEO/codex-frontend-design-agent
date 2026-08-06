# Anti-Template Design Rules

## Gate 1: Context

- [ ] Business type, audience, geography, content, primary conversion, secondary conversion, brand position, media, technical stack, and constraints are known.
- [ ] Unknowns are marked, not invented.
- [ ] Competitor references are separated into “useful principle” and “do not copy.”

## Gate 2: Concept

- [ ] Three directions change composition, hierarchy, image behavior, density, and component grammar.
- [ ] Each direction names its strategic idea and intended emotional response.
- [ ] The recommended direction is justified against the business brief.
- [ ] The design remains recognizable without the logo.
- [ ] Decorative devices derive from the concept.

## Gate 3: Composition

- [ ] The page does not automatically start with an oversized centered hero.
- [ ] The hierarchy is driven by user intent rather than a fixed section formula.
- [ ] Cards are used only for genuine discrete objects.
- [ ] Sections are not all symmetrical grids.
- [ ] Repeated three-column patterns have been challenged.
- [ ] Section transitions use content, rhythm, media, type, dividers, or density rather than decorative blobs alone.
- [ ] Rounded corners have a defined role and limited radius scale.
- [ ] Gradients and glass effects have a documented reason.
- [ ] Empty sections added to create page length are removed.

## Gate 4: Content

- [ ] Headings are specific to the organization and user question.
- [ ] CTAs use concrete verbs and destinations, not repeated “Learn More.”
- [ ] Claims have evidence or are removed.
- [ ] No fabricated testimonials, metrics, awards, credentials, prices, inventory, or locations.
- [ ] Proof appears near the claim or decision it supports.
- [ ] SEO intent and headings were planned before implementation.

## Gate 5: Responsive behavior

- [ ] Mobile is deliberately composed.
- [ ] Reading and focus order remain coherent.
- [ ] Images are re-cropped or replaced when necessary.
- [ ] Navigation reflects mobile tasks rather than merely hiding desktop links.
- [ ] Repeated stacking does not create excessive scroll or disconnected labels.
- [ ] Sticky elements do not cover content or controls.
- [ ] No horizontal overflow at 320px and target review widths.

## Gate 6: Implementation

- [ ] Components expose brand tokens rather than shipping a fixed component-library appearance.
- [ ] Semantic HTML and native controls precede ARIA.
- [ ] Motion has reduced-motion behavior.
- [ ] Image dimensions prevent layout shifts.
- [ ] Font, JavaScript, third-party, and image budgets are respected.
- [ ] The page remains usable if optional animation fails.

## Red-team questions

1. Could this page be rebranded for an unrelated industry by changing the logo and palette?
2. Is the strongest visual idea related to the business, or merely fashionable?
3. Does every section answer a user question or move a conversion decision?
4. Which repeated component could become a list, table, timeline, story, comparison, or full-width composition?
5. What would a real customer doubt at this point in the page?
6. What is the page’s primary action, and is anything competing with it?
7. Does the mobile version preserve meaning or only preserve components?
