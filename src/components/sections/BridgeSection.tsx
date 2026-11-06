"use client";

import Image from "next/image";
import { ArrowLeftRight, Check, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

export function BridgeSection({ onContact }: { onContact: () => void }) {
  const { t } = useI18n();

  return (
    <section id="bridge" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20">
      {/* Декоративные печати по бокам */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/3 h-64 w-64 opacity-10 animate-spin-slow">
          <Image src="/images/seal-agla.webp" alt="" fill className="object-contain" sizes="256px" />
        </div>
        <div className="absolute -right-20 bottom-1/4 h-64 w-64 opacity-10 animate-spin-rev">
          <Image src="/images/seal-star.webp" alt="" fill className="object-contain" sizes="256px" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.bridge.badge}
          title={t.bridge.title}
          subtitle={t.bridge.subtitle}
          align="center"
        />

        {/* Центральный соединительный элемент */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-card/60 px-5 py-2">
            <span className="text-2xl">🇰🇿</span>
            <ArrowLeftRight className="h-5 w-5 text-primary animate-pulse-glow" />
            <span className="text-2xl">🇨🇳</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* KZ → China */}
          <div className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card/50 p-6 transition-all hover:border-primary/50 hover:box-glow sm:p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 opacity-15">
              <Image src="/images/eye-of-horus-sm.webp" alt="" fill className="object-contain" sizes="128px" />
            </div>
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <span className="text-xl">🇰🇿 → 🇨🇳</span>
                {t.bridge.kzToChina.title}
              </div>
              <p className="text-sm text-muted-foreground">{t.bridge.kzToChina.desc}</p>
              <ul className="mt-5 space-y-3">
                {t.bridge.kzToChina.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* China → KZ */}
          <div className="group relative overflow-hidden rounded-2xl border border-amber-400/20 bg-card/50 p-6 transition-all hover:border-amber-400/50 hover:box-glow-gold sm:p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 opacity-15">
              <Image src="/images/lotus-om-sm.webp" alt="" fill className="object-contain" sizes="128px" />
            </div>
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                <span className="text-xl">🇨🇳 → 🇰🇿</span>
                {t.bridge.chinaToKz.title}
              </div>
              <p className="text-sm text-muted-foreground">{t.bridge.chinaToKz.desc}</p>
              <ul className="mt-5 space-y-3">
                {t.bridge.chinaToKz.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={onContact}
            size="lg"
            className="border-primary/40 bg-primary/20 text-primary-foreground hover:bg-primary/30 hover:box-glow"
          >
            {t.bridge.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
