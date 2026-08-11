"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bed, Users, Mountain, Target, Heart, Building, Star, MapPin, Plane } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

function PageHeader() {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="hidden md:block absolute top-0 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px]" />
      <div className="hidden md:block absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{t("about.pageTitle")}</h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{t("about.pageDescription")}</p>
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

function AboutContent() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("about.pioneerTitle")}<br />
            <span className="text-primary">{t("about.pioneerSubtitle")}</span>
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>{t("about.content1")}</p>
            <p>{t("about.content2")}</p>
            <p>{t("about.content3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { t } = useTranslation();
  const stats = [
    { icon: Bed, value: "30", labelKey: "about.rooms", suffix: "" },
    { icon: Users, value: "60", labelKey: "about.bedCapacity", suffix: "" },
    { icon: Building, value: "100", labelKey: "about.restaurantCapacity", suffix: "+" },
    { icon: MapPin, value: "5.7", labelKey: "about.toCityCenter", suffix: " km" },
    { icon: Plane, value: "22", labelKey: "about.toAirport", suffix: " km" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}{stat.suffix}</div>
              <div className="text-sm text-gray-500">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const { t } = useTranslation();
  const cards = [
    { icon: Target, titleKey: "about.missionTitle", descKey: "about.missionDesc", color: "bg-primary" },
    { icon: Mountain, titleKey: "about.visionTitle", descKey: "about.visionDesc", color: "bg-accent" },
    { icon: Heart, titleKey: "about.valuesTitle", descKey: "about.valuesDesc", color: "bg-terracotta" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("about.missionTitle")}, {t("about.visionTitle")} & {t("about.valuesTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className={`w-14 h-14 mb-6 rounded-xl ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <card.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t(card.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed">{t(card.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { t } = useTranslation();
  const features = [
    { icon: Mountain, titleKey: "about.feature3Title", descKey: "about.feature3Desc" },
    { icon: Star, titleKey: "about.feature4Title", descKey: "about.feature4Desc" },
    { icon: Users, titleKey: "about.feature5Title", descKey: "about.feature5Desc" },
    { icon: Building, titleKey: "about.feature6Title", descKey: "about.feature6Desc" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-slate-800 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t("about.featuresTitle")}</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">{t("about.featuresDesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 mb-5 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <feature.icon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t(feature.titleKey)}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t(feature.descKey)}</p>
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
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("about.ctaTitle")}</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">{t("about.ctaDesc")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim" scroll={false}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 group">
                {t("common.getInTouch")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/odalar-tesisler" scroll={false}>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                {t("about.viewRooms")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader />
      <AboutContent />
      <StatsSection />
      <MissionVision />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
