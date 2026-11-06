"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Newspaper } from "lucide-react";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles-data";

export function Hero({ onReadArticle }: { onReadArticle: (slug: string) => void }) {
  const { t, locale } = useI18n();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const ft = featured?.translations[locale];

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Фоновые мандалы */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] opacity-20 animate-spin-slow">
          <Image
            src="/images/metatron-mandala.webp"
            alt=""
            fill
            className="object-contain"
            sizes="544px"
            priority
          />
        </div>
        <div className="absolute -left-24 top-32 h-72 w-72 opacity-15 animate-spin-rev">
          <Image
            src="/images/flower-of-life.webp"
            alt=""
            fill
            className="object-contain"
            sizes="288px"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 opacity-10 animate-pulse-glow">
          <Image
            src="/images/seal-archangels-sm.webp"
            alt=""
            fill
            className="object-contain"
            sizes="256px"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: title block */}
          <div className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.badge}
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-shimmer">{t.hero.title}</span>
              <span className="text-primary text-glow">{t.hero.titleAccent}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                onClick={() => scrollTo("news")}
                size="lg"
                className="border-primary/40 bg-primary/20 text-primary-foreground hover:bg-primary/30 hover:box-glow"
              >
                <Newspaper className="mr-2 h-4 w-4" />
                {t.hero.ctaPrimary}
              </Button>
              <Button
                onClick={() => scrollTo("services")}
                size="lg"
                variant="outline"
                className="border-primary/30 bg-transparent text-foreground/80 hover:border-primary hover:text-primary"
              >
                {t.hero.ctaSecondary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-4 gap-4 sm:gap-6">
              {t.hero.stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-display text-2xl font-bold text-primary text-glow sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured article card */}
          {featured && ft && (
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 via-amber-400/10 to-transparent blur-2xl" />
              <button
                onClick={() => onReadArticle(featured.slug)}
                className="group relative w-full overflow-hidden rounded-2xl border border-primary/30 bg-card/60 p-1.5 text-left transition-all hover:border-primary/60 hover:box-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-primary/15 via-background to-background">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,oklch(0.72_0.28_320/0.22),transparent_65%)]" />
                  <Image
                    src={featured.cover}
                    alt={featured.coverAlt}
                    fill
                    className="object-cover opacity-95 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                    <Sparkles className="h-3 w-3" /> {t.news.featured}
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-2 text-xs uppercase tracking-widest text-amber-300">
                    {t.categories[featured.category]}
                  </p>
                  <h3 className="font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {ft.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{ft.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{ft.author}</span>
                    <span className="inline-flex items-center gap-1 text-primary">
                      {t.news.readArticle}
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
