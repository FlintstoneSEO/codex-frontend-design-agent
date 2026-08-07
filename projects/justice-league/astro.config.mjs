import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.justiceleagueglm.org",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory"
  }
});
