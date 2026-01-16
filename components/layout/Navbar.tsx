"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { contactInfo } from "@/lib/constants";

// WhatsApp Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// Instagram Icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  const navItems = [
    { labelKey: "nav.home", href: "/" },
    { labelKey: "nav.about", href: "/hakkimizda" },
    { labelKey: "nav.rooms", href: "/odalar-tesisler" },
    { labelKey: "nav.services", href: "/hizmetler" },
    { labelKey: "nav.gallery", href: "/galeri" },
    { labelKey: "nav.contact", href: "/iletisim" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Header - No motion on mobile to prevent jank */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]",
          // Desktop: add shadow on scroll
          "lg:transition-shadow lg:duration-300",
          isScrolled && "lg:shadow-[0_2px_20px_-2px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile: fixed height, Desktop: dynamic height with transition */}
          <div className={cn(
            "flex items-center justify-between",
            // Mobile: fixed height, no transition
            "h-16",
            // Desktop: dynamic height with transition
            "lg:transition-all lg:duration-500",
            isScrolled ? "lg:h-20" : "lg:h-32"
          )}>
            
            {/* Logo */}
            <Link 
              href="/" 
              scroll={false}
              className="shrink-0 flex items-center gap-3 lg:gap-4 group"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              {/* Mobile: fixed size, Desktop: dynamic size */}
              <div className={cn(
                "relative",
                // Mobile: fixed size
                "w-12 h-12",
                // Desktop: dynamic size with transition
                "lg:transition-all lg:duration-500",
                isScrolled ? "lg:w-14 lg:h-14" : "lg:w-24 lg:h-24"
              )}>
                <Image
                  src="/assets/logos/logo_mavi.png"
                  alt="Iğdır Uygulama Oteli"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className={cn(
                  "font-semibold text-slate-900 leading-tight tracking-tight",
                  // Mobile: fixed size
                  "text-sm",
                  // Desktop: dynamic size with transition
                  "lg:transition-all lg:duration-500",
                  isScrolled ? "lg:text-base" : "lg:text-xl"
                )}>
                  {t("brand.hotelName")}
                </span>
                <span className={cn(
                  "text-slate-500 leading-tight tracking-tight",
                  // Mobile: fixed size
                  "text-xs",
                  // Desktop: dynamic size with transition
                  "lg:transition-all lg:duration-500",
                  isScrolled ? "lg:text-xs" : "lg:text-base"
                )}>
                  {t("brand.schoolName")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={false}
                  onClick={(e) => {
                    if (item.href === "/" && pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {t(item.labelKey)}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-0.5 left-5 right-5 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Language Switcher */}
              <LanguageSwitcher variant="icon" />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 transition-colors"
                aria-label={t("common.menu")}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Border - Desktop only */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-px bg-slate-200/60",
          "hidden lg:block lg:transition-opacity lg:duration-500",
          isScrolled ? "lg:opacity-0" : "lg:opacity-100"
        )} />
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[300px] bg-white z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header - Just close button */}
                <div className="flex items-center justify-end px-4 py-3 border-b border-slate-100">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-2">
                  <div className="px-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        scroll={false}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          isActive(item.href)
                            ? "text-primary bg-primary/15"
                            : "text-slate-700 hover:bg-slate-50"
                        )}
                      >
                        {t(item.labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Footer - Social Links */}
                <div className="p-4 border-t border-slate-100">
                  <div className="flex items-center justify-center gap-6">
                    <a
                      href={contactInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </a>
                    <a
                      href={contactInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-pink-600 transition-colors"
                    >
                      <InstagramIcon className="w-5 h-5" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer - Mobile: fixed, Desktop: dynamic */}
      <div className={cn(
        // Mobile: fixed height, no transition
        "h-16",
        // Desktop: dynamic height with transition
        "lg:transition-all lg:duration-500",
        isScrolled ? "lg:h-20" : "lg:h-32"
      )} />
    </>
  );
}
