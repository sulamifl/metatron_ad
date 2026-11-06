"use client";

import { cn } from "@/lib/utils";

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center")}>
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium uppercase tracking-widest text-primary">
        <span className="text-amber-300">✦</span>
        {badge}
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("max-w-2xl text-base leading-relaxed text-muted-foreground", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
