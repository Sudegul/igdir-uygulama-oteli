"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const galleryImageKeys = [
  // Lobi
  { src: "/assets/images/Tesisler/Lobi/reception.jpg", titleKey: "gallery.reception" },
  { src: "/assets/images/Tesisler/Lobi/lobi_7.JPG", titleKey: "gallery.mainLobby" },
  { src: "/assets/images/Tesisler/Lobi/lobi_8.JPG", titleKey: "gallery.lobbyView" },
  { src: "/assets/images/Tesisler/Lobi/lobi.jpg", titleKey: "gallery.lobbyDetail" },
  { src: "/assets/images/Tesisler/Lobi/lobi_2.jpg", titleKey: "gallery.lobbyCorner" },
  { src: "/assets/images/Tesisler/Lobi/lobi_3.jpg", titleKey: "gallery.lobbyArea" },
  // Odalar
  { src: "/assets/images/Odalar/Suit_Family_room/9a7a750e-d0b1-48ce-a15a-39915834c0f1.JPG", titleKey: "gallery.suiteRoom" },
  { src: "/assets/images/Odalar/double_room/e80096f4-fca4-4eb8-9b17-4459e9527668.JPG", titleKey: "gallery.doubleRoom" },
  { src: "/assets/images/Odalar/twin_room/1.JPG", titleKey: "gallery.singleRoom" },
  { src: "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG", titleKey: "gallery.bathroom" },
  { src: "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG", titleKey: "gallery.bathroomDetail" },
  // Tesisler
  { src: "/assets/images/Tesisler/Resepsiyon/resepsiyon.jpg", titleKey: "gallery.reception" },
  { src: "/assets/images/Tesisler/Resepsiyon/resepsiyon_2.jpg", titleKey: "gallery.receptionArea" },
  { src: "/assets/images/Tesisler/Kafeterya/kafetarya.JPG", titleKey: "gallery.cafeteria" },
  { src: "/assets/images/Tesisler/Kafeterya/kafetarya_2.JPG", titleKey: "gallery.cafeteriaView" },
  { src: "/assets/images/Tesisler/Konferans_Salonu/konferans_salonu.JPG", titleKey: "gallery.conferenceHall" },
  { src: "/assets/images/Tesisler/Konferans_Salonu/konferans.JPG", titleKey: "gallery.eventHall" },
  { src: "/assets/images/Tesisler/Toplantı_Odası/1.JPG", titleKey: "gallery.meetingRoom" },
  { src: "/assets/images/Tesisler/Toplantı_Odası/2.jpg", titleKey: "gallery.businessMeetingRoom" },
  { src: "/assets/images/Tesisler/Yemek_Hane/1.JPG", titleKey: "gallery.restaurant" },
  { src: "/assets/images/Tesisler/Yemek_Hane/2.JPG", titleKey: "gallery.diningArea" },
  { src: "/assets/images/Tesisler/Spor_Salonu/spor_salonu.jpeg", titleKey: "gallery.lounge" },
  { src: "/assets/images/Tesisler/Teras/bahce.JPG", titleKey: "gallery.sittingArea" },
  { src: "/assets/images/Tesisler/Teras/bahce_2.JPG", titleKey: "gallery.restArea" },
  { src: "/assets/images/Tesisler/Lobi/oturma_alani.jpg", titleKey: "gallery.lobbyPanorama" },
];

const layoutPattern = [
  { colSpan: 2, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
];

const VISIBLE_COUNT = 9;

function PageHeader() {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="hidden md:block absolute top-0 right-1/3 w-72 h-72 bg-rose-500/20 rounded-full blur-[100px]" />
      <div className="hidden md:block absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("gallery.pageTitle")}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("gallery.pageDescription")}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 40L48 37.3C96 34.7 192 29.3 288 26.7C384 24 480 24 576 26.7C672 29.3 768 34.7 864 36C960 37.3 1056 34.7 1152 32C1248 29.3 1344 26.7 1392 25.3L1440 24V40H1392C1344 40 1248 40 1152 40C1056 40 960 40 864 40C768 40 672 40 576 40C480 40 384 40 288 40C192 40 96 40 48 40H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

function GalleryImage({ 
  image, 
  layout, 
  onClick, 
  isLast,
  remainingCount,
  t 
}: { 
  image: typeof galleryImageKeys[0];
  layout: typeof layoutPattern[0];
  onClick: () => void;
  isLast: boolean;
  remainingCount: number;
  t: (key: string) => string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const getGridClasses = () => {
    const classes = [];
    if (layout.colSpan === 2) classes.push("col-span-2");
    else classes.push("col-span-1");
    if (layout.rowSpan === 2) classes.push("row-span-2");
    else classes.push("row-span-1");
    return classes.join(" ");
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${getGridClasses()}`}
      style={{ minHeight: layout.rowSpan === 2 ? "320px" : "150px" }}
      onClick={onClick}
    >
      {!isLoaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      
      <Image
        src={image.src}
        alt={t(image.titleKey)}
        fill
        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 768px) 50vw, 33vw"
        onLoad={() => setIsLoaded(true)}
      />
      
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />

      {isLast && remainingCount > 0 && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl md:text-5xl font-bold text-white">+{remainingCount}</span>
            <p className="text-white/80 text-sm mt-1">{t("common.more")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const visibleImages = galleryImageKeys.slice(0, VISIBLE_COUNT);
  const remainingCount = galleryImageKeys.length - VISIBLE_COUNT;

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxOpen]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % galleryImageKeys.length);
  const handlePrevious = () => setCurrentIndex((prev) => (prev - 1 + galleryImageKeys.length) % galleryImageKeys.length);

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

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {visibleImages.map((image, index) => (
            <GalleryImage
              key={image.src}
              image={image}
              layout={layoutPattern[index]}
              onClick={() => { setCurrentIndex(index); setLightboxOpen(true); }}
              isLast={index === VISIBLE_COUNT - 1}
              remainingCount={remainingCount}
              t={t}
            />
          ))}
        </div>

        <div className="text-center mt-10 text-gray-500">
          {t("common.total")} {galleryImageKeys.length} {t("common.images")}
        </div>
      </div>

      {lightboxOpen && (
        <>
          <div onClick={() => setLightboxOpen(false)} className="fixed inset-0 bg-black/95 z-50" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            <Button variant="ghost" size="icon" onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 text-white hover:bg-white/20 z-10">
              <X className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handlePrevious} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10">
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleNext} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10">
              <ChevronRight className="h-8 w-8" />
            </Button>
            <Image
              src={galleryImageKeys[currentIndex].src}
              alt={t(galleryImageKeys[currentIndex].titleKey)}
              width={1200}
              height={800}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              priority
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-5 py-2 rounded-full text-sm text-gray-700 font-medium">
              {currentIndex + 1} / {galleryImageKeys.length}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default function GaleriPage() {
  return (
    <>
      <PageHeader />
      <GallerySection />
    </>
  );
}
