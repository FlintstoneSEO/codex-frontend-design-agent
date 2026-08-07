# CloudCannon content migration decision

Observed: 2026-08-06

No content was migrated into CloudCannon collections. This is deliberate: Wix remains the approved source for public events, media, forms, donations, and maintained organization records. Duplicating those records in CloudCannon would introduce two competing editorial sources.

Homepage presentation copy remains version-controlled in Astro. The approved mission, approved Wix media references, video URL, and guarded eLink publication are stored in `src/data/homepage.ts`. Upcoming event records are retrieved at build time through `src/lib/wix.ts`.

If the organization later assigns presentation-copy ownership to CloudCannon, repeat the content audit and create one multi-schema page collection rather than separate collections for every route.
