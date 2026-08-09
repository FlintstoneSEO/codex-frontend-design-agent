# Justice League Prototype Brand Tokens

## Status

These tokens are **provisional and approved for the non-production homepage prototype only**. They are derived from the confirmed black, red, green, gold/yellow, and white foundation. Production values must be checked against original registered logo artwork and approved by the organization before launch.

## Color roles

| Token | Value | Role |
|---|---:|---|
| `--color-canvas` | `#080808` | Primary black canvas |
| `--color-surface` | `#171717` | Raised editorial surface |
| `--color-surface-strong` | `#232323` | Interactive/dense surface |
| `--color-text` | `#F7F3E8` | Primary warm-white text |
| `--color-text-muted` | `#B9B4AA` | Supporting text and metadata |
| `--color-border` | `#777166` | Dividers and control boundaries |
| `--color-action` | `#F3C84B` | Gold primary action and focus |
| `--color-action-hover` | `#FFD86A` | Gold hover/active emphasis |
| `--color-red` | `#D7544D` | Justice League red accent and error emphasis |
| `--color-accent` | `#006633` | Justice Green for bounded impact, participation, and action emphasis |
| `--color-accent-hover` | `#005229` | Hover/active state for Justice Green controls |
| `--color-accent-soft` | `#E6F2EC` | Accessible green-family text and focus treatment on dark surfaces |

Red and green never communicate state without accompanying text. Gold remains the default primary action color; Justice Green is reserved for selected participation and support actions.

## Contrast evidence

Ratios use WCAG relative luminance calculations.

| Foreground | Background | Ratio | Approved use |
|---|---|---:|---|
| `#F7F3E8` | `#080808` | 18.06:1 | All text sizes |
| `#B9B4AA` | `#080808` | 9.70:1 | Supporting text |
| `#F3C84B` | `#080808` | 12.56:1 | Links, headings, focus indicators |
| `#080808` | `#F3C84B` | 12.56:1 | Primary button text |
| `#D7544D` | `#080808` | 5.02:1 | Normal-size accent/error text with textual state |
| `#F7F3E8` | `#006633` | 6.42:1 | Button and marker text on Justice Green |
| `#FFFFFF` | `#006633` | 7.12:1 | Text on Justice Green where pure white is used |
| `#E6F2EC` | `#080808` | 17.43:1 | Accent text and focus indicators on the primary canvas |
| `#E6F2EC` | `#171717` | 15.60:1 | Accent text on raised surfaces |
| `#F7F3E8` | `#171717` | 16.17:1 | Surface text |
| `#B9B4AA` | `#171717` | 8.68:1 | Surface supporting text |

All implemented hover, focus, disabled, validation, and disclosure states must be checked in their actual combinations. The prototype may not infer production logo-color accuracy from these accessibility-safe approximations.

`#006633` is not approved as text or a meaningful icon directly on the dark canvas (2.81:1). Use `--color-accent-soft` on dark surfaces, or use the primary accent as a background with light text.

## Typography

- **Civic/display:** system sans-serif stack, uppercase only for short display and navigation roles
- **Editorial:** Georgia-compatible serif stack for evidence and section headings
- **Body/UI:** system sans-serif stack
- **Families loaded:** zero external font files in the prototype
- **Body:** `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)` with 1.6 line height
- **H1:** `clamp(2.75rem, 8vw, 7.5rem)` with content-aware maximum measure
- **H2:** `clamp(2rem, 4.5vw, 4.75rem)`

## Spacing and layout

- Fluid page gutter: `clamp(1rem, 4vw, 4rem)`
- Reading measure: `68ch`
- Standard container: `80rem`
- Wide container: `96rem`
- Section spacing: `clamp(4rem, 9vw, 9rem)`
- Dividers and ruled lists provide grouping; rounded containers are reserved for controls, not used as a universal section treatment.

## Motion

- Short state transitions only: 120–180ms
- Transform/opacity/color only
- No scroll-triggered entrance effects, parallax, autoplay, or hidden-until-JavaScript content
- `prefers-reduced-motion: reduce` disables nonessential transition and smooth-scroll behavior
