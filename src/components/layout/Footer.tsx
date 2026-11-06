"use client";

import { Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/i18n";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const NAV_SECTIONS = [
  { id: "news", key: "news" as const },
  { id: "bridge", key: "bridge" as const },
  { id: "services", key: "services" as const },
  { id: "forecasts", key: "forecasts" as const },
  { id: "about", key: "about" as const },
  { id: "contact", key: "contact" as const },
];

export function Footer() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast({ title: t.common.subscribed });
        setEmail("");
      } else {
        toast({ title: t.common.subscribed, variant: "default" });
        setEmail("");
      }
    } catch {
      toast({ title: t.common.subscribed });
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative mt-auto border-t border-primary/20 bg-card/40">
      <div className="bg-grid-geom pointer-events-none absolute inset-0 opacity-20" />
      {/* Декоративная разделительная печать */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="relative h-16 w-16 animate-spin-slow opacity-40">
            <img
              src="/images/seal-aurum-sm.webp"
              alt="AURUM seal"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">
              {t.footer.aboutTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.footer.aboutText}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://t.me/metatron_ad_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs text-foreground/80 transition-all hover:border-primary hover:text-primary hover:box-glow"
                aria-label={t.contact.telegram}
              >
                <Send className="h-3.5 w-3.5" /> {t.contact.telegram}
              </a>
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 px-3 py-1.5 text-xs text-foreground/80"
                title="WeChat ID"
              >
                <MessageCircle className="h-3.5 w-3.5 text-amber-300" /> {t.contact.wechatId}
              </span>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">
              {t.footer.sectionsTitle}
            </h3>
            <ul className="mt-3 space-y-2">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t.nav[s.key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">
              {t.footer.contactsTitle}
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@metatron.ad"
                  className="transition-colors hover:text-primary"
                >
                  info@metatron.ad
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Send className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="https://t.me/metatron_ad_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {t.contact.telegramBot}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                <span>
                  {t.contact.wechat}: {t.contact.wechatId}
                </span>
              </li>
              <li className="pt-1 text-xs text-muted-foreground/70">
                {t.contact.responseTime}
              </li>
            </ul>
          </div>

          {/* Newsletter + Legal */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">
              {t.common.newsletter}
            </h3>
            <form onSubmit={subscribe} className="mt-3 flex flex-col gap-2">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.common.newsletterPlaceholder}
                className="border-primary/25 bg-background/50 text-sm"
              />
              <Button
                type="submit"
                disabled={loading}
                size="sm"
                className="w-full border-primary/40 bg-primary/15 text-primary hover:bg-primary/25"
              >
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                {t.common.subscribe}
              </Button>
            </form>
            <ul className="mt-4 space-y-1.5">
              {t.footer.legalLinks.map((link) => (
                <li key={link} className="text-xs text-muted-foreground/70">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SMI disclaimer — важно для регистрации СМИ */}
        <div className="mt-10 rounded-lg border border-amber-400/20 bg-amber-400/5 px-4 py-3">
          <p className="text-xs leading-relaxed text-muted-foreground/90">
            {t.footer.disclaimer}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-primary/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground/70">{t.footer.copyright}</p>
          <p className="text-xs text-muted-foreground/60">{t.footer.developBy}</p>
        </div>
      </div>
    </footer>
  );
}
