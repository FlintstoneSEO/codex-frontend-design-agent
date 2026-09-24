# shopify-store-design

## Activation

Use for a new Shopify storefront, a substantial Shopify visual redesign, or a Shopify theme choice where the user needs a distinctive shopping experience and design direction.

For a narrow code fix, content change, or isolated theme section, route directly to `frontend-ui-builder` or the relevant review skill. If project scope is unclear, use `design-discovery`.

## Purpose

Coordinate Shopify-specific research, design planning, and native theme implementation. Build a store that fits its own products and audience, using strong Shopify storefronts as evidence and inspiration while retaining the chosen theme's useful commerce behavior and merchant editing model.

This workflow separates:

- Store brand direction from Shopify theme choice
- Storefront inspiration from imitation
- Visual design decisions from commerce functionality
- The active theme's constraints from its default visual style

Do not assume the current repository uses Shopify's Horizon theme. Do not assume a theme is the design brief.

## Required inputs

- Completed or sufficiently clear business and audience brief
- Product catalog or representative product/variant examples
- Primary purchase journey and any secondary actions
- Available brand assets, product media, and approved copy
- Shopify store/repository and active theme, when existing
- Merchant editing needs, apps, integrations, and theme constraints

Run `design-discovery` when material inputs are missing. Mark unknowns rather than inventing product facts, prices, policies, inventory, reviews, or claims.

## Workflow

### 1. Audit the store or starting point

For an existing repo, inspect its actual platform, theme, branch, templates, section groups, Liquid sections/blocks, snippets, assets, configuration, package scripts, Shopify CLI availability, validation commands, existing theme editor patterns, metafields, apps, and commerce behavior.

For an existing store, inspect the storefront and relevant customer journeys when access is available: home, collection, product detail, search/filter, mobile navigation, cart, and key informational pages. Do not assume code alone proves that a feature works in the live store.

Classify major elements as preserve, improve, restructure, replace, remove, or needs client input. Record evidence and dependencies. In an existing theme, reuse native commerce behavior where it serves the project, but do not treat its current homepage structure or styling as a required design pattern.

For a new store, determine whether the requested starting point is an existing theme, a Shopify Theme Store theme, a custom theme, or unknown. If unknown and it materially affects implementation effort or merchant controls, compare options and record a recommendation before coding. Do not silently replace an agreed starting theme.

### 2. Build the Shopify-specific brief

Establish:

- Product type, assortment, catalog size, options/variants, and purchase complexity
- Primary audience, referral context, and primary conversion
- Discovery needs: navigation, search, filtering, collections, recommendations, guided selection
- Purchase-decision needs: imagery, product details, sizing/compatibility, materials, availability, delivery, returns, proof, and support
- Business model: one-time purchase, bundles, subscription, customization, local pickup, wholesale, or other verified needs
- Brand posture and available imagery, product photography, and video
- Merchant requirements: editing comfort, product management, sections, app blocks, metafields, localization, and ongoing campaign changes
- Existing SEO assets, routes, and integrations that must be preserved
- Constraints from Shopify plan, apps, theme, performance, accessibility, or launch timing

Keep common shopping tasks clear while letting the art direction express the brand.

### 3. Research actual Shopify references

Use `research/industry/shopify-commerce.md` as a starting point, then research references suited to this project. Research must answer a brief-specific question, not just collect attractive screenshots.

Use both:

- **Live storefronts:** inspect current store pages and shopping behavior directly.
- **Shopify Theme Store listings:** study possible theme features, section systems, and design approaches. Treat their claims as seller descriptions, not independent proof of quality or conversion.

Choose at least three useful references for substantial work, with meaningfully different brand or layout approaches. Inspect the homepage, at least one collection/category, at least one product detail page, and mobile navigation. Inspect cart behavior when accessible. If a URL cannot be verified, record that limitation and do not imply that it was inspected.

Create a project reference study table with:

- URL and category
- Audience/product context
- Observed navigation and page composition
- Product-discovery and purchase-decision patterns
- Mobile behavior
- Accessibility or performance risks observed or needing verification
- Transferable principle for this project
- Elements that must not be copied
- Evidence label: source-backed guidance, live observation, inference, or project decision

Prefer Shopify-curated examples for discovering stores across categories, then verify current pages directly. Do not assume a site is currently Shopify-hosted merely because a historic article listed it. State confidence and evidence for platform identification when it matters.

### 4. Generate distinct art directions

Use `art-direction-generator` after the brief and reference study. Propose three directions that are structurally and experientially distinct, not palette swaps.

For each direction, decide how the following fit the store:

- Brand and collection storytelling
- Header/navigation relationship to the hero
- Homepage rhythm and point of entry to shopping
- Collection discovery and product-grid density
- Product detail page hierarchy and decision support
- Product-media treatment
- Cart and CTA treatment
- Mobile shopping flow
- Shopify editor flexibility and likely section needs

A design direction may take inspiration from several sources, but must not reproduce a single store's signature composition, artwork, copy, or interaction sequence. Select a direction with a written rationale and keep theme foundation choice separate from visual-direction choice.

### 5. Map the store and pages

Use `information-architecture` when routes or navigation need planning and `page-content-planner` for each page being designed. Create an implementation-ready page composition map before coding.

At minimum, plan the relevant Shopify routes:

- Homepage
- Collection/category
- Product detail
- Search and no-results state
- Cart and cart-empty state
- About/story or other essential brand pages
- Policy, shipping/returns, size/fit, or support pages as required by the products

For every major section, specify purpose, content semantics, composition, dominant element, hierarchy source, alignment, media, CTA, Shopify data source, theme-editor controls, app-block use if appropriate, and mobile adaptation.

Do not force every section to use the same eyebrow-heading-paragraph-button schema. Use fields that match the content. Include Shopify data bindings for products, collections, variants, inventory, pricing, URLs, metafields, and media instead of hardcoded catalog facts.

### 6. Implement in native Shopify architecture

Use `frontend-ui-builder` only after required planning artifacts exist. Work in the target theme's native architecture: Liquid, JSON templates, sections, blocks, snippets, assets, settings, and metafields as appropriate.

- Preserve established project conventions and valid merchant customizer settings. Do not rename schema IDs or restructure unrelated theme code casually.
- Use native Shopify product forms, variant selection, prices, availability, collection data, search, filtering, cart, and recommendation behavior where available and appropriate.
- Make sections merchant-editable with meaningful labels, realistic defaults, and controls that support the approved art direction. Support app blocks where their use makes sense and the theme architecture permits.
- Keep section composition custom to the project. Do not inherit the starter theme's default visual structure just because native functionality is being reused.
- Do not add libraries or third-party storefront code without a project reason. Consider payload, image loading, app scripts, and mobile performance.
- Respect project-specific `AGENTS.md` and existing theme constraints. If a local rule conflicts with the approved design requirement, document the conflict and resolve it in the project plan before implementation.

### 7. Verify the actual Shopify experience

Inspect repository-defined scripts first. Run the available Shopify theme validation, typically `shopify theme check`, and validate edited JSON, Liquid schema, and assets. Review the final diff and confirm unrelated theme files and settings were not changed.

Preview in a Shopify development or draft theme when access is available. Review homepage, collection, product, search, and cart states at mobile and desktop sizes. Test real product/variant selection, add-to-cart, quantity changes, cart updates, navigation, filtering, and theme editor controls relevant to the changes.

Run the general review pipeline from `site-redesign` or `website-qa` as scope requires. Do not claim production readiness without a real Shopify theme preview and functional commerce checks. If preview access is unavailable, state the unverified states explicitly.

## Output

Maintain an inspectable Shopify design record:

- Shopify theme/store audit and preserve/improve/restructure/replace/remove matrix
- Shopify-specific brief and missing-input register
- Reference study with live URLs and evidence labels
- Three art directions and selection rationale
- Theme foundation recommendation or confirmation
- Information architecture and page composition maps
- Shopify section/data/editor plan
- Implemented Liquid/theme changes and validation results
- Theme preview screenshots and commerce test results, or explicit access limitations
- Updated design decision log

## References

- `AGENTS.md`
- `research/industry/shopify-commerce.md`
- `research/industry/ecommerce-fashion.md` when fashion is relevant
- `research/methodology.md`
- `skills/design-discovery/SKILL.md`
- `skills/industry-design-research/SKILL.md`
- `skills/art-direction-generator/SKILL.md`
- `skills/information-architecture/SKILL.md`
- `skills/page-content-planner/SKILL.md`
- `skills/frontend-ui-builder/SKILL.md`
- `skills/site-redesign/SKILL.md` for substantial redesign of an existing store
- `skills/responsive-design-review/SKILL.md`
- `skills/accessibility-audit/SKILL.md`
- `skills/performance-review/SKILL.md`
- `skills/website-qa/SKILL.md`

## Failure conditions

- Design choices are based on Horizon or another starter theme by default rather than the brief.
- References were not inspected or principles cannot be separated from copied visuals.
- Three directions differ only by color, typography, or surface treatment.
- Product discovery or critical purchase information is obscured by art direction.
- A Shopify capability is simulated while an existing native feature is available and appropriate.
- The merchant cannot reasonably edit the content or sections that the brief says they need to manage.
- Testing is described as complete without a Shopify preview or functional evidence.

## Quality checks

- [ ] Active theme and implementation constraints were inspected
- [ ] Store brand direction and theme foundation were decided separately
- [ ] At least three relevant live Shopify storefront references were inspected for substantial work
- [ ] References include transferable principles and clear do-not-copy notes
- [ ] Three structural art directions were generated
- [ ] Collection and product pages received design attention, not only the homepage
- [ ] Mobile shopping and navigation behavior are deliberately planned
- [ ] Shopify-native commerce and merchant-editing behavior are preserved or implemented
- [ ] Sections and schemas represent content semantics rather than one generic layout
- [ ] Accessibility, performance, SEO, and editor usability were planned
- [ ] Shopify validation and theme preview results are accurately reported

## Dependencies

- `design-discovery`
- `industry-design-research`
- `art-direction-generator`
- `frontend-ui-builder`
- `page-content-planner`
- `site-redesign` when applicable
