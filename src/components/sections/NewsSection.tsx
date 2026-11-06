"use client";

import { useState } from "react";
import { useI18n } from "@/i18n";
import { articles } from "@/data/articles-data";
import { CATEGORIES, type Category } from "@/data/types";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

export function NewsSection({ onReadArticle }: { onReadArticle: (slug: string) => void }) {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Category | "all">("all");

  const filtered = filter === "all" ? articles : articles.filter((a) => a.category === filter);

  const tabs: { key: Category | "all"; label: string }[] = [
    { key: "all", label: t.categories.all },
    ...CATEGORIES.map((c) => ({ key: c.key, label: t.categories[c.key] })),
  ];

  return (
    <section id="news" className="relative scroll-mt-20 py-16 sm:py-20">
      <div className="bg-grid-geom pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.categories.title}
          title={t.news.title}
          subtitle={t.news.subtitle}
        />

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
                filter === tab.key
                  ? "border-primary bg-primary/20 text-primary box-glow"
                  : "border-primary/20 bg-card/40 text-muted-foreground hover:border-primary/50 hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <ArticleCard
                key={a.slug}
                article={a}
                onOpen={onReadArticle}
                size={i === 0 && filter === "all" ? "lg" : "md"}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-dashed border-primary/20 bg-card/30 py-16 text-center text-muted-foreground">
            {t.news.noResults}
          </div>
        )}
      </div>
    </section>
  );
}
