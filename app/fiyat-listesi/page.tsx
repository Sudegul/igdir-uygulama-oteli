"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Coffee, Check, Users, Bed, Wifi, Wind, Tv, Bath, Sparkles, Info, CreditCard, ChevronLeft, ChevronRight, UtensilsCrossed, Calendar, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";


const priceData = [
  {
    key: "suiteFamily",
    titleKey: "prices.suiteFamily",
    contactForPrice: true,
    images: [
      "/assets/images/Odalar/Suit_Family_room/9a7a750e-d0b1-48ce-a15a-39915834c0f1.JPG",
      "/assets/images/Odalar/Suit_Family_room/c3c45973-f5c4-45a5-9c23-ae942d90323d.JPG",
      "/assets/images/Odalar/Suit_Family_room/df22cf3d-a4dc-46f7-a963-3a346d2d702d.JPG",
      "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
      "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
    ],
    features: ["wifi", "ac", "tv", "minibar"],
  },
  {
    key: "suite",
    titleKey: "roomTypes.suitRoom",
    priceSingle: 1800,
    priceDouble: 3400,
    images: [
      "/assets/images/Odalar/suit_room/1.JPG",
      "/assets/images/Odalar/suit_room/2.jpeg",
      "/assets/images/Odalar/suit_room/3.JPG",
      "/assets/images/Odalar/suit_room/4.JPG",
      "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
      "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
    ],
    features: ["wifi", "ac", "tv", "minibar"],
  },
  {
    key: "double",
    titleKey: "roomTypes.doubleRoom",
    priceSingle: 1400,
    priceDouble: 2700,
    images: [
      "/assets/images/Odalar/double_room/e80096f4-fca4-4eb8-9b17-4459e9527668.JPG",
      "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
      "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
    ],
    features: ["wifi", "ac", "tv", "bath"],
  },
  {
    key: "twin",
    titleKey: "roomTypes.twinRoom",
    priceSingle: 1200,
    priceDouble: 2400,
    images: [
      "/assets/images/Odalar/twin_room/1.JPG",
      "/assets/images/Odalar/twin_room/2.JPG",
      "/assets/images/Odalar/twin_room/3.JPG",
      "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
      "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
    ],
    features: ["wifi", "ac", "tv", "bath"],
  },
  {
    key: "triple",
    titleKey: "roomTypes.tripleRoom",
    pricePerPerson: 1100,
    images: [
      "/assets/images/Odalar/Triple_Room/1.JPG",
      "/assets/images/Odalar/Triple_Room/2.JPG",
      "/assets/images/Odalar/Triple_Room/3.JPG",
      "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
      "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
    ],
    features: ["wifi", "ac", "tv", "bath"],
  },
];

const breakfastPrice = 350;

const featureIcons: Record<string, { icon: typeof Wifi; label: string }> = {
  wifi: { icon: Wifi, label: "Wi-Fi" },
  ac: { icon: Wind, label: "Klima" },
  tv: { icon: Tv, label: "TV" },
  bath: { icon: Bath, label: "Banyo" },
  minibar: { icon: Coffee, label: "Mini Bar" },
};

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-48 overflow-hidden group">
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
            aria-label="Önceki resim"
          >
            <ChevronLeft className="h-5 w-5 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
            aria-label="Sonraki resim"
          >
            <ChevronRight className="h-5 w-5 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Resim ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function PageHeader() {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="hidden md:block absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />
      <div className="hidden md:block absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("prices.pageTitle")}</h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{t("prices.pageDescription")}</p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Coffee className="h-4 w-4 text-amber-400" />
              <span className="text-sm text-white/90">{t("prices.breakfastIncluded")}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Check className="h-4 w-4 text-emerald-400" />
              <span className="text-sm text-white/90">{t("prices.vatIncluded")}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Wifi className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-white/90">{t("prices.freeWifi")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path d="M0 40L48 37.3C96 34.7 192 29.3 288 26.7C384 24 480 24 576 26.7C672 29.3 768 34.7 864 36C960 37.3 1056 34.7 1152 32C1248 29.3 1344 26.7 1392 25.3L1440 24V40H1392C1344 40 1248 40 1152 40C1056 40 960 40 864 40C768 40 672 40 576 40C480 40 384 40 288 40C192 40 96 40 48 40H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

function InfoBanner() {
  const { t } = useTranslation();

  return (
    <section className="py-8 bg-primary/5 border-b border-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <span className="text-sm text-gray-500 block">{t("prices.checkInOutTimes")}</span>
              <span className="font-semibold text-gray-900">{t("prices.checkInTime")} - {t("prices.checkOutTime")}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <Info className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <span className="font-semibold text-gray-900">{t("prices.noPets")}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
              <UtensilsCrossed className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <span className="font-semibold text-gray-900">{t("prices.groupDinner")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceListSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("prices.priceListTitle")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t("prices.priceListDesc")}</p>
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {priceData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20"
            >
              {/* Image Carousel */}
              <div className="relative">
                <ImageCarousel images={item.images} alt={t(item.titleKey)} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{t(item.titleKey)}</h3>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature) => {
                    const featureData = featureIcons[feature];
                    const Icon = featureData.icon;
                    return (
                      <div key={feature} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                        <Icon className="h-3 w-3" />
                        <span>{featureData.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Price */}
                <div className="border-t border-gray-100 pt-4">
                  {"contactForPrice" in item && item.contactForPrice ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="text-lg font-bold text-primary">{t("prices.contactForPriceInfo")}</span>
                      </div>
                      <div className="flex justify-end">
                        <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                          <Coffee className="h-4 w-4" />
                          <span className="text-xs font-medium">{t("prices.withBreakfast")}</span>
                        </div>
                      </div>
                    </div>
                  ) : "pricePerPerson" in item ? (
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{t("prices.perPerson")}</span>
                        </div>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="text-2xl font-bold text-primary">{item.pricePerPerson?.toLocaleString("tr-TR")}</span>
                          <span className="text-gray-500">TL</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                        <Coffee className="h-4 w-4" />
                        <span className="text-xs font-medium">{t("prices.withBreakfast")}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bed className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{t("prices.singlePerson")}</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-primary">{item.priceSingle?.toLocaleString("tr-TR")}</span>
                          <span className="text-gray-500">TL</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{t("prices.doublePerson")}</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-primary">{item.priceDouble?.toLocaleString("tr-TR")}</span>
                          <span className="text-gray-500">TL</span>
                        </div>
                      </div>
                      <div className="flex justify-end pt-2">
                        <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                          <Coffee className="h-4 w-4" />
                          <span className="text-xs font-medium">{t("prices.withBreakfast")}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Services */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{t("prices.extraServices")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Coffee className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 block">{t("prices.breakfastOnly")}</span>
                    <span className="text-xs text-gray-500">{t("prices.forExternalGuests")}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-amber-600">{breakfastPrice}</span>
                  <span className="text-gray-600">TL</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 block">{t("prices.childAccommodation")}</span>
                    <span className="text-xs text-gray-500">{t("prices.upTo7Years")}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-emerald-600">{t("prices.free")}</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Wifi className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900 block">{t("prices.wifiService")}</span>
                    <span className="text-xs text-gray-500">{t("prices.allAreas")}</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-blue-600">{t("prices.free")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Legal Note */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
              <p className="text-gray-600">{t("prices.vatIncluded")}</p>
            </div>
            <p className="text-sm text-gray-500">{t("prices.commissionNote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("prices.ctaTitle")}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{t("prices.ctaDesc")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 group">
                <Phone className="mr-2 h-5 w-5" />
                {contactInfo.phone}
              </Button>
            </a>
            <Link href="/iletisim" scroll={false}>
              <Button size="lg" className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-primary px-8">
                {t("rooms.contactPage")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function FiyatListesiPage() {
  return (
    <>
      <PageHeader />
      <InfoBanner />
      <PriceListSection />
      <InfoSection />
      <CTASection />
    </>
  );
}
