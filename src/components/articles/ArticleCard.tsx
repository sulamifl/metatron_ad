"use client";

import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { useI18n } from "@/i18n";
import { CATEGORIES } from "@/data/types";
import type { Article } from "@/data/types";
import { cn } from "@/lib/utils";

export function ArticleCard({
  article,
  onOpen,
  size = "md",
}: {
  article: Article;
  onOpen: (slug: string) => void;
  size?: "sm" | "md" | "lg";
}) {
  const { t, locale } = useI18n();
  const tr = article.translations[locale];
  const cat = CATEGORIES.find((c) => c.key === article.category);

  return (
    <button
      onClick={() => onOpen(article.slug)}
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-primary/15 bg-card/50 text-left transition-all duration-300 hover:border-primary/45 hover:bg-card/70 hover:box-glow"
    >
      <div className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-background",
        size === "lg" ? "aspect-[16/9]" : "aspect-[16/10]",
      )}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,oklch(0.72_0.28_320/0.22),transparent_65%)]" />
        <Image
          src={article.cover}
          alt={article.coverAlt}
          fill
          className="object-cover opacity-95 mix-blend-screen transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        {cat && (
          <div className={cn("absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur", cat.color)}>
            <span>{cat.glyph}</span>
            {t.categories[cat.key]}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3
          className={cn(
            "font-display font-semibold leading-snug text-foreground transition-colors group-hover:text-primary",
            size === "lg" ? "text-lg sm:text-xl" : "text-base",
          )}
        >
          {tr.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{tr.excerpt}</p>
        <div className="mt-3 flex items-center justify-between border-t border-primary/10 pt-3 text-xs text-muted-foreground">
          <span className="truncate">{tr.author}</span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime} {t.news.minRead}
          </span>
        </div>
      </div>
    </button>
  );
}
