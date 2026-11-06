"use client";

import Image from "next/image";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const { t } = useI18n();
  const dims = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-14 w-14" };
  const textSize = { sm: "text-base", md: "text-lg", lg: "text-2xl" };

  return (
    <div className="flex items-center gap-2.5">
      <div className={cn("relative shrink-0", dims[size])}>
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
        <Image
          src="/images/metatron-cube.webp"
          alt="Metatron's Cube — sacred geometry emblem"
          fill
          className="relative z-10 object-contain drop-shadow-[0_0_8px_oklch(0.72_0.28_320/0.5)]"
          sizes={size === "lg" ? "56px" : "40px"}
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn("font-display font-bold tracking-[0.12em] text-shimmer", textSize[size])}>
          {t.hero.title}
          <span className="text-primary text-glow">{t.hero.titleAccent}</span>
        </span>
        <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {t.brand.tagline}
        </span>
      </div>
    </div>
  );
}
