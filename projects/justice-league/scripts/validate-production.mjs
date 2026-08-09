import fs from "node:fs";
import path from "node:path";
import { requiredGalleryPhotoIds, requiredGalleryVideoIds } from "../src/data/media.ts";

const dist = path.join(process.cwd(), "dist");
const mediaPath = path.join(dist, "media", "index.html");
const media = fs.existsSync(mediaPath) ? fs.readFileSync(mediaPath, "utf8") : "";
const sitemap = fs.existsSync(path.join(dist, "sitemap.xml")) ? fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8") : "";
const checks = [
  ["media route exists", Boolean(media)],
  ["media has one H1", (media.match(/<h1\b/gi) ?? []).length === 1],
  ["media photo gallery exists", media.includes("photo-grid")],
  ["media video gallery exists", media.includes("media-video-grid")],
  ["every expected video is present", requiredGalleryVideoIds.every((id) => media.includes(`data-video-id="${id}"`))],
  ["every expected photo is present", requiredGalleryPhotoIds.every((id) => media.includes(`id="${id}"`))],
  ["thumbnails lazy load", (media.match(/loading="lazy"/g) ?? []).length >= requiredGalleryVideoIds.length + requiredGalleryPhotoIds.length],
  ["video buttons have accessible names", requiredGalleryVideoIds.every((id) => new RegExp(`data-video-id="${id}"[\\s\\S]*?aria-label="Play `).test(media))],
  ["privacy-enhanced YouTube embeds", media.includes("youtube-nocookie.com/embed/")],
  ["photos have meaningful alt text", requiredGalleryPhotoIds.every((id) => new RegExp(`id="${id}"[\\s\\S]*?<img[^>]+alt="[^\"]{12,}"`).test(media))],
  ["media is in sitemap", sitemap.includes("/media/")],
  ["no prototype-facing copy", !/prototype|placeholder|demonstration priority/i.test(media)]
];
for (const [label, pass] of checks) console.log(`${pass ? "PASS" : "FAIL"} ${label}`);
if (checks.some(([, pass]) => !pass)) process.exitCode = 1;
