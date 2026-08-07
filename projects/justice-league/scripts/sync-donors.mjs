import fs from "node:fs/promises";
import path from "node:path";
import { parseDonorCsv } from "../src/lib/donor-csv.ts";

const sourceUrl = "https://justiceleagueglm.littlegreenlight.com/rptlink/c6a0a3da-df47-45f3-969e-53a4586160d0";
const response = await fetch(sourceUrl, {
  headers: { Accept: "text/csv" },
  signal: AbortSignal.timeout(15_000)
});

if (!response.ok) throw new Error(`Little Green Light request returned HTTP ${response.status}.`);
const groups = parseDonorCsv(await response.text());
if (groups.length === 0) throw new Error("Little Green Light report contained no public donor groups.");

const snapshot = {
  observedAt: new Date().toISOString().slice(0, 10),
  groups
};
const outputPath = path.resolve("src/data/donors-fallback.json");
await fs.writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
console.log(`Wrote sanitized donor fallback with ${groups.reduce((sum, group) => sum + group.donors.length, 0)} year-records across ${groups.length} years.`);
