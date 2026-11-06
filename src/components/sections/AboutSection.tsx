"use client";

import Image from "next/image";
import { Building, FileBadge, Users, MapPin, Target, Scale } from "lucide-react";
import { useI18n } from "@/i18n";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  const { t } = useI18n();

  const items = [
    { icon: Building, label: t.about.founder, value: t.about.founderValue },
    { icon: FileBadge, label: t.about.chiefEditor, value: t.about.chiefEditorValue },
    { icon: Users, label: t.about.editorialBoard, value: t.about.editorialBoardValue },
    { icon: FileBadge, label: t.about.registration, value: t.about.registrationValue },
    { icon: MapPin, label: t.about.address, value: t.about.addressValue },
  ];

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20">
      <div className="bg-grid-geom pointer-events-none absolute inset-0 opacity-10" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] animate-spin-slow">
          <Image src="/images/flower-of-life.webp" alt="" fill className="object-contain" sizes="384px" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.about.badge}
          title={t.about.title}
          subtitle={t.about.subtitle}
          align="center"
        />

        {/* Реквизиты */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-xl border border-primary/15 bg-card/50 p-5"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </div>
                <div className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>

        {/* Миссия и этика */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/5 to-transparent p-6 sm:p-7">
            <div className="mb-3 inline-flex items-center gap-2">
              <Target className="h-5 w-5 text-amber-300" />
              <h3 className="font-display text-lg font-bold text-amber-300">{t.about.mission}</h3>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">{t.about.missionText}</p>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 sm:p-7">
            <div className="mb-3 inline-flex items-center gap-2">
              <Scale className="h-5 w-5 text-primary" />
              <h3 className="font-display text-lg font-bold text-primary">{t.about.ethics}</h3>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80">{t.about.ethicsText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
