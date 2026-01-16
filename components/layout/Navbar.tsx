"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { contactInfo } from "@/lib/constants";

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

    window.addEventListener("scroll", handleScroll);
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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-[#fafaf9]/98 backdrop-blur-xl shadow-[0_2px_20px_-2px_rgba(0,0,0,0.08)]" 
            : "bg-[#fafaf9]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled ? "h-20" : "h-24 lg:h-32"
          )}>
            
            {/* Logo */}
            <Link 
              href="/" 
              scroll={false}
              className="shrink-0 flex items-center gap-4 group"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <div className={cn(
                "relative transition-all duration-500",
                isScrolled ? "w-14 h-14" : "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
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
                  "font-semibold text-slate-900 leading-tight transition-all duration-500 tracking-tight",
                  isScrolled ? "text-base" : "text-lg lg:text-xl"
                )}>
                  {t("brand.hotelName")}
                </span>
                <span className={cn(
                  "text-slate-500 leading-tight transition-all duration-500 tracking-tight",
                  isScrolled ? "text-xs" : "text-sm lg:text-base"
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
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <LanguageSwitcher variant="icon" />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 transition-all duration-200"
                aria-label={t("common.menu")}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500",
          isScrolled ? "opacity-0" : "opacity-100 bg-slate-200/60"
        )} />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-[#fafaf9] z-50 lg:hidden overflow-hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/60">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/assets/logos/logo_mavi.png"
                        alt="Iğdır Uygulama Oteli"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900 text-sm tracking-tight">{t("brand.hotelName")}</span>
                      <span className="text-xs text-slate-500">{t("brand.schoolName")}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="space-y-1 px-3">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          scroll={false}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200",
                            isActive(item.href)
                              ? "text-primary bg-primary/5"
                              : "text-slate-700 hover:bg-slate-200/50"
                          )}
                        >
                          {t(item.labelKey)}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="p-4 border-t border-slate-200/60 bg-slate-100/50">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{contactInfo.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className={cn(
        "transition-all duration-500",
        isScrolled ? "h-20" : "h-24 lg:h-32"
      )} />
    </>
  );
}
