"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Phone, 
  MapPin, 
  ExternalLink
} from "lucide-react";
import { contactInfo } from "@/lib/constants";

// Page Header
function PageHeader() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            İletişim
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Bize ulaşın, ziyaret edin.
          </p>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path d="M0 40L48 37.3C96 34.7 192 29.3 288 26.7C384 24 480 24 576 26.7C672 29.3 768 34.7 864 36C960 37.3 1056 34.7 1152 32C1248 29.3 1344 26.7 1392 25.3L1440 24V40H1392C1344 40 1248 40 1152 40C1056 40 960 40 864 40C768 40 672 40 576 40C480 40 384 40 288 40C192 40 96 40 48 40H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

// Main Content
function ContactContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            {/* Adres ve İletişim Bilgileri */}
            <h2 className="text-xl font-bold text-slate-900 mb-4">Adres ve İletişim Bilgileri</h2>
            
            {/* Phone */}
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-4 w-4 text-slate-400 shrink-0" />
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="text-slate-700 hover:text-primary transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
              <span className="text-slate-700 leading-relaxed">
                {contactInfo.address}
              </span>
            </div>

            {/* Ulaşım */}
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Ulaşım</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                Şehir merkezine {contactInfo.cityCenterDistance} mesafede
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                Havaalanına {contactInfo.airportDistance} mesafede
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                Toplu taşıma araçları ile kolay ulaşım
              </li>
              <li className="flex items-center gap-2 text-slate-600 text-sm">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                Açık ve kapalı otopark imkanı
              </li>
            </ul>

            {/* Haritada Aç Button */}
            <div>
              <a
                href={contactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                Haritada Aç
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right - Map (Interactive) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1234567890!2d44.0456!3d39.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU1JzI0LjIiTiA0NMKwMDInNDAuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Iğdır Uygulama Oteli Konum"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function IletisimPage() {
  return (
    <>
      <PageHeader />
      <ContactContent />
    </>
  );
}
