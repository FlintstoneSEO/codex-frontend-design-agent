# Justice League website editor guide

Use **Pages** for routine updates to approved static page copy. Each page opens in a rendered preview; yellow outlines show the content that can be changed safely.

## Quick links

- [Open Pages](cloudcannon:collections/pages)

## Editing a page

1. Open **Pages** and choose a page by its human-readable name.
2. In the Visual Editor, click a yellow-outlined heading, paragraph, list, or link.
3. Edit the content in place. Keep links descriptive and do not remove required notices such as `[NEEDS CLIENT INPUT: ...]`.
4. Open the **Data** view only when you need to update the page's SEO Title or Meta Description.
5. Save, wait for the build, and review the preview before publishing.

## What remains automatic

The following content is intentionally not editable here:

- Wix Events dates, locations, status, ticketing, and RSVP links
- Scholarship cycles, eligibility, documents, recipients, essays, and cohort images from Wix CMS
- Donor names and years from Little Green Light
- The verified leadership and supporter rosters and their image associations
- Forms, donations, uploads, newsletter behavior, eLink, and video integration code
- Navigation logic, redirects, sitemap generation, structured data, scripts, and environment variables

Update those records in their authoritative system or ask a developer to change the verified local dataset. A later CloudCannon build will retrieve supported external updates.

## Images

Approved uploads belong in `public/images`. Existing responsive Wix images and verified roster portraits remain developer-controlled because their source, crop, and record association must stay synchronized.

## Important safety notes

- Do not enter donor, applicant, contact, or form-submission information into repository files.
- Do not remove prototype, legal, source, or verification notices without client approval.
- Page creation is disabled because each route has a purpose-built Astro template.
