import fs from "node:fs";
import path from "node:path";

const roots = process.argv.slice(2);
if (!roots.length) {
  console.error("Usage: node check-placeholders.mjs <file-or-directory> [...]");
  process.exit(2);
}
const patterns = [/\[NEEDS CLIENT INPUT:/i, /\[PLACEHOLDER:/i, /\bTODO\b/i, /\bLorem ipsum\b/i];
const ignored = new Set(["node_modules", ".git", "dist", "build"]);
let failures = [];

function walk(p) {
  const stat = fs.statSync(p);
  if (stat.isDirectory()) {
    for (const name of fs.readdirSync(p)) {
      if (!ignored.has(name)) walk(path.join(p, name));
    }
    return;
  }
  if (!/\.(html?|mdx?|jsx?|tsx?|astro|json|ya?ml)$/i.test(p)) return;
  const text = fs.readFileSync(p, "utf8");
  text.split(/\r?\n/).forEach((line, i) => {
    if (patterns.some((rx) => rx.test(line))) failures.push(`${p}:${i + 1}: ${line.trim()}`);
  });
}
for (const r of roots) walk(r);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("No unresolved placeholder markers found.");
