# CloudCannon configuration

Observed: 2026-08-06

## Configuration outcome

CloudCannon is configured as the static Astro build and preview host. Wix remains the canonical content and business-data system, so no CloudCannon content collections or editable schemas are introduced in this pass.

- SSG: Astro
- Install command: `npm ci`
- Build command: `npm run build`
- Output path: `dist`
- Node version source: `.nvmrc`
- Static path: `public`
- Upload path reserved for approved assets: `public/images`
- Time zone: `America/New_York`

The public Wix Headless client and site identifiers are listed as build environment variables in `.cloudcannon/initial-site-settings.json`. No secret API key is stored. The adapter makes read-only public requests and returns an honest error state if the build cannot reach Wix.

## Validation

`npx @cloudcannon/cli validate` passed for both `cloudcannon.config.yml` and `.cloudcannon/initial-site-settings.json` on 2026-08-06.

## Deployment boundary

The repository does not contain a CloudCannon site identifier or account authentication. A provider-generated preview URL must be created by connecting the Git repository to a CloudCannon site. DNS and the current Wix production domain are explicitly outside this configuration step.
