import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetDirectory = path.resolve("public/images/supporters");
const entries = await fs.readdir(assetDirectory, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isFile() || path.extname(entry.name).toLowerCase() === ".webp") continue;
  const sourcePath = path.join(assetDirectory, entry.name);
  const outputPath = path.join(assetDirectory, `${path.parse(entry.name).name}.webp`);
  if (!sourcePath.startsWith(`${assetDirectory}${path.sep}`) || !outputPath.startsWith(`${assetDirectory}${path.sep}`)) {
    throw new Error("Supporter asset path escaped the expected directory.");
  }

  await sharp(sourcePath)
    .resize({ width: 900, height: 600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 86, alphaQuality: 90, effort: 6 })
    .toFile(outputPath);
  await fs.unlink(sourcePath);
  console.log(`Optimized ${entry.name} -> ${path.basename(outputPath)}`);
}
