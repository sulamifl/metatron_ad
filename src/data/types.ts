// Типы данных статей Metatron.ad
import type { Locale } from "@/i18n";

export type Category =
  | "sciPop"
  | "sciTech"
  | "sulametrix"
  | "bioenergy"
  | "bridge"
  | "analytics";

export interface ArticleTranslation {
  title: string;
  excerpt: string;
  /** HTML-содержимое статьи (h2/h3/p/ul/blockquote/strong) */
  content: string;
  author: string;
}

export interface Article {
  slug: string;
  category: Category;
  cover: string; // путь к WebP в /images
  coverAlt: string;
  date: string; // ISO
  readTime: number; // минуты
  featured?: boolean;
  translations: Record<Locale, ArticleTranslation>;
}

export interface CategoryMeta {
  key: Category;
  color: string; // tailwind-класс для акцента
  glyph: string; // символ-глиф
}

export const CATEGORIES: CategoryMeta[] = [
  { key: "sciPop", color: "text-amber-300", glyph: "✦" },
  { key: "sciTech", color: "text-cyan-300", glyph: "◈" },
  { key: "sulametrix", color: "text-fuchsia-300", glyph: "❖" },
  { key: "bioenergy", color: "text-emerald-300", glyph: "❋" },
  { key: "bridge", color: "text-violet-300", glyph: "⬡" },
  { key: "analytics", color: "text-rose-300", glyph: "✧" },
];

// Сами статьи импортируются напрямую из ./articles-data там, где нужны
