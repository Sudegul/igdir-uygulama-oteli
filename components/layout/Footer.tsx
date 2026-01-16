"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, Clock, ExternalLink } from "lucide-react";
import { contactInfo } from "@/lib/constants";

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Odalar & Tesisler", href: "/odalar-tesisler" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];

const facilities = [
  "30 Oda, 60 Yatak",
  "Konferans Salonu",
  "Restoran & Kafeterya",
  "Ücretsiz Wi-Fi",
  "Spor Salonu",
  "Otopark",
];

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" scroll={false} className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-2 border-white/30 p-2 md:p-2.5 lg:p-3">
                <Image
                  src="/assets/logos/logo_mavi.png"
                  alt="Iğdır Uygulama Oteli"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  Uygulama Oteli
                </span>
                <span className="text-xs text-gray-400 leading-tight">
                  TOBB Turizm MTAL
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Türkiye Odalar ve Borsalar Birliği Turizm Mesleki ve Teknik Anadolu Lisesi
              Uygulama Oteli olarak turizm eğitimi ve konaklama hizmetlerinde öncü bir kurumuz.
            </p>
           {/*  <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="h-4 w-4 text-accent" />
              <span>Açılış: {contactInfo.openingDate}</span>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-1 h-5 bg-accent rounded-full" />
              Hızlı Linkler
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={false}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-1 h-5 bg-accent rounded-full" />
              Tesislerimiz
            </h4>
            <ul className="space-y-3">
              {facilities.map((facility) => (
                <li key={facility} className="text-sm text-gray-400 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
                  {facility}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <div className="w-1 h-5 bg-accent rounded-full" />
              İletişim
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">Telefon</span>
                    <span className="font-medium">{contactInfo.phone}</span>
                  </div>
                </a>
              </li>
             {/*  <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                    <Mail className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">E-posta</span>
                    <span className="font-medium">{contactInfo.email}</span>
                  </div>
                </a>
              </li> */}
              <li>
                <a
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">Adres</span>
                    <span className="font-medium line-clamp-2">{contactInfo.address}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {currentYear} Iğdır TOBB Turizm Mesleki ve Teknik Anadolu Lisesi Uygulama Oteli. Tüm hakları saklıdır.
            </p>
            {/* <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Kullanım Koşulları
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
