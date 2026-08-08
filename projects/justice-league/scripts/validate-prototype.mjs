import fs from "node:fs";
import path from "node:path";
import { parseDonorCsv } from "../src/lib/donor-csv.ts";
import { applyDonorPublicationPolicy, loadDonorGroups, PUBLIC_DONOR_MIN_YEAR } from "../src/lib/donors.ts";
import { supporters } from "../src/data/supporters.ts";
import { leadershipGroups, leadershipHero, leadershipMembers } from "../src/data/leadership.ts";
import { routeReconciliation } from "../src/data/route-reconciliation.ts";

const projectRoot = process.cwd();
const distRoot = path.join(projectRoot, "dist");
const indexPath = path.join(distRoot, "index.html");
const cssSource = fs.readFileSync(path.join(projectRoot, "src/styles/global.css"), "utf8");

if (!fs.existsSync(indexPath)) {
  throw new Error("dist/index.html is missing. Run npm run build before npm test.");
}

const html = fs.readFileSync(indexPath, "utf8");
const checks = [
  ["exactly one H1", (html.match(/<h1\b/g) ?? []).length === 1],
  ["title", html.includes("<title>Justice League of Greater Lansing | Reparations in Action</title>")],
  ["meta description", html.includes('name="description"')],
  ["canonical", html.includes('rel="canonical"')],
  ["Organization schema", html.includes('"@type":"Organization"')],
  ["WebSite schema", html.includes('"@type":"WebSite"')],
  ["WebPage schema", html.includes('"@type":"WebPage"')],
  ["skip link", html.includes('href="#main-content"')],
  ["homepage production labelling removed", !html.includes("Non-production prototype")],
  ["approved mission", html.includes("exists to repair the breach caused by the historical damage of slavery")],
  ["full-width documentary hero", html.includes('class="hero"') && html.includes("--hero-image") && html.includes("static.wixstatic.com")],
  ["video loads by consent", html.includes("data-video-play") && !/<video\b|<iframe\b/i.test(html)],
  ["upcoming events module", html.includes("Upcoming events")],
  ["guarded eLink treatment", html.includes("data-elink-load") && html.includes("https://elink.io/p/9da922f")],
  ["reduced motion", cssSource.includes("prefers-reduced-motion: reduce")],
  ["320px reflow-safe body", cssSource.includes("min-width: 0")],
  ["hero contrast overlay", /\.hero\s*\{[\s\S]*?linear-gradient\(/i.test(cssSource)]
];

const routeNames = [
  "",
  "about",
  "about/history",
  "about/leadership",
  "reparations",
  "scholarship",
  "impact",
  "supporters",
  "donors",
  "events",
  "events/demo-priority",
  "ad-booklet",
  "news",
  "news/demo-story",
  "join-the-work",
  "support-reparations",
  "contact",
  "privacy"
];

const routeDocuments = routeNames.map((route) => {
  const file = route ? path.join(distRoot, route, "index.html") : indexPath;
  checks.push([`route /${route}/`, fs.existsSync(file)]);
  return { route, file, html: fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "" };
});

const titles = new Set();
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
for (const document of routeDocuments) {
  const routeLabel = document.route ? `/${document.route}/` : "/";
  const h1Count = (document.html.match(/<h1\b/g) ?? []).length;
  const title = document.html.match(/<title>(.*?)<\/title>/)?.[1];
  checks.push([`${routeLabel} exactly one H1`, h1Count === 1]);
  const isHomepage = document.route === "";
  checks.push([`${routeLabel} ${isHomepage ? "indexable production page" : "noindex prototype"}`, isHomepage ? document.html.includes('content="index, follow"') : document.html.includes('content="noindex, nofollow"')]);
  checks.push([`${routeLabel} canonical`, document.html.includes('rel="canonical"')]);
  checks.push([`${routeLabel} meta description`, document.html.includes('name="description"')]);
  checks.push([`${routeLabel} unique title`, Boolean(title) && !titles.has(title)]);
  if (title) titles.add(title);
  checks.push([`${routeLabel} production label removed`, !document.html.includes("Non-production prototype")]);
  checks.push([`${routeLabel} no submitting form action`, !/<form[^>]+action=/i.test(document.html)]);
  checks.push([`${routeLabel} focusable main landmark`, /<main\b[^>]*id="main-content"[^>]*tabindex="-1"/i.test(document.html)]);
  checks.push([`${routeLabel} Open Graph title`, document.html.includes('property="og:title"')]);
  checks.push([`${routeLabel} Open Graph description`, document.html.includes('property="og:description"')]);
  checks.push([`${routeLabel} Open Graph URL`, document.html.includes('property="og:url"')]);

  const headingLevels = [...document.html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  const headingOrderIsLogical = headingLevels.every((level, index) => index === 0 || level <= headingLevels[index - 1] + 1);
  checks.push([`${routeLabel} logical heading order`, headingOrderIsLogical]);

  const images = document.html.match(/<img\b[^>]*>/gi) ?? [];
  checks.push([`${routeLabel} every image has alt text`, images.every((image) => /\balt="[^"]*"/i.test(image))]);

  const interactiveElements = document.html.match(/<(?:a|button)\b[^>]*>[\s\S]*?<\/(?:a|button)>/gi) ?? [];
  checks.push([`${routeLabel} links and buttons have names`, interactiveElements.every((element) => {
    if (/\baria-label="[^"]+"/i.test(element)) return true;
    return element.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().length > 0;
  })]);

  const formControls = document.html.match(/<(?:input|textarea|select)\b[^>]*>/gi) ?? [];
  checks.push([`${routeLabel} form controls have labels`, formControls.every((control) => {
    if (/\btype="hidden"/i.test(control) || /\baria-label="[^"]+"/i.test(control) || /\baria-labelledby="[^"]+"/i.test(control)) return true;
    const id = control.match(/\bid="([^"]+)"/i)?.[1];
    return Boolean(id) && new RegExp(`<label\\b[^>]*for="${escapeRegExp(id)}"`, "i").test(document.html);
  })]);

  for (const match of document.html.matchAll(/href="(https?:\/\/[^\"]+)"/g)) {
    const url = new URL(match[1]);
    checks.push([`${routeLabel} secure external URL ${url.hostname}`, url.protocol === "https:"]);
  }

  const newTabLinks = document.html.match(/<a\b[^>]*target="_blank"[^>]*>/gi) ?? [];
  checks.push([`${routeLabel} new-tab links protect referrer context`, newTabLinks.every((link) => /\brel="[^"]*(?:noreferrer|noopener)[^"]*"/i.test(link))]);

  for (const match of document.html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(match[1]);
      checks.push([`${routeLabel} valid JSON-LD`, true]);
    } catch {
      checks.push([`${routeLabel} valid JSON-LD`, false]);
    }
  }
}

for (const route of ["events/demo-priority", "news/demo-story"]) {
  const document = routeDocuments.find((item) => item.route === route);
  checks.push([`/${route}/ no Event or Article schema`, !document?.html.includes('"@type":"Event"') && !document?.html.includes('"@type":"Article"')]);
  checks.push([`/${route}/ visible demonstration label`, Boolean(document?.html.match(/Demonstration fixture|Demonstration story/))]);
}

const allHtml = routeDocuments.map((document) => document.html).join("\n");

for (const document of routeDocuments) {
  const routeLabel = document.route ? `/${document.route}/` : "/";
  const checkedPaths = new Set();
  for (const match of document.html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1];
    if (href.startsWith("//")) continue;
    const url = new URL(href, "https://www.justiceleagueglm.org");
    const pathname = decodeURIComponent(url.pathname);
    if (/\.[a-z0-9]+$/i.test(pathname)) continue;
    if (checkedPaths.has(pathname)) continue;
    checkedPaths.add(pathname);
    const target = pathname === "/"
      ? indexPath
      : path.join(distRoot, pathname.replace(/^\/|\/$/g, ""), "index.html");
    checks.push([`${routeLabel} internal link resolves ${pathname}`, fs.existsSync(target)]);
  }
}

for (const prohibited of [
  "total scholarship dollars distributed:",
  "endowment balance:",
  "active members:",
  "apply now for the 2026 scholarship",
  "tax-deductible"
]) {
  checks.push([`no prohibited unsupported claim: ${prohibited}`, !allHtml.toLowerCase().includes(prohibited)]);
}

checks.push(["join form visibly non-submitting", routeDocuments.find((item) => item.route === "join-the-work")?.html.includes("No information entered here is transmitted or stored")]);
checks.push(["contact form visibly non-submitting", routeDocuments.find((item) => item.route === "contact")?.html.includes("No information entered here is transmitted or stored")]);
checks.push(["support page has no payment fields", !routeDocuments.find((item) => item.route === "support-reparations")?.html.match(/type="(?:number|radio)"|name="amount"/i)]);
checks.push(["support page uses verified Wix donation handoff", routeDocuments.find((item) => item.route === "support-reparations")?.html.includes("https://www.justiceleagueglm.org/donate")]);
checks.push(["contact page publishes verified email and mailing address", routeDocuments.find((item) => item.route === "contact")?.html.includes("info@justiceleagueglm.org") && routeDocuments.find((item) => item.route === "contact")?.html.includes("P.O. Box 12105")]);
checks.push(["about page uses approved mission and current three pillars", routeDocuments.find((item) => item.route === "about")?.html.includes("exists to repair the breach") && routeDocuments.find((item) => item.route === "about")?.html.includes("Business entrepreneurship")]);
const leadershipHtml = routeDocuments.find((item) => item.route === "about/leadership")?.html ?? "";
checks.push(["leadership page includes current overlapping roles", leadershipHtml.includes("Dr. Nakia Parker") && leadershipHtml.includes("Board of Directors / Advisory Council")]);
checks.push(["site uses the production events route", allHtml.includes('href="/events/"')]);
checks.push(["obsolete Wix event path removed", !allHtml.includes("https://www.justiceleagueglm.org/upcoming-events")]);
checks.push(["dead City Pulse URL removed", !allHtml.includes("lansingcitypulse.com/stories/the-art-of-repair,125610")]);
checks.push(["Willye Bryan profile uses verified live source", allHtml.includes("lakemichiganpresbytery.org/2025/02/28/celebrating-elder-willye-bryans-recognition-for-racial-justice")]);
checks.push(["past scholarship ceremony not advertised as upcoming", !routeDocuments.find((item) => item.route === "events")?.html.includes("2026 Scholarship Acknowledgment Ceremony")]);
checks.push(["impact page keeps supporter and donor destinations separate", routeDocuments.find((item) => item.route === "impact")?.html.includes('href="/supporters/"') && routeDocuments.find((item) => item.route === "impact")?.html.includes('href="/donors/"') && !routeDocuments.find((item) => item.route === "impact")?.html.includes("StableCommunities Foundation")]);

const validDonorCsv = [
  '"Id","Addressee","2026 - FY","2025 - FY","2022 - FY","Groups"',
  '"1","Beta, Family","25.00","0.0","0.0","Private group"',
  '"2","Alpha Family","10.00","5.00","8.00",""',
  '"3","","12.00","0.0","0.0",""',
  '',
  '"4","Alpha Family","2.00","0.0","0.0",""'
].join("\r\n");
const parsedFixture = parseDonorCsv(validDonorCsv);
checks.push(["donor parser groups positive fiscal-year rows", parsedFixture[0]?.year === 2026 && parsedFixture[0]?.donors.length === 2 && parsedFixture[1]?.year === 2025 && parsedFixture[1]?.donors.length === 1]);
checks.push(["donor parser ignores empty rows and blank addressees", !parsedFixture.some((group) => group.donors.some((name) => name === ""))]);
checks.push(["donor parser deduplicates and alphabetizes within a year", parsedFixture[0]?.donors.join("|") === "Alpha Family|Beta, Family"]);
checks.push(["donor parser sorts years descending", parsedFixture.every((group, index) => index === 0 || parsedFixture[index - 1].year > group.year)]);
checks.push(["donor parser retains pre-cutoff source records", parsedFixture.some((group) => group.year === 2022 && group.donors.includes("Alpha Family"))]);
const publishedFixture = applyDonorPublicationPolicy(parsedFixture);
checks.push(["donor publication policy keeps 2023 and later", PUBLIC_DONOR_MIN_YEAR === 2023 && publishedFixture.every((group) => group.year >= 2023)]);
checks.push(["donor publication policy suppresses 2022 after parsing", !publishedFixture.some((group) => group.year === 2022)]);

let malformedCsvRejected = false;
try {
  parseDonorCsv('"Id","Addressee","2026 - FY"\r\n"1","Broken","100');
} catch {
  malformedCsvRejected = true;
}
checks.push(["malformed donor CSV fails safely", malformedCsvRejected]);

const fallbackFixture = { observedAt: "2026-08-07", groups: [{ year: 2026, donors: ["Fallback Donor"] }, { year: 2022, donors: ["Retained Historical Donor"] }] };
const failedFetchResult = await loadDonorGroups({
  fetchImpl: async () => { throw new Error("fixture network failure"); },
  fallback: fallbackFixture
});
checks.push(["donor fetch failure uses sanitized fallback", failedFetchResult.state === "fallback" && failedFetchResult.groups[0]?.donors[0] === "Fallback Donor"]);
checks.push(["donor fallback records remain intact outside public result", fallbackFixture.groups.some((group) => group.year === 2022) && !failedFetchResult.groups.some((group) => group.year === 2022)]);
const malformedFetchResult = await loadDonorGroups({
  fetchImpl: async () => new Response('"Id","Addressee","2026 - FY"\r\n"1","Broken","100', { status: 200 }),
  fallback: fallbackFixture
});
checks.push(["malformed live donor data uses sanitized fallback", malformedFetchResult.state === "fallback"]);

const donorHtml = routeDocuments.find((item) => item.route === "donors")?.html ?? "";
const donorFallback = JSON.parse(fs.readFileSync(path.join(projectRoot, "src/data/donors-fallback.json"), "utf8"));
const publishableFallbackGroups = donorFallback.groups.filter((group) => group.year >= PUBLIC_DONOR_MIN_YEAR);
const donorYearRecordCount = publishableFallbackGroups.reduce((total, group) => total + group.donors.length, 0);
checks.push(["donor page renders every publishable sanitized fallback year-record", (donorHtml.match(/class="donor-name"/g) ?? []).length === donorYearRecordCount]);
checks.push(["donor page renders current and prior public years", publishableFallbackGroups.every((group) => donorHtml.includes(`id="donor-year-${group.year}"`))]);
checks.push(["donor page keeps 2023 public", donorHtml.includes('id="donor-year-2023"')]);
checks.push(["donor page suppresses 2022 and earlier", !donorHtml.includes('id="donor-year-2022"') && !donorHtml.includes('id="donor-year-2021"')]);
checks.push(["donor years remain newest-first", [...donorHtml.matchAll(/id="donor-year-(\d{4})"/g)].map((match) => Number(match[1])).every((year, index, years) => index === 0 || years[index - 1] > year)]);
checks.push(["donor page renders representative source names", donorHtml.includes("Amber Paxton") && donorHtml.includes("Willye Bryan") && donorHtml.includes("All Saints Episcopal Church")]);
checks.push(["donor page excludes private LGL fields, values, and raw report link", !donorHtml.includes(">Id<") && !donorHtml.includes(">Groups<") && !donorHtml.includes("1019.44") && !donorHtml.includes("947882") && !donorHtml.includes("littlegreenlight.com/rptlink")]);
checks.push(["donor content is available without a client data fetch", donorHtml.includes("class=\"donor-name\"") && !donorHtml.includes("fetch(")]);
checks.push(["donor page uses dedicated SEO metadata", donorHtml.includes("<title>Justice League GLM Donors | Reparations Payees &amp; Administration Fund Supporters</title>")]);

const supportersHtml = routeDocuments.find((item) => item.route === "supporters")?.html ?? "";
checks.push(["supporter page renders the complete current roster", supporters.length === 18 && supporters.every((supporter) => supportersHtml.includes(`>${supporter.name}</h3>`))]);
checks.push(["supporter names and logos remain paired", supporters.every((supporter) => supportersHtml.includes(`src="${supporter.logo}" alt="${supporter.alt}"`))]);
checks.push(["supporter logo assets exist locally", supporters.every((supporter) => fs.existsSync(path.join(projectRoot, "public", supporter.logo.replace(/^\//, ""))))]);
checks.push(["supporter logo alt text is meaningful", supporters.every((supporter) => supporter.alt === `${supporter.name} logo`)]);
checks.push(["supporter page uses dedicated SEO metadata", supportersHtml.includes("<title>Repairers of the Breach | Justice League GLM Supporters</title>")]);
checks.push(["supporter and donor concepts are cross-linked but not combined", supportersHtml.includes('href="/donors/"') && donorHtml.includes('href="/supporters/"') && !supportersHtml.includes("donor-year-")]);
checks.push(["acknowledgment layouts include responsive one-column rules", /\.donor-year ul,\s*\.supporter-roster > ul\s*\{\s*grid-template-columns: 1fr;/m.test(cssSource)]);

checks.push(["leadership exact group sizes render", leadershipGroups.map((group) => group.members.length).join("|") === "4|5|7"]);
checks.push(["leadership names, roles, and portraits remain paired", leadershipMembers.every((person) => leadershipHtml.includes(`src="${person.image}"`) && leadershipHtml.includes(`alt="${person.name}"`) && leadershipHtml.includes(`>${person.role}</p>`))]);
checks.push(["leadership portrait assets resolve", leadershipMembers.every((person) => fs.existsSync(path.join(projectRoot, "public", person.image.replace(/^\//, "")))) && fs.existsSync(path.join(projectRoot, "public", leadershipHero.image.replace(/^\//, "")))]);
checks.push(["leadership has no placeholder role text", !leadershipHtml.includes("Role details not supplied")]);
checks.push(["leadership images protect aspect ratio", leadershipHtml.includes("width=") && leadershipHtml.includes("height=") && cssSource.includes("object-fit: cover")]);
checks.push(["leadership layout has responsive one-column treatment", cssSource.includes("@media (max-width: 25rem)") && cssSource.includes(".leadership-grid")]);

checks.push(["every reconciled Wix concept has an Astro destination", routeReconciliation.every((route) => route.astroDestination.startsWith("/"))]);
checks.push(["every reconciled internal destination resolves", routeReconciliation.every((route) => {
  const pathname = new URL(route.astroDestination, "https://www.justiceleagueglm.org").pathname;
  const target = pathname === "/" ? indexPath : path.join(distRoot, pathname.replace(/^\/|\/$/g, ""), "index.html");
  return fs.existsSync(target);
})]);
checks.push(["desktop and mobile navigation expose reconciled concepts", ["Scholarship FAQ", "Committee meetings", "Ad booklet", "Recent news and videos", "Photos", "Apology 2023", "E-News Briefs", "Supporters", "Donors"].every((label) => (html.match(new RegExp(`>${escapeRegExp(label)}<`, "g")) ?? []).length >= 2)]);
checks.push(["supporters and donors remain separate navigation labels", html.includes('href="/supporters/"') && html.includes('href="/donors/"')]);
checks.push(["sitemap is generated", fs.existsSync(path.join(distRoot, "sitemap.xml"))]);
checks.push(["custom 404 is generated", fs.existsSync(path.join(distRoot, "404.html"))]);
checks.push(["ad booklet has no submitting form", !routeDocuments.find((item) => item.route === "ad-booklet")?.html.match(/<form\b/i)]);
checks.push(["ad booklet has semantic deadline", routeDocuments.find((item) => item.route === "ad-booklet")?.html.includes('<time datetime="2026-09-30">')]);
checks.push(["ad booklet uses verified Wix handoff", routeDocuments.find((item) => item.route === "ad-booklet")?.html.includes("https://www.justiceleagueglm.org/ad-booklet")]);

const scholarshipHtml = routeDocuments.find((item) => item.route === "scholarship")?.html ?? "";
checks.push(["scholarship uses public Wix CMS collection", scholarshipHtml.includes("ScholarshipCycles")]);
checks.push(["scholarship visibly closed", scholarshipHtml.includes("Applications are closed")]);
checks.push(["scholarship has no application form", !/<form\b/i.test(scholarshipHtml)]);
checks.push(["closed scholarship has no application CTA", !scholarshipHtml.includes("Open the verified application")]);
checks.push(["scholarship has semantic extended deadline", scholarshipHtml.includes('<time datetime="2026-05-01">')]);
checks.push(["scholarship discloses source discrepancy", scholarshipHtml.includes("older sections still show April 17")]);
checks.push(["scholarship uses recipient and cohort CMS collections", scholarshipHtml.includes("ScholarshipRecipients") && scholarshipHtml.includes("ScholarshipCohorts")]);
checks.push(["scholarship renders 30 approved essay links", (scholarshipHtml.match(/Read published essay/g) ?? []).length === 30]);
checks.push(["scholarship renders all approved cohorts", scholarshipHtml.includes("Asa Pumphrey") && scholarshipHtml.includes("Malachi Turner") && scholarshipHtml.includes("Zachary Barker")]);
checks.push(["scholarship labels recipients rather than applicants", scholarshipHtml.includes("These are scholarship recipients publicly identified by the Justice League—not the full applicant pool")]);
checks.push(["scholarship uses approved cohort image", scholarshipHtml.includes("2025 Justice League reparations scholarship recipients") && scholarshipHtml.includes('loading="lazy"')]);
checks.push(["scholarship does not expose applicant submission fields", !scholarshipHtml.match(/Applicant's Signature|Parent\/Guardian Signature|Upload Transcript|Upload Essay/i)]);

function channel(value) {
  const normalized = value / 255;
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const value = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((index) => channel(Number.parseInt(value.slice(index, index + 2), 16)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(foreground, background) {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

for (const [label, foreground, background, minimum] of [
  ["primary text", "#F7F3E8", "#080808", 4.5],
  ["muted text", "#B9B4AA", "#080808", 4.5],
  ["gold action", "#080808", "#F3C84B", 4.5],
  ["red accent", "#D7544D", "#080808", 4.5],
  ["green accent", "#48A77D", "#080808", 4.5]
]) {
  checks.push([`${label} contrast`, contrast(foreground, background) >= minimum]);
}

const failures = checks.filter(([, passed]) => !passed);
for (const [label, passed] of checks) {
  console.log(`${passed ? "PASS" : "FAIL"} ${label}`);
}

if (failures.length) {
  throw new Error(`${failures.length} prototype validation check(s) failed.`);
}

console.log(`Validated ${checks.length} prototype requirements.`);
