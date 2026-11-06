"use client";

import Image from "next/image";
import { X, Clock, User, Share2, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useI18n } from "@/i18n";
import { articles } from "@/data/articles-data";
import { CATEGORIES } from "@/data/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ArticleModal({
  slug,
  onClose,
  onOpen,
}: {
  slug: string | null;
  onClose: () => void;
  onOpen: (slug: string) => void;
}) {
  const { t, locale } = useI18n();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [article]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!article) return null;
  const tr = article.translations[locale];
  const cat = CATEGORIES.find((c) => c.key === article.category);
  const dateStr = new Date(article.date).toLocaleDateString(
    locale === "zh" ? "zh-CN" : locale === "kk" ? "kk-KZ" : locale === "en" ? "en-US" : "ru-RU",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const moreRelated = related.length < 3
    ? [...related, ...articles.filter((a) => a.slug !== article.slug && a.category !== article.category).slice(0, 3 - related.length)]
    : related;

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: tr.title, text: tr.excerpt, url });
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative my-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-2xl box-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative aspect-[16/8] w-full overflow-hidden bg-gradient-to-br from-primary/15 via-background to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,oklch(0.72_0.28_320/0.22),transparent_65%)]" />
          <Image
            src={article.cover}
            alt={article.coverAlt}
            fill
            className="object-cover opacity-95 mix-blend-screen"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <button
            onClick={onClose}
            aria-label={t.common.close}
            className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground/80 backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          {cat && (
            <div className={cn("absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur", cat.color)}>
              <span>{cat.glyph}</span>
              {t.categories[cat.key]}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="max-h-[calc(100vh-20rem)] overflow-y-auto px-5 pb-8 pt-5 sm:px-8 sm:pt-6">
          <h1 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            {tr.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-b border-primary/10 pb-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <User className="h-3.5 w-3.5 text-primary" />
              {t.news.by}: <span className="text-foreground/80">{tr.author}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {t.news.publishedOn}: <span className="text-foreground/80">{dateStr}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              {article.readTime} {t.news.minRead}
            </span>
            <button
              onClick={share}
              className="ml-auto inline-flex items-center gap-1 rounded-full border border-primary/20 px-2.5 py-1 text-primary transition-all hover:border-primary hover:bg-primary/10"
            >
              <Share2 className="h-3 w-3" />
              {t.news.share}
            </button>
          </div>

          <p className="mt-4 font-serif-elegant text-base italic leading-relaxed text-amber-200/80">
            {tr.excerpt}
          </p>

          {/* HTML content */}
          <div
            className="article-prose mt-5"
            dangerouslySetInnerHTML={{ __html: tr.content }}
          />

          <div className="mt-8 flex items-center justify-between border-t border-primary/10 pt-5">
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
              className="border-primary/25 text-foreground/70 hover:text-primary"
            >
              <ArrowRight className="mr-1.5 h-3.5 w-3.5 rotate-180" />
              {t.news.back}
            </Button>
          </div>

          {/* Related */}
          {moreRelated.length > 0 && (
            <div className="mt-8">
              <h4 className="font-display text-sm uppercase tracking-widest text-primary">
                {t.news.relatedArticles}
              </h4>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {moreRelated.map((a) => {
                  const rt = a.translations[locale];
                  return (
                    <button
                      key={a.slug}
                      onClick={() => onOpen(a.slug)}
                      className="group flex flex-col gap-2 rounded-lg border border-primary/10 bg-background/40 p-3 text-left transition-all hover:border-primary/40 hover:bg-card/50"
                    >
                      <div className="relative aspect-video overflow-hidden rounded">
                        <Image src={a.cover} alt={a.coverAlt} fill className="object-cover opacity-80 group-hover:opacity-100" sizes="240px" />
                      </div>
                      <span className="line-clamp-2 text-xs font-medium leading-snug text-foreground/80 group-hover:text-primary">
                        {rt.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
