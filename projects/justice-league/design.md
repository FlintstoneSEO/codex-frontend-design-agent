# Justice League of Greater Lansing Design System

## Direction and continuity

The approved **Lansing in Action / Documentary Community** direction remains the governing art direction. Its dark editorial canvas, warm-white typography, gold action system, Justice League red, documentary photography, ruled layouts, and evidence-led page modes remain intact. Justice Green supplements this system; it does not replace the primary dark, neutral, gold, red, or existing brand roles.

Justice Green should read as a deliberate signal of progress, measurable impact, participation, community action, and positive movement. It should generally account for about **5–10% of visible page color treatment**, creating emphasis rather than dominating a composition.

## Justice Green tokens

| Semantic token | Value | Role |
|---|---:|---|
| `--color-accent` | `#006633` | Justice Green; bounded backgrounds, impact values, active/selected indicators, meaningful borders, and action-oriented calls to action |
| `--color-accent-hover` | `#005229` | Hover and active state for Justice Green controls |
| `--color-accent-soft` | `#E6F2EC` | Green-family accent text, icons, and focus outlines on the site's dark surfaces |

Components must consume these semantic tokens rather than repeat hex values. CloudCannon editors should not select or enter accent colors; the CSS token layer controls presentation without changing content schemas or Source Editable Regions.

## Appropriate use

Use Justice Green selectively for:

- eyebrow labels and small section accents;
- impact statistics and verified measurable-result values;
- icons, badges, subtle borders, and small decorative elements with a related impact/action meaning;
- selected links and active navigation indicators, retaining an underline or other non-color cue;
- hover, active, and focus states where the actual foreground/background combination meets WCAG 2.2 AA;
- interactive-card hover or selected indicators only when the card itself is actionable;
- selected action-oriented calls to action such as **Donate**, **Support Our Work**, **Get Involved**, **Become a Supporter**, and **Take Action**;
- current, positive, community, participation, and impact-related interface states that also include text or another non-color signal.

Section headings retain their established warm-white editorial treatment. The consistent supporting pattern is a green-family eyebrow or short accent, not a fully green heading. Impact records may use a compact Justice Green field behind a key value while the explanatory label remains neutral.

## Inappropriate use

Do not:

- make the entire navigation green;
- turn large page sections green without a strong action or impact reason;
- make every heading green;
- add green borders to every card;
- make every button green, especially informational actions such as **Learn More**, **Read More**, and **View Details**;
- replace the existing dark, neutral, gold, or red palette roles;
- introduce unrelated green shades outside the three semantic tokens;
- use green as decoration without a relationship to progress, impact, participation, or action;
- rely on green alone to communicate current, selected, success, or error states;
- sacrifice WCAG contrast.

## Accessibility behavior

- Warm-white text on Justice Green is 6.42:1; pure white on Justice Green is 7.12:1.
- Justice Green directly on the primary dark canvas is only 2.81:1 and is therefore not used for normal text or meaningful standalone icons there.
- Justice Green Soft on the dark canvas is 17.43:1 and on the raised surface is 15.60:1; it is the approved dark-surface accent foreground and focus color.
- Navigation selection retains `aria-current="page"` plus a visible underline/indicator. Status treatments retain explicit status text. Focus remains visible with an offset outline.

## Preserved systems

- **Hero:** Keep the current homepage background image source, cover positioning, directional overlay, headline treatment, and responsive image behavior unchanged. The homepage has no reusable word-cloud component, so no word-cloud treatment is introduced.
- **Typography and layout:** Retain the civic/editorial type roles, containers, gutters, section spacing, ruled ledgers, and existing responsive breakpoints.
- **Buttons:** Gold remains the default primary/informational action. Justice Green is an opt-in accent for support and participation actions.
- **Cards and records:** Default borders remain neutral. Accent borders or values are limited to meaningful positive, current, or impact states.
- **CloudCannon:** Content fields, collection structures, editable markers, and image controls remain presentation-agnostic. Editors never enter arbitrary accent hex values.
