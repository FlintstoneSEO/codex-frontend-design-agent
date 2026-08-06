# Design Review Rubric

## Weighted score

| Category | Weight |
|---|---:|
| Strategic fit | 10 |
| Industry appropriateness | 7 |
| Brand distinctiveness | 9 |
| Visual hierarchy | 8 |
| Typography | 6 |
| Composition | 7 |
| Spacing and rhythm | 5 |
| Content clarity | 8 |
| Conversion support | 8 |
| Responsive behavior | 8 |
| Accessibility | 8 |
| SEO integration | 5 |
| Performance | 5 |
| Component consistency | 3 |
| Avoidance of generic AI patterns | 3 |
| **Total** | **100** |

Score each category from 0–5, then multiply by `weight / 5`.

## Thresholds

- **Below 70:** Fail
- **70–79:** Conditional pass after high-severity remediation
- **80–89:** Strong
- **90–100:** Excellent, provided no automatic failure exists

## Automatic failures

- Major keyboard barrier or keyboard trap
- Unreadable contrast affecting critical content
- Horizontal overflow on target mobile widths
- Missing H1 on a normal content page
- Missing or duplicated page title
- Fabricated business claim, review, rating, credential, price, address, or availability
- Copied identifiable composition
- Missing primary conversion
- Severe unexplained performance regression
- Critical content hidden behind inaccessible interaction
- Form cannot identify or recover from errors
- Essential page content unavailable without failed client-side JavaScript

## Remediation

Every deduction must identify the element, viewport/state, evidence, exact change, rationale, expected outcome, owner, and verification method. Re-score only after evidence of remediation.
