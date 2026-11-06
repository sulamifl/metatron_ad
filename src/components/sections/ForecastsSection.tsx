"use client";

import Image from "next/image";
import { TrendingUp, Lock, Check, Sparkles, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function ForecastsSection({ onContact }: { onContact: () => void }) {
  const { t } = useI18n();

  return (
    <section id="forecasts" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-10 h-72 w-72 opacity-10 animate-spin-slow">
          <Image src="/images/seal-aurum.webp" alt="" fill className="object-contain" sizes="288px" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.forecasts.badge}
          title={t.forecasts.title}
          subtitle={t.forecasts.subtitle}
          align="center"
        />

        {/* Sample forecasts */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.forecasts.sample.map((f, i) => (
            <div
              key={i}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/50 p-5 transition-all hover:box-glow",
                i === 0 ? "border-primary/30 hover:border-primary/60" : "border-primary/15 hover:border-primary/40",
              )}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <TrendingUp className="h-3 w-3" />
                  {t.forecasts.free}
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-display text-2xl font-bold text-amber-300 text-glow-gold">
                    {f.confidence}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.summary}</p>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-amber-400"
                  style={{ width: f.confidence }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 rounded-lg border border-amber-400/15 bg-amber-400/5 px-4 py-3 text-center text-xs text-muted-foreground/80">
          {t.forecasts.disclaimer}
        </div>

        {/* Pricing */}
        <h3 className="mt-14 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
          {t.forecasts.pricingTitle}
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.forecasts.pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-2xl border bg-card/50 p-6 transition-all",
                plan.popular
                  ? "border-primary/50 box-glow"
                  : "border-primary/15 hover:border-primary/35",
              )}
            >
              {plan.popular && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  <Sparkles className="h-3 w-3" /> Popular
                </div>
              )}
              <h4 className="font-display text-lg font-bold text-foreground">{plan.name}</h4>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-primary text-glow">{plan.price}</span>
                <span className="text-xs text-muted-foreground">/ {plan.period}</span>
              </div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-foreground/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={onContact}
                variant={plan.popular ? "default" : "outline"}
                className={cn(
                  "mt-6 w-full",
                  plan.popular
                    ? "border-primary/40 bg-primary/25 text-primary-foreground hover:bg-primary/35"
                    : "border-primary/25 text-foreground/80 hover:border-primary hover:text-primary",
                )}
              >
                {plan.name === "Enterprise" ? (
                  <>
                    <Lock className="mr-1.5 h-3.5 w-3.5" />
                    {t.forecasts.subscribe}
                  </>
                ) : (
                  <>
                    {t.forecasts.subscribe}
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
