// Оптимизация загруженных фото в WebP для хостинга 3 ГБ
import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join } from "path";

const SRC = "/home/z/my-project/upload";
const DEST = "/home/z/my-project/public/images";

// Карта: исходное имя → осмысленное имя + целевой размер
const MAP: Record<string, { out: string; width: number }> = {
  "IMG_1070.jpeg": { out: "metatron-mandala", width: 1200 },
  "IMG_1072.jpeg": { out: "seal-aurum", width: 700 },
  "IMG_1073.jpeg": { out: "seal-star", width: 700 },
  "IMG_1074.jpeg": { out: "lotus-om", width: 700 },
  "IMG_1075.jpeg": { out: "seal-agla", width: 700 },
  "IMG_1076.jpeg": { out: "seal-archangels", width: 700 },
  "IMG_1077.jpeg": { out: "eye-of-horus", width: 700 },
  "IMG_1078.jpeg": { out: "metatron-cube", width: 1100 },
  "IMG_1079.jpeg": { out: "flower-of-life", width: 1100 },
};

async function main() {
  await mkdir(DEST, { recursive: true });
  const files = await readdir(SRC);
  for (const file of files) {
    const cfg = MAP[file];
    if (!cfg) continue;
    const src = join(SRC, file);
    await sharp(src)
      .resize({ width: cfg.width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(join(DEST, `${cfg.out}.webp`));
    await sharp(src)
      .resize({ width: Math.min(400, cfg.width), withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(join(DEST, `${cfg.out}-sm.webp`));
    console.log(`✓ ${file} → ${cfg.out}.webp (+ sm)`);
  }
  console.log("Готово!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
