"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useI18n } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV_SECTIONS = [
  { id: "news", key: "news" as const },
  { id: "bridge", key: "bridge" as const },
  { id: "services", key: "services" as const },
  { id: "forecasts", key: "forecasts" as const },
  { id: "about", key: "about" as const },
  { id: "contact", key: "contact" as const },
];

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-primary/20 bg-background/85 backdrop-blur-xl box-glow"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="bg-flower-of-life pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#top" className="shrink-0" aria-label="Metatron.ad — home">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary hover:bg-primary/5"
            >
              {t.nav[s.key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher compact />
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-foreground/80 hover:text-primary"
                aria-label={t.common.menu}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-primary/20 bg-background/95 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between px-2 py-4">
                <Logo size="sm" />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label={t.common.close}>
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="mt-4 flex flex-col gap-1 px-2">
                {NAV_SECTIONS.map((s) => (
                  <SheetClose asChild key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className="rounded-lg px-4 py-3 text-left text-base font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {t.nav[s.key]}
                    </button>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 border-t border-primary/15 px-2 pt-4">
                <p className="px-4 text-xs uppercase tracking-widest text-muted-foreground">
                  {t.brand.name}
                </p>
                <p className="px-4 py-2 text-sm text-muted-foreground/80">
                  {t.footer.aboutText}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
