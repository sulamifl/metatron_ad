"use client";

import { useState, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { NewsSection } from "@/components/sections/NewsSection";
import { BridgeSection } from "@/components/sections/BridgeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ForecastsSection } from "@/components/sections/ForecastsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArticleModal } from "@/components/articles/ArticleModal";

export default function Home() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const onReadArticle = useCallback((slug: string) => {
    setOpenSlug(slug);
  }, []);

  const onCloseArticle = useCallback(() => {
    setOpenSlug(null);
  }, []);

  const onContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero onReadArticle={onReadArticle} />
        <NewsSection onReadArticle={onReadArticle} />
        <BridgeSection onContact={onContact} />
        <ServicesSection onContact={onContact} />
        <ForecastsSection onContact={onContact} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ArticleModal slug={openSlug} onClose={onCloseArticle} onOpen={onReadArticle} />
    </div>
  );
}
