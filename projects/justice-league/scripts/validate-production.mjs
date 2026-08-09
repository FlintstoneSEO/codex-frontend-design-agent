import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const routes = ["", "about", "about/history", "about/leadership", "reparations", "scholarship", "impact", "supporters", "donors", "events", "ad-booklet", "news", "media", "join-the-work", "support-reparations", "contact", "privacy"];
const forbiddenPublicCopy = [/prototype record/i, /non-production prototype/i, /non-submitting prototype/i, /preview the future/i, /check the current wix/i, /review the current wix/i, /wix has the complete/i, /\[placeholder/i];
const checks = [];
const add = (label, pass) => checks.push({ label, pass });

for (const route of routes) {
  const file = path.join(dist, route, "index.html");
  add(`route /${route}/ exists`, fs.existsSync(file));
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  add(`/${route}/ has one H1`, (html.match(/<h1\b/gi) ?? []).length === 1);
  add(`/${route}/ is indexable`, html.includes('content="index, follow"'));
  add(`/${route}/ has canonical`, html.includes('rel="canonical"'));
  add(`/${route}/ has description`, html.includes('name="description"'));
  add(`/${route}/ has Open Graph title`, html.includes('property="og:title"'));
  add(`/${route}/ images have alt text`, (html.match(/<img\b[^>]*>/gi) ?? []).every((image) => /\balt="[^"]*"/i.test(image)));
  add(`/${route}/ has no staging copy`, forbiddenPublicCopy.every((pattern) => !pattern.test(html)));
}

const donate = fs.readFileSync(path.join(dist, "support-reparations", "index.html"), "utf8");
const join = fs.readFileSync(path.join(dist, "join-the-work", "index.html"), "utf8");
const media = fs.readFileSync(path.join(dist, "media", "index.html"), "utf8");
const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
add("approved PayPal donation link", donate.includes("paypal.com/donate/?hosted_button_id=5V2S9XJLU675A"));
add("Donate call to action", /Donate with PayPal/.test(donate));
add("join page has direct contact destination", /mailto:info@justiceleagueglm\.org/.test(join));
add("media page includes videos", (media.match(/data-video-id/g) ?? []).length >= 6);
add("media page includes documentary photos", (media.match(/static\.wixstatic\.com/g) ?? []).length >= 2);
add("sitemap includes media", sitemap.includes("/media/"));

const failures = checks.filter((check) => !check.pass);
for (const check of checks) console.log(`${check.pass ? "PASS" : "FAIL"} ${check.label}`);
if (failures.length) process.exitCode = 1;
