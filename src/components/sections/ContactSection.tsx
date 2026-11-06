"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, MessageCircle, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  const { t, locale } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale, channel: "form" }),
      });
      if (res.ok) {
        setStatus("sent");
        toast({ title: t.contact.success });
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error("failed");
      }
    } catch {
      toast({ title: t.contact.error, variant: "destructive" });
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 bottom-0 h-64 w-64 opacity-10 animate-spin-rev">
          <Image src="/images/seal-archangels.webp" alt="" fill className="object-contain" sizes="256px" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 rounded-2xl border border-primary/20 bg-card/50 p-6 sm:p-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="c-name" className="text-sm text-foreground/80">{t.contact.name}</Label>
                <Input id="c-name" required value={form.name} onChange={update("name")} placeholder={t.contact.namePlaceholder} className="border-primary/20 bg-background/50" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-email" className="text-sm text-foreground/80">{t.contact.email}</Label>
                <Input id="c-email" type="email" required value={form.email} onChange={update("email")} placeholder={t.contact.emailPlaceholder} className="border-primary/20 bg-background/50" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-phone" className="text-sm text-foreground/80">{t.contact.phone}</Label>
                <Input id="c-phone" value={form.phone} onChange={update("phone")} placeholder={t.contact.phonePlaceholder} className="border-primary/20 bg-background/50" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-subject" className="text-sm text-foreground/80">{t.contact.subject}</Label>
                <Input id="c-subject" required value={form.subject} onChange={update("subject")} placeholder={t.contact.subjectPlaceholder} className="border-primary/20 bg-background/50" />
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="c-message" className="text-sm text-foreground/80">{t.contact.message}</Label>
              <Textarea id="c-message" required value={form.message} onChange={update("message")} placeholder={t.contact.messagePlaceholder} rows={5} className="border-primary/20 bg-background/50 resize-none" />
            </div>
            <Button
              type="submit"
              disabled={status !== "idle"}
              size="lg"
              className="mt-5 w-full border-primary/40 bg-primary/25 text-primary-foreground hover:bg-primary/35 hover:box-glow"
            >
              {status === "sending" ? (
                <>{t.contact.sending}</>
              ) : status === "sent" ? (
                <><CheckCircle2 className="mr-2 h-4 w-4" />{t.contact.success}</>
              ) : (
                <><Send className="mr-2 h-4 w-4" />{t.contact.send}</>
              )}
            </Button>
          </form>

          {/* Direct channels */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/8 to-transparent p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-green-500/30 bg-green-500/10 text-green-400">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-green-400">{t.contact.telegram}</div>
                  <a href="https://t.me/metatron_ad_bot" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                    {t.contact.telegramBot}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/8 to-transparent p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-400/10 text-amber-300">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-amber-300">{t.contact.wechat}</div>
                  <div className="text-sm text-muted-foreground">{t.contact.wechatId}</div>
                </div>
              </div>
              {/* QR placeholder — WeChat ID prominently shown */}
              <div className="mt-4 flex items-center justify-center rounded-lg border border-dashed border-amber-400/20 bg-amber-400/5 py-4">
                <div className="relative h-20 w-20 opacity-80">
                  <Image src="/images/seal-agla-sm.webp" alt="WeChat ID" fill className="object-contain" sizes="80px" />
                </div>
                <div className="ml-3 text-center">
                  <div className="font-display text-base font-bold text-amber-300">{t.contact.wechatId}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">WeChat ID</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-card/40 p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-primary">Email</div>
                  <a href="mailto:info@metatron.ad" className="text-sm text-muted-foreground hover:text-primary">
                    info@metatron.ad
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-primary/10 pt-3 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" />
                {t.contact.responseTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
