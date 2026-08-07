import fs from "node:fs";
import path from "node:path";

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
  ["prototype labelling", html.includes("Non-production prototype")],
  ["approved mission", html.includes("exists to repair the breach caused by the historical damage of slavery")],
  ["controlled documentary hero", html.includes('class="hero-documentary"') && html.includes("static.wixstatic.com")],
  ["video loads by consent", html.includes("data-video-play") && !/<video\b|<iframe\b/i.test(html)],
  ["Wix event source or labelled fallback", html.includes("Wix Events")],
  ["guarded eLink treatment", html.includes("data-elink-load") && html.includes("https://elink.io/p/9da922f")],
  ["reduced motion", cssSource.includes("prefers-reduced-motion: reduce")],
  ["320px reflow-safe body", cssSource.includes("min-width: 0")],
  ["no gradients", !/gradient\(/i.test(cssSource)]
];

const routeNames = [
  "",
  "about",
  "about/history",
  "about/leadership",
  "reparations",
  "scholarship",
  "impact",
  "events",
  "events/demo-priority",
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
for (const document of routeDocuments) {
  const routeLabel = document.route ? `/${document.route}/` : "/";
  const h1Count = (document.html.match(/<h1\b/g) ?? []).length;
  const title = document.html.match(/<title>(.*?)<\/title>/)?.[1];
  checks.push([`${routeLabel} exactly one H1`, h1Count === 1]);
  checks.push([`${routeLabel} noindex prototype`, document.html.includes('content="noindex, nofollow"')]);
  checks.push([`${routeLabel} canonical`, document.html.includes('rel="canonical"')]);
  checks.push([`${routeLabel} meta description`, document.html.includes('name="description"')]);
  checks.push([`${routeLabel} unique title`, Boolean(title) && !titles.has(title)]);
  if (title) titles.add(title);
  checks.push([`${routeLabel} prototype label`, document.html.includes("Non-production prototype")]);
  checks.push([`${routeLabel} no submitting form action`, !/<form[^>]+action=/i.test(document.html)]);

  for (const match of document.html.matchAll(/href="(https?:\/\/[^\"]+)"/g)) {
    const url = new URL(match[1]);
    checks.push([`${routeLabel} secure external URL ${url.hostname}`, url.protocol === "https:"]);
  }

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
