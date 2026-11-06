import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/data/articles-data";
import { CATEGORIES, type Category } from "@/data/types";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = (searchParams.get("locale") ?? "ru") as "ru" | "kk" | "zh" | "en";
  const category = searchParams.get("category") as Category | null;

  const list = articles
    .filter((a) => !category || category === "all" || a.category === category)
    .map((a) => ({
      slug: a.slug,
      category: a.category,
      cover: a.cover,
      date: a.date,
      readTime: a.readTime,
      featured: a.featured ?? false,
      categoryLabel: CATEGORIES.find((c) => c.key === a.category)?.glyph,
      title: a.translations[locale]?.title ?? a.translations.ru.title,
      excerpt: a.translations[locale]?.excerpt ?? a.translations.ru.excerpt,
      author: a.translations[locale]?.author ?? a.translations.ru.author,
    }));

  return NextResponse.json({ items: list, total: list.length });
}
