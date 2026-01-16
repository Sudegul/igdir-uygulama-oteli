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
  const scrollPosRef = useRef(0);
  const isFirstMount = useRef(true);

  // Dinamik sayfa başlığı
  useEffect(() => {
    // Trailing slash'ı kaldır (next.config'de trailingSlash: true olduğu için)
    const normalizedPath = pathname.endsWith("/") && pathname !== "/" 
      ? pathname.slice(0, -1) 
      : pathname;
    
    const pageTitle = pageTitles[normalizedPath];
    if (pageTitle) {
      document.title = `${pageTitle} | ${SITE_NAME}`;
    } else {
      document.title = SITE_NAME;
    }
  }, [pathname]);

  // Sayfa yüklendiğinde (refresh dahil) scroll to top
  useEffect(() => {
    // Tarayıcı scroll restoration'ı kapat
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // İlk yüklemede scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
    isFirstMount.current = false;
  }, []);

  // Sayfa değişmeden önce scroll pozisyonunu kaydet
  useEffect(() => {
    const handleBeforeNavigate = () => {
      scrollPosRef.current = window.scrollY;
    };

    document.addEventListener("click", handleBeforeNavigate);
    return () => document.removeEventListener("click", handleBeforeNavigate);
  }, []);

  // Sayfa değiştiğinde smooth scroll
  useEffect(() => {
    // İlk mount'ta veya aynı sayfa ise bir şey yapma
    if (isFirstMount.current || prevPathRef.current === pathname) return;
    
    // Önceki scroll pozisyonundan başla
    const startPos = Math.min(scrollPosRef.current, 300);
    
    // Önce o pozisyona git (instant)
    if (startPos > 0) {
      window.scrollTo({ top: startPos, behavior: "instant" });
    }
    
    // Sonra smooth scroll ile yukarı çık
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 10);
    });

    prevPathRef.current = pathname;
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

