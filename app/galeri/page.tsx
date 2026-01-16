"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

// Gallery images - karışık sıralama
const galleryImages = [
  { src: "/assets/images/otel_giris.jpg", title: "Otel Girişi" },
  { src: "/assets/images/lobi.jpg", title: "Ana Lobi" },
  { src: "/assets/images/cift_kisilik_yatakli_oda.jpg", title: "Çift Kişilik Oda" },
  { src: "/assets/images/resepsiyon.jpg", title: "Resepsiyon" },
  { src: "/assets/images/kafetarya.JPG", title: "Kafeterya" },
  { src: "/assets/images/banyo.jpg", title: "Banyo" },
  { src: "/assets/images/konferans.JPG", title: "Konferans Salonu" },
  { src: "/assets/images/oturma_alani.jpg", title: "Oturma Alanı" },
  { src: "/assets/images/restoran_cafe.jpg", title: "Restoran" },
  { src: "/assets/images/lobi_2.jpg", title: "Lobi Görünümü" },
  { src: "/assets/images/tek_kisilik_yatakli_odalar.jpeg", title: "Tek Kişilik Oda" },
  { src: "/assets/images/toplanti_salonu.jpg", title: "Toplantı Salonu" },
  { src: "/assets/images/resepsiyon_2.jpg", title: "Resepsiyon Alanı" },
  { src: "/assets/images/lobi_3.jpg", title: "Lobi Detay" },
  { src: "/assets/images/cift_kisilik_oda_2.jpeg", title: "Süit Oda" },
  { src: "/assets/images/kafetarya_2.JPG", title: "Kafeterya Görünümü" },
  { src: "/assets/images/banyo_2.jpg", title: "Banyo Detay" },
  { src: "/assets/images/konferans_2.JPG", title: "Toplantı Odası" },
  { src: "/assets/images/oturma_alani_2.jpg", title: "Lounge" },
  { src: "/assets/images/lobi_4.jpg", title: "Lobi Köşesi" },
  { src: "/assets/images/oda_giris.jpg", title: "Oda Girişi" },
  { src: "/assets/images/resepsiyon_3.jpg", title: "Resepsiyon Detay" },
  { src: "/assets/images/dus_banyo.jpg", title: "Duş Alanı" },
  { src: "/assets/images/lobi_5.JPG", title: "Lobi Alanı" },
  { src: "/assets/images/konferans_3.JPG", title: "Etkinlik Salonu" },
  { src: "/assets/images/oturma_alani_3.jpg", title: "Dinlenme Alanı" },
  { src: "/assets/images/restoran_cafe_3.jpg", title: "Yemek Alanı" },
  { src: "/assets/images/lobi_6.jpeg", title: "Lobi Panorama" },
  { src: "/assets/images/tek_kisilik_yataklı_odalar.jpg", title: "Standart Oda" },
  { src: "/assets/images/toplanti_salonu_2.jpg", title: "İş Toplantı Odası" },
];

// 4 sütunlu grid için layout - 8 görsel
// Row 1: [0-büyük] [0-devam] [1] [2]
// Row 2: [0-devam] [0-devam] [3] [4]
// Row 3: [5]       [6]       [7] [8-son +X]
const layoutPattern = [
  { colSpan: 2, rowSpan: 2 }, // 0 - Sol üst büyük kare
  { colSpan: 1, rowSpan: 1 }, // 1
  { colSpan: 1, rowSpan: 1 }, // 2
  { colSpan: 1, rowSpan: 1 }, // 3
  { colSpan: 1, rowSpan: 1 }, // 4
  { colSpan: 1, rowSpan: 1 }, // 5
  { colSpan: 1, rowSpan: 1 }, // 6
  { colSpan: 1, rowSpan: 1 }, // 7
  { colSpan: 1, rowSpan: 1 }, // 8 - Sağ alt (+X overlay)
];

const VISIBLE_COUNT = 9; // Görünür görsel sayısı

// Page Header
function PageHeader() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-rose-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Fotoğraf Galerisi
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Tesislerimizden ve otelimizden kareler.
          </p>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 40L48 37.3C96 34.7 192 29.3 288 26.7C384 24 480 24 576 26.7C672 29.3 768 34.7 864 36C960 37.3 1056 34.7 1152 32C1248 29.3 1344 26.7 1392 25.3L1440 24V40H1392C1344 40 1248 40 1152 40C1056 40 960 40 864 40C768 40 672 40 576 40C480 40 384 40 288 40C192 40 96 40 48 40H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

// Single Image Component with Loading State
function GalleryImage({ 
  image, 
  index, 
  layout, 
  onClick, 
  isLast,
  remainingCount 
}: { 
  image: typeof galleryImages[0];
  index: number;
  layout: typeof layoutPattern[0];
  onClick: () => void;
  isLast: boolean;
  remainingCount: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getGridClasses = () => {
    const classes = [];
    
    // Mobile için basit grid
    if (layout.colSpan === 2) classes.push("col-span-2");
    else classes.push("col-span-1");
    
    if (layout.rowSpan === 2) classes.push("row-span-2");
    else classes.push("row-span-1");
    
    return classes.join(" ");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${getGridClasses()}`}
      style={{ minHeight: layout.rowSpan === 2 ? "320px" : "150px" }}
      onClick={onClick}
    >
      {/* Skeleton */}
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {/* Image */}
      <Image
        src={image.src}
        alt={image.title}
        fill
        className={`object-cover transition-all duration-500 group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 768px) 50vw, 33vw"
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* "+X Daha" Overlay for last image */}
      {isLast && remainingCount > 0 && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-bold text-white">+{remainingCount}</span>
            <p className="text-white/80 text-sm mt-1">daha fazla</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Gallery Section
function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = galleryImages.slice(0, VISIBLE_COUNT);
  const remainingCount = galleryImages.length - VISIBLE_COUNT;

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowLeft") handlePrevious();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") setLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  // Touch support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrevious();
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Masonry Grid - 4 sütun */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {visibleImages.map((image, index) => {
            // Son görsel (index 7) sağ altta olacak şekilde düzen
            const layout = layoutPattern[index];
            return (
              <GalleryImage
                key={image.src}
                image={image}
                index={index}
                layout={layout}
                onClick={() => openLightbox(index)}
                isLast={index === VISIBLE_COUNT - 1}
                remainingCount={remainingCount}
              />
            );
          })}
        </div>

        {/* Info */}
        <div className="text-center mt-10 text-gray-500">
          Toplam {galleryImages.length} görsel
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
              onClick={(e) => {
                if (e.target === e.currentTarget) setLightboxOpen(false);
              }}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:bg-white/20 z-10"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </Button>

              {/* Navigation */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrevious}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </Button>

              {/* Image Container */}
              <div 
                className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={galleryImages[currentIndex].src}
                      alt={galleryImages[currentIndex].title}
                      width={1200}
                      height={800}
                      className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Info Bar */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm text-gray-700 shadow-lg font-medium">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

// Main Page Component
export default function GaleriPage() {
  return (
    <>
      <PageHeader />
      <GallerySection />
    </>
  );
}
