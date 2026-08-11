"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Utensils, Coffee, Users, Wifi, Car, Droplet, Shield, Phone, Heart, UtensilsCrossed, Dumbbell, Sparkles, Briefcase } from "lucide-react";
import { contactInfo } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";

function PageHeader() {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="hidden md:block absolute top-0 left-1/3 w-72 h-72 bg-violet-500/20 rounded-full blur-[100px]" />
      <div className="hidden md:block absolute bottom-0 right-1/3 w-64 h-64 bg-rose-500/20 rounded-full blur-[80px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("services.pageTitle")}</h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{t("services.pageDescription")}</p>
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

function MainServicesSection() {
  const { t } = useTranslation();
  const services = [
    { icon: Utensils, titleKey: "services.restaurantService", descKey: "services.restaurantServiceDesc", image: "/assets/images/Tesisler/Yemek_Hane/1.JPG", featuresKeys: ["services.openBuffet", "services.aLaCarte", "services.groupMenus"] },
    { icon: Coffee, titleKey: "services.observationCafe", descKey: "services.observationCafeDesc", image: "/assets/images/Tesisler/Kafeterya/kafetarya.JPG", featuresKeys: ["services.viewTerrace", "services.hotColdDrinks", "services.desserts", "services.loungeArea"] },
    { icon: Users, titleKey: "services.conferenceService", descKey: "services.conferenceServiceDesc", image: "/assets/images/Tesisler/Konferans_Salonu/konferans_salonu.JPG", featuresKeys: ["services.projectionSystem", "services.soundSystem", "services.highSpeedInternet", "services.technicalSupport"] },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("services.featuredServices")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("services.featuredDesc")}</p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image src={service.image} alt={t(service.titleKey)} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                   {/*  <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t(service.titleKey)}</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">{t(service.descKey)}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.featuresKeys.map((featureKey, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm font-medium">{t(featureKey)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllServicesGrid() {
  const { t } = useTranslation();
  const services = [
    { icon: Clock, titleKey: "services.reception24", descKey: "services.reception24Desc" },
    { icon: Droplet, titleKey: "services.laundry", descKey: "services.laundryDesc" },
    { icon: Shield, titleKey: "services.specialMenu", descKey: "services.specialMenuDesc" },
    { icon: Heart, titleKey: "services.childAccommodation", descKey: "services.childAccommodationDesc" },
    { icon: Wifi, titleKey: "services.freeWifi", descKey: "services.freeWifiDesc" },
    { icon: Car, titleKey: "services.parking", descKey: "services.parkingDesc" },
    { icon: Dumbbell, titleKey: "services.gym", descKey: "services.gymDesc" },
    { icon: UtensilsCrossed, titleKey: "services.roomService", descKey: "services.roomServiceDesc" },
    { icon: Sparkles, titleKey: "services.roomCleaning", descKey: "services.roomCleaningDesc" },
    { icon: Briefcase, titleKey: "services.businessCenter", descKey: "services.businessCenterDesc" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("services.whatWeOffer")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("services.whatWeOfferDesc")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{t(service.titleKey)}</h3>
              <p className="text-sm text-gray-500">{t(service.descKey)}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("services.ctaTitle")}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">{t("services.ctaDesc")}</p>
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

export default function HizmetlerPage() {
  return (
    <>
      <PageHeader />
      <MainServicesSection />
      <AllServicesGrid />
      <CTASection />
    </>
  );
}
