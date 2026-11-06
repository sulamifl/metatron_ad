"use client";

import {
  Building2, Landmark, ShieldCheck, Languages, Handshake, Briefcase,
  ArrowRight, type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  Building2, Landmark, ShieldCheck, Languages, Handshake, Briefcase,
};

export function ServicesSection({ onContact }: { onContact: () => void }) {
  const { t } = useI18n();

  return (
    <section id="services" className="relative scroll-mt-20 py-16 sm:py-20">
      <div className="bg-flower-of-life pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.services.badge}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        {/* Services grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Building2;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-primary/15 bg-card/50 p-5 transition-all hover:border-primary/40 hover:bg-card/70 hover:box-glow"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:box-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Preferences: KZ + China SEZ */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Kazakhstan */}
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl">🇰🇿</span>
              <h3 className="font-display text-lg font-bold text-cyan-300">{t.services.kzPrefs.title}</h3>
            </div>
            <div className="space-y-3">
              {t.services.kzPrefs.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-cyan-400/15 bg-card/40 p-3.5"
                >
                  <div className="font-display text-sm font-semibold text-foreground">{item.name}</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* China */}
          <div className="rounded-2xl border border-rose-400/20 bg-gradient-to-br from-rose-500/5 to-transparent p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl">🇨🇳</span>
              <h3 className="font-display text-lg font-bold text-rose-300">{t.services.chinaPrefs.title}</h3>
            </div>
            <div className="space-y-3">
              {t.services.chinaPrefs.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-rose-400/15 bg-card/40 p-3.5"
                >
                  <div className="font-display text-sm font-semibold text-foreground">{item.name}</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={onContact}
            size="lg"
            className="border-primary/40 bg-primary/20 text-primary-foreground hover:bg-primary/30 hover:box-glow"
          >
            {t.services.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
