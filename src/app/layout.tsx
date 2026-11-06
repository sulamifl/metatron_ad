import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Metatron.ad — Научно-аналитическое издание",
  description:
    "Metatron.ad — научно-популярное и аналитическое сетевое издание о технологиях, биоэнергетике и сотрудничестве Казахстана и Китая. 4 языка: русский, казахский, китайский, английский.",
  keywords: [
    "Metatron.ad", "СМИ Казахстан", "научное издание", "биоэтанол", "биогаз",
    "Sulametrix.ai", "Астана Хаб", "СЭЗ Китай", "регистрация компаний",
    "мост Казахстан Китай", "intellectual property", "patents",
  ],
  authors: [{ name: "Metatron.ad" }],
  openGraph: {
    title: "Metatron.ad — Научно-аналитическое издание",
    description: "Технологии, биоэнергетика и мост между Казахстаном и Китаем",
    siteName: "Metatron.ad",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metatron.ad",
    description: "Научно-аналитическое издание",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${cormorant.variable} antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}
