"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { LanguageProvider } from "@/lib/i18n";

// Sayfa başlıkları
const pageTitles: Record<string, string> = {
  "/": "Ana Sayfa",
  "/hakkimizda": "Hakkımızda",
  "/odalar-tesisler": "Odalar & Tesisler",
  "/hizmetler": "Hizmetler",
  "/galeri": "Galeri",
  "/iletisim": "İletişim",
};

const SITE_NAME = "TOBB Turizm MTAL Uygulama Oteli";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  // Dinamik sayfa başlığı
  useEffect(() => {
    const normalizedPath = pathname.endsWith("/") && pathname !== "/" 
      ? pathname.slice(0, -1) 
      : pathname;
    
    const pageTitle = pageTitles[normalizedPath];
    document.title = pageTitle 
      ? `${pageTitle} | ${SITE_NAME}` 
      : SITE_NAME;
  }, [pathname]);

  // Sayfa değiştiğinde scroll to top (instant)
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    
    // Sayfa değiştiyse en üste git
    if (prevPathRef.current !== pathname) {
      window.scrollTo(0, 0);
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return (
    <LanguageProvider>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </LanguageProvider>
  );
}
