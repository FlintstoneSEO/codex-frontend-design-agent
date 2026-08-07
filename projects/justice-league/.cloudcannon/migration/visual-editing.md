# CloudCannon visual-editing census

Observed: 2026-08-07

This census is the implementation gate for editable attributes. `source` means a bounded region in the page's own `.astro` file. `sidebar-only` means the content remains outside the editor because it is computed, external, legally sensitive, or source-verified data whose mutation would bypass an established integration.

| Page | Section | Treatment | Binding plan | Data completeness / justification |
| --- | --- | --- | --- | --- |
| All editorial pages | Page intro | source | Named HTML slots in `PageIntro`; page-local `data-path` and unique `data-key` | Kicker, H1, lede, and marker editable; mode and prototype marker remain developer-controlled |
| Pages with CTA | Action band | source | Named HTML/link slots in `ActionBand`; page-local regions | Visible copy, labels, and link URLs editable; component classes/conditionals remain controlled |
| All pages | Breadcrumbs | sidebar-only | â€” | Route hierarchy and navigation logic are developer-controlled |
| All pages | Header/footer | sidebar-only | â€” | Navigation implementation, verified organization facts, and legal/trust links need a separately approved global-data migration |
| Home | Hero | source | `/src/pages/index.astro`, `home-hero` | Text and CTA links editable; responsive Wix image transform stays developer-controlled to prevent mismatched `srcset` |
| Home | Current priority/events | sidebar-only | â€” | Wix Events build-time result and guarded states |
| Home | Mission, founder, methods, participation, trust | source | Page-local unique keys | Static framing copy and links editable; imported verified mission and Wix media values remain controlled |
| Home | Video/news/newsletter | sidebar-only | â€” | Third-party identifiers, consent-gated embeds, and form shell logic |
| About | Mission/vision/work/trust | combined | Source regions around static HTML; imported verified facts excluded | Static explanatory copy editable without exposing verified data imports |
| History | Context/evidence | source | Page-local unique keys | Timeline array, citations, dates, and image associations remain source-verified and sidebar-only |
| Leadership | Intro | source | Page-local intro keys | Governance note, roster/groups/images remain typed, verified, and sidebar-only |
| Reparations | Definition/local/faith/warning | source | Page-local unique keys | Pillar array remains typed and source-verified |
| Scholarship | Intro/static guidance | source | Page-local keys outside dynamic branches | Cycle, recipients, cohorts, eligibility, dates, documents, and FAQs are Wix-backed and sidebar-only |
| Impact | Reporting/evidence/navigation/warnings | source | Page-local unique keys | No fabricated metrics; labelled unresolved claims stay visible |
| Events | Intro/campaign/meetings/standard | source | Keys outside Wix result map | Wix event result, state, dates, locations, and ticket URLs remain sidebar-only |
| News | Intro | source | Page-local intro keys | Editorial integrations, eLink, and Wix URLs remain controlled |
| Join | Intro/form-shell explanation | source | Keys outside typed pathway map/form | Pathway data and form behavior remain controlled |
| Support Reparations | Intro | source | Page-local intro keys | Designations, Wix donation/support-card URLs, verified facts, and payment logic remain controlled |
| Contact | Intro and form-shell explanation | source | Page-local keys outside form implementation | Verified email/address, Wix route, routing list, and form logic remain controlled |
| Ad Booklet | Intro/orientation/process/submission/gate/action | source | Page-local unique keys | Placement prices/deadline and verified Wix workflow remain controlled |
| Supporters | Intro/roster explanation/distinction/action | source | Keys around roster | Names and logo pairings remain typed and verified |
| Donors | Intro | source | Page-local intro keys | LGL response, privacy filtering, names, year groups, source status, distinctions, and fallbacks remain controlled |

## Completeness rules

- Every Source Editable Region targets an existing `.astro` file with a page-unique `data-key`.
- Regions contain static HTML only; no region wraps imports, scripts, API expressions, array maps, or conditional rendering.
- Dynamic lists are not given array controls because their source of truth is external or source-verified typed data.
- Page intros and action bands retain semantic HTML and component styling through named slots.
- Images driven by verified typed records remain read-only. Editors can upload images to `public/images`, but no field is exposed until its responsive/semantic rendering path is safe.
