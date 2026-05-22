/**
 * Regenerate favicon assets from public/logos/riviso/logo.png
 * Run: npm run generate:favicons
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = path.resolve(import.meta.dirname, "..");
const input = path.join(root, "public/logos/riviso/logo.png");

const squarePng = await sharp(input)
  .resize(512, 512, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  })
  .png()
  .toBuffer();

const icon32 = await sharp(squarePng).resize(32, 32).png().toBuffer();
const icon180 = await sharp(squarePng).resize(180, 180).png().toBuffer();
const ico = await toIco([icon32]);

const writes = [
  [path.join(root, "public/favicon.ico"), ico],
  [path.join(root, "src/app/favicon.ico"), ico],
  [path.join(root, "src/app/icon.png"), icon32],
  [path.join(root, "public/logos/riviso/icon.png"), icon32],
  [path.join(root, "src/app/apple-icon.png"), icon180],
];

for (const [file, data] of writes) {
  fs.writeFileSync(file, data);
}

console.log("Generated favicons:", {
  "favicon.ico": ico.length,
  "icon.png": icon32.length,
  "apple-icon.png": icon180.length,
});
