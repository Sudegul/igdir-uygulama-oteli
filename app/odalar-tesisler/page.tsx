"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bed, Users, Coffee, Wifi, Tv, Wind, Bath, Phone, UtensilsCrossed, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { contactInfo } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

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
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
            aria-label="Önceki resim"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
            aria-label="Sonraki resim"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-6"
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("rooms.pageTitle")}</h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{t("rooms.pageDescription")}</p>
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

function RoomsSection() {
  const { t } = useTranslation();
  const rooms = [
    {
      titleKey: "roomTypes.suiteFamilyRoom",
      contactForPrice: true,
      images: [
        "/assets/images/Odalar/Suit_Family_room/9a7a750e-d0b1-48ce-a15a-39915834c0f1.JPG",
        "/assets/images/Odalar/Suit_Family_room/c3c45973-f5c4-45a5-9c23-ae942d90323d.JPG",
        "/assets/images/Odalar/Suit_Family_room/df22cf3d-a4dc-46f7-a963-3a346d2d702d.JPG",
        "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
        "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
      ],
      features: [
        { icon: Bed, textKey: "rooms.kingSizeBed" },
        { icon: Users, textKey: "rooms.sittingArea" },
        { icon: Wind, textKey: "rooms.airConditioning" },
        { icon: Wifi, textKey: "rooms.highSpeedWifi" },
        { icon: Tv, textKey: "rooms.smartTv" },
        { icon: UtensilsCrossed, textKey: "rooms.miniBar" },
      ],
    },
    {
      titleKey: "roomTypes.suitRoom",
      descKey: "roomTypes.suitRoomDesc",
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
      features: [
        { icon: Bed, textKey: "rooms.kingSizeBed" },
        { icon: Wind, textKey: "rooms.airConditioning" },
        { icon: Wifi, textKey: "rooms.highSpeedWifi" },
        { icon: Tv, textKey: "rooms.smartTv" },
        { icon: Bath, textKey: "rooms.privateBathroom" },
        { icon: UtensilsCrossed, textKey: "rooms.miniBar" },
      ],
    },
    {
      titleKey: "roomTypes.doubleRoom",
      descKey: "roomTypes.doubleRoomDesc",
      priceSingle: 1400,
      priceDouble: 2700,
      images: [
        "/assets/images/Odalar/double_room/e80096f4-fca4-4eb8-9b17-4459e9527668.JPG",
        "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
        "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
      ],
      features: [
        { icon: Bed, textKey: "rooms.doubleBed" },
        { icon: Wind, textKey: "rooms.airConditioning" },
        { icon: Wifi, textKey: "rooms.freeWifi" },
        { icon: Tv, textKey: "rooms.lcdTv" },
        { icon: Bath, textKey: "rooms.privateBathroom" },
        { icon: Coffee, textKey: "rooms.teaCoffee" },
      ],
    },
    {
      titleKey: "roomTypes.doublePlusOneRoom",
      descKey: "roomTypes.doublePlusOneRoomDesc",
      priceSingle: 1400,
      priceDouble: 2700,
      images: [
        "/assets/images/Odalar/double+1_room/1.JPG",
        "/assets/images/Odalar/double+1_room/2.JPG",
        "/assets/images/Odalar/double+1_room/3.JPG",
        "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
        "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
      ],
      features: [
        { icon: Bed, textKey: "rooms.doubleBed" },
        { icon: Bed, textKey: "roomTypes.extraBed" },
        { icon: Wind, textKey: "rooms.airConditioning" },
        { icon: Wifi, textKey: "rooms.freeWifi" },
        { icon: Tv, textKey: "rooms.lcdTv" },
        { icon: Bath, textKey: "rooms.privateBathroom" },
      ],
    },
    {
      titleKey: "roomTypes.twinRoom",
      descKey: "roomTypes.twinRoomDesc",
      priceSingle: 1200,
      priceDouble: 2400,
      images: [
        "/assets/images/Odalar/twin_room/1.JPG",
        "/assets/images/Odalar/twin_room/2.JPG",
        "/assets/images/Odalar/twin_room/3.JPG",
        "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
        "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
      ],
      features: [
        { icon: Bed, textKey: "rooms.twinBeds" },
        { icon: Wind, textKey: "rooms.airConditioning" },
        { icon: Wifi, textKey: "rooms.freeWifi" },
        { icon: Tv, textKey: "rooms.lcdTv" },
        { icon: Bath, textKey: "rooms.privateBathroom" },
        { icon: Coffee, textKey: "rooms.teaCoffee" },
      ],
    },
    {
      titleKey: "roomTypes.tripleRoom",
      descKey: "roomTypes.tripleRoomDesc",
      pricePerPerson: 1100,
      images: [
        "/assets/images/Odalar/Triple_Room/1.JPG",
        "/assets/images/Odalar/Triple_Room/2.JPG",
        "/assets/images/Odalar/Triple_Room/3.JPG",
        "/assets/images/Odalar/Banyo/0c49dc1a-b873-4baa-b3bb-9711c372a61e.JPG",
        "/assets/images/Odalar/Banyo/692ad861-ac44-4b08-9134-79dcf84f5fbd.JPG",
      ],
      features: [
        { icon: Bed, textKey: "rooms.tripleBeds" },
        { icon: Wind, textKey: "rooms.airConditioning" },
        { icon: Wifi, textKey: "rooms.freeWifi" },
        { icon: Tv, textKey: "rooms.lcdTv" },
        { icon: Bath, textKey: "rooms.privateBathroom" },
        { icon: Coffee, textKey: "rooms.teaCoffee" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("rooms.comfortableRooms")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("rooms.roomsDescription")}</p>
        </div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <ImageCarousel images={room.images} alt={t(room.titleKey)} />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t(room.titleKey)}</h3>

                {/* Price Info */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">{t("rooms.priceInfo")}</h4>
                  {"contactForPrice" in room && room.contactForPrice ? (
                    <span className="text-xl font-bold text-primary">{t("prices.contactUs")}</span>
                  ) : "pricePerPerson" in room && room.pricePerPerson ? (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{room.pricePerPerson.toLocaleString("tr-TR")} TL</span>
                      <span className="text-gray-500">/ {t("rooms.perPerson")}</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-500 block mb-1">{t("rooms.singlePerson")}</span>
                        <span className="text-xl font-bold text-primary">{"priceSingle" in room && room.priceSingle?.toLocaleString("tr-TR")} TL</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 block mb-1">{t("rooms.doublePerson")}</span>
                        <span className="text-xl font-bold text-primary">{"priceDouble" in room && room.priceDouble?.toLocaleString("tr-TR")} TL</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-gray-700 font-medium">{t(feature.textKey)}</span>
                    </div>
                  ))}
                </div>
                <Link href="/iletisim" scroll={false}>
                  <Button className="bg-primary hover:bg-primary/90 text-white group">
                    {t("common.makeReservation")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const { t } = useTranslation();
  const facilities = [
    {
      titleKey: "rooms.restaurantFoyer",
      descKey: "rooms.restaurantFoyerDesc",
      images: [
        "/assets/images/Tesisler/Yemek_Hane/1.JPG",
        "/assets/images/Tesisler/Yemek_Hane/2.JPG",
        "/assets/images/Tesisler/Yemek_Hane/3.JPG",
      ]
    },
    {
      titleKey: "rooms.meetingRooms",
      descKey: "rooms.meetingRoomsDesc",
      images: [
        "/assets/images/Tesisler/Toplantı_Odası/1.JPG",
        "/assets/images/Tesisler/Toplantı_Odası/2.jpg",
        "/assets/images/Tesisler/Toplantı_Odası/3.jpg",
      ]
    },
    {
      titleKey: "rooms.conferenceHall",
      descKey: "rooms.conferenceHallDesc",
      images: [
        "/assets/images/Tesisler/Konferans_Salonu/konferans_salonu.JPG",
        "/assets/images/Tesisler/Konferans_Salonu/konferans.JPG",
        "/assets/images/Tesisler/Konferans_Salonu/konferans_2.JPG",
        "/assets/images/Tesisler/Konferans_Salonu/konferans_3.JPG",
      ]
    },
    {
      titleKey: "rooms.cafeteria",
      descKey: "rooms.cafeteriaDesc",
      images: [
        "/assets/images/Tesisler/Kafeterya/kafetarya.JPG",
        "/assets/images/Tesisler/Kafeterya/kafetarya_2.JPG",
      ]
    },
    {
      titleKey: "rooms.gym",
      descKey: "rooms.gymDesc",
      images: [
        "/assets/images/Tesisler/Spor_Salonu/spor_salonu.jpeg",
        "/assets/images/Tesisler/Spor_Salonu/kosu_bandi.JPG",
        "/assets/images/Tesisler/Spor_Salonu/spor_aletleri.JPG",
      ]
    },
    {
      titleKey: "rooms.terrace",
      descKey: "rooms.terraceDesc",
      images: [
        "/assets/images/Tesisler/Teras/bahce.JPG",
        "/assets/images/Tesisler/Teras/bahce_2.JPG",
        "/assets/images/Tesisler/Teras/bahce_3.JPG",
      ]
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("rooms.hotelFacilities")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("rooms.facilitiesDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ facility, t }: { facility: { titleKey: string; descKey: string; images: string[] }; t: (key: string) => string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? facility.images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === facility.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={facility.images[currentIndex]}
          alt={t(facility.titleKey)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {facility.images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
              aria-label="Önceki"
            >
              <ChevronLeft className="h-5 w-5 text-gray-800" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
              aria-label="Sonraki"
            >
              <ChevronRight className="h-5 w-5 text-gray-800" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {facility.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? "bg-white w-3" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t(facility.titleKey)}</h3>
        <p className="text-gray-600">{t(facility.descKey)}</p>
      </div>
    </div>
  );
}

function LobbySection() {
  const { t } = useTranslation();
  const lobbyImages = [
    "/assets/images/Tesisler/Lobi/reception.jpg",
    "/assets/images/Tesisler/Lobi/lobi_7.JPG",
    "/assets/images/Tesisler/Lobi/lobi_8.JPG",
    "/assets/images/Tesisler/Lobi/lobi.jpg",
    "/assets/images/Tesisler/Lobi/lobi_2.jpg",
    "/assets/images/Tesisler/Lobi/lobi_3.jpg",
    "/assets/images/Tesisler/Lobi/lobi_4.jpg",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("rooms.lobbyArea")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("rooms.lobbyDesc")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {lobbyImages.map((img, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <Image src={img} alt={`Lobi ${index + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  const { t } = useTranslation();
  const amenitiesKeys = [
    "rooms.reception24", "rooms.freeWifi", "rooms.airConditioning", "rooms.lcdTv",
    "rooms.miniBar", "rooms.laundry", "rooms.dryCleaning", "rooms.mosque",
    "rooms.freeChildAccommodation", "rooms.specialMenu", "rooms.roomService", "rooms.mountainView",
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t("rooms.roomAmenities")}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenitiesKeys.map((amenityKey, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
              <Check className="h-5 w-5 text-accent shrink-0" />
              <span>{t(amenityKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("rooms.ctaTitle")}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">{t("rooms.ctaDesc")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 group">
                <Phone className="mr-2 h-5 w-5" />
                {contactInfo.phone}
              </Button>
            </a>
            <Link href="/iletisim" scroll={false}>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                {t("rooms.contactPage")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OdalarTesislerPage() {
  return (
    <>
      <PageHeader />
      <RoomsSection />
      <FacilitiesSection />
      <LobbySection />
      <AmenitiesSection />
      <CTASection />
    </>
  );
}
