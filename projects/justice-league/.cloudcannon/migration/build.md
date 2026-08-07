# CloudCannon build verification

Observed: 2026-08-06

## Local pipeline

- `npm run check`: passed with zero errors, warnings, or hints.
- `npm run build`: passed; 15 static routes generated in `dist`.
- `npm run test`: passed 188 prototype requirements.
- `npx @cloudcannon/cli validate`: passed both CloudCannon configuration files.

The network-enabled build retrieved a public upcoming record from Wix Events. A sandboxed build with outbound access denied also completed and rendered the labelled error state, confirming the failure boundary.

## Runtime behavior reviewed

- Wix media remains on the Wix CDN with responsive transforms.
- The YouTube iframe does not exist until the visitor activates the video control.
- The eLink script and iframe do not exist until the visitor activates Latest News.
- No framework hydration bundle is shipped for the homepage.
- The production Wix site and DNS were not changed.

## Preview deployment

Repository configuration is ready for CloudCannon. Creating the provider-generated preview URL still requires an authenticated CloudCannon site connected to the repository; no site ID or account session is present locally.
