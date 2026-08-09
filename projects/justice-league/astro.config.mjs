import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.justiceleagueglm.org",
  output: "static",
  trailingSlash: "always",
  redirects: {
    "/vision-justice-league-lansing": "/about/",
    "/history": "/about/history/",
    "/timeline": "/about/history/#timeline-heading",
    "/ourteam": "/about/leadership/",
    "/faithbased": "/reparations/#faith-heading",
    "/faq": "/scholarship/#frequently-asked-questions",
    "/gallery": "/media/",
    "/apology-2023": "/about/history/#apology-2023",
    "/e-news-briefs": "/news/#enews-heading",
    "/recent-news": "/news/",
    "/upcomingevents": "/events/",
    "/commiteemeetings": "/events/#meeting-schedule",
    "/contact-us": "/contact/",
    "/donate": "/support-reparations/"
  },
  build: {
    format: "directory"
  }
});
