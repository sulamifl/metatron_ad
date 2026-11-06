"use client";

import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n, LOCALES, LOCALE_META, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useI18n();
  const current = LOCALE_META[locale];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Select language"
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-3 py-1.5 text-sm font-medium text-foreground/90 transition-all hover:border-primary hover:text-primary hover:box-glow",
            compact && "px-2.5 py-1",
          )}
        >
          <Globe className="h-4 w-4 text-primary" />
          <span className="font-display tracking-wider">{current.label}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-44 border-primary/30 bg-popover/95 backdrop-blur"
      >
        {LOCALES.map((l: Locale) => {
          const meta = LOCALE_META[l];
          return (
            <DropdownMenuItem
              key={l}
              onClick={() => setLocale(l)}
              className={cn(
                "cursor-pointer gap-2.5 focus:bg-primary/15 focus:text-primary",
                l === locale && "bg-primary/10 text-primary",
              )}
            >
              <span className="text-base leading-none">{meta.flag}</span>
              <span className="flex flex-col">
                <span className="text-sm font-medium">{meta.nativeName}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {meta.label}
                </span>
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
