"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ru, type Dictionary, type Locale, LOCALES, LOCALE_META } from "./locales/ru";
import { kk } from "./locales/kk";
import { zh } from "./locales/zh";
import { en } from "./locales/en";

const DICTS: Record<Locale, Dictionary> = { ru, kk, zh, en };

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "metatron.locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved && LOCALES.includes(saved as Locale)) {
      // Legitimate: read persisted user preference once on mount
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(saved as Locale);
    } else {
      const nav = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "ru";
      if (LOCALES.includes(nav as Locale)) setLocaleState(nav as Locale);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "zh" ? "zh-CN" : locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: DICTS[locale] }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export { LOCALES, LOCALE_META, type Locale, type Dictionary };
