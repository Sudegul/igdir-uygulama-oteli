"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Bed, 
  Users, 
  Coffee, 
  Utensils, 
  Wifi, 
  Car,
  MapPin,
  Phone,
  Star,
  GraduationCap,
  ChevronRight
} from "lucide-react";
import { contactInfo } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-96px)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
      <div className="hidden md:block absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px] -translate-x-1/3" />
      <div className="hidden md:block absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[130px] translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-96px)] py-12 lg:py-16">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-[1.05] tracking-tight">
              {t("hero.title1")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                {t("hero.title2")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed font-light">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/iletisim" scroll={false}>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-base font-semibold group shadow-xl shadow-amber-500/20 border-0">
                  {t("common.makeReservation")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/hakkimizda" scroll={false}>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-medium border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/30">
                  {t("hero.meetUs")}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-10">
              {[
                { value: "30", labelKey: "hero.modernRooms" },
                { value: "60", labelKey: "hero.bedCapacity" },
                { value: "100+", labelKey: "hero.restaurantCapacity" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs md:text-sm text-slate-400 font-medium">{t(stat.labelKey)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/assets/images/otel_giris.jpg" alt="Iğdır Uygulama Oteli" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-white/95 px-5 py-3 rounded-xl shadow-lg hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t("hero.qualityService")}</div>
                  <div className="text-xs text-slate-500">{t("hero.professionalTeam")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}

function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/assets/images/lobi.jpg" alt="Otel Lobi" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{t("about.educationFocused").split(" ")[0]}</div>
                  <div className="text-sm text-gray-500">{t("about.educationFocused").split(" ").slice(1).join(" ")}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("preview.aboutTitle1")}<br />
              <span className="text-primary">{t("preview.aboutTitle2")}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t("about.description1")}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{t("about.description2")}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Bed, textKey: "facilities.rooms30beds60" },
                { icon: Utensils, textKey: "about.restaurantCapacity" },
                { icon: Users, textKey: "facilities.conferenceHall" },
                { icon: Star, textKey: "about.feature3Title" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{t(item.textKey)}</span>
                </div>
              ))}
            </div>

            <Link href="/hakkimizda" scroll={false}>
              <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">
                {t("common.learnMore")}
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoomsPreview() {
  const { t } = useTranslation();

  const rooms = [
    { titleKey: "rooms.standardRoom", descKey: "preview.standardRoomDesc", image: "/assets/images/tek_kisilik_yatakli_odalar.jpeg", featuresKeys: ["rooms.doubleBed", "rooms.airConditioning", "rooms.freeWifi", "rooms.lcdTv"] },
    { titleKey: "rooms.suiteRoom", descKey: "preview.suiteRoomDesc", image: "/assets/images/cift_kisilik_yatakli_oda.jpg", featuresKeys: ["rooms.sittingArea", "rooms.miniBar", "rooms.smartTv", "rooms.highSpeedWifi"] },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("preview.roomsTitle")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("preview.roomsDesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={room.image} alt={t(room.titleKey)} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(room.titleKey)}</h3>
                <p className="text-gray-600 mb-4">{t(room.descKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {room.featuresKeys.map((featureKey, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{t(featureKey)}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/odalar-tesisler" scroll={false}>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 group">
              {t("preview.seeAllRooms")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const { t } = useTranslation();

  const services = [
    { icon: Utensils, titleKey: "preview.restaurant", descKey: "preview.restaurantDesc", color: "from-amber-500 to-orange-500" },
    { icon: Coffee, titleKey: "preview.observationCafe", descKey: "preview.observationCafeDesc", color: "from-rose-500 to-pink-500" },
    { icon: Users, titleKey: "preview.conferenceHall", descKey: "preview.conferenceHallDesc", color: "from-violet-500 to-purple-500" },
    { icon: Car, titleKey: "preview.parking", descKey: "preview.parkingDesc", color: "from-emerald-500 to-teal-500" },
    { icon: Wifi, titleKey: "preview.freeWifi", descKey: "preview.freeWifiDesc", color: "from-blue-500 to-cyan-500" },
    { icon: Bed, titleKey: "preview.reception24", descKey: "preview.reception24Desc", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="hidden md:block absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("preview.servicesTitle")}</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">{t("preview.servicesDesc")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">{t(service.titleKey)}</h3>
              <p className="text-sm text-slate-400">{t(service.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/hizmetler" scroll={false}>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-base group font-semibold shadow-lg shadow-amber-500/20 border-0">
              {t("preview.seeAllServices")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const { t } = useTranslation();

  const galleryImages = [
    { src: "/assets/images/lobi_2.jpg", span: "col-span-2 row-span-2" },
    { src: "/assets/images/oturma_alani.jpg", span: "col-span-1" },
    { src: "/assets/images/restoran_cafe.jpg", span: "col-span-1" },
    { src: "/assets/images/konferans.JPG", span: "col-span-1" },
    { src: "/assets/images/kafetarya.JPG", span: "col-span-1" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("cta.fromOurFacility")}</h2>
          <Link href="/galeri" scroll={false} className="mt-4 md:mt-0">
            <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">
              {t("cta.allGallery")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className={`relative aspect-square rounded-xl overflow-hidden group cursor-pointer ${img.span}`}>
              <Image src={img.src} alt={`${t("nav.gallery")} ${index + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
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
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/assets/images/agri_dagi_2.jpeg" alt="CTA Background" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
          </div>

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("cta.callForReservation")}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{t("cta.unforgettableExperience")}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg group">
                  <Phone className="mr-2 h-5 w-5" />
                  {contactInfo.phone}
                </Button>
              </a>
              <Link href="/iletisim" scroll={false}>
                <Button size="lg" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  {t("cta.locationAndContact")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <RoomsPreview />
      <ServicesPreview />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
