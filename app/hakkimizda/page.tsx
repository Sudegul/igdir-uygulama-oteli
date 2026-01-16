"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Bed, 
  Users, 
  GraduationCap, 
  Award,
  Mountain,
  Target,
  Heart,
  Building,
  Star,
  BookOpen
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslation } from "@/lib/i18n";

// Page Header Component
function PageHeader() {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="hidden md:block absolute top-0 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px]" />
      <div className="hidden md:block absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]" />
      
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
            {t("about.pageTitle")}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("about.pageDescription")}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 40L48 37.3C96 34.7 192 29.3 288 26.7C384 24 480 24 576 26.7C672 29.3 768 34.7 864 36C960 37.3 1056 34.7 1152 32C1248 29.3 1344 26.7 1392 25.3L1440 24V40H1392C1344 40 1248 40 1152 40C1056 40 960 40 864 40C768 40 672 40 576 40C480 40 384 40 288 40C192 40 96 40 48 40H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

// About Content Section
function AboutContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("about.pioneerTitle")}
              <br />
              <span className="text-primary">{t("about.pioneerSubtitle")}</span>
            </h2>
            
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>{t("about.content1")}</p>
              <p>{t("about.content2")}</p>
              <p>{t("about.content3")}</p>
              <p>{t("about.content4")}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-hotel-lg">
              <Image
                src="/assets/images/otel_giris.jpg"
                alt="Otel Dış Görünüm"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-[4/3] rounded-xl overflow-hidden shadow-hotel-lg border-4 border-white hidden md:block">
              <Image
                src="/assets/images/lobi.jpg"
                alt="Otel Lobi"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const stats = [
    { icon: Bed, value: "30", labelKey: "about.rooms", suffix: "" },
    { icon: Users, value: "60", labelKey: "about.bedCapacity", suffix: "" },
    { icon: Building, value: "100", labelKey: "about.restaurantCapacity", suffix: "+" },
    { icon: GraduationCap, value: "5", labelKey: "about.starInternship", suffix: "★" },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center p-6 bg-white rounded-2xl shadow-hotel"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-500">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Mission & Vision Section
function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const cards = [
    {
      icon: Target,
      titleKey: "about.missionTitle",
      descKey: "about.missionDesc",
      color: "bg-primary",
    },
    {
      icon: Mountain,
      titleKey: "about.visionTitle",
      descKey: "about.visionDesc",
      color: "bg-accent",
    },
    {
      icon: Heart,
      titleKey: "about.valuesTitle",
      descKey: "about.valuesDesc",
      color: "bg-terracotta",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("about.missionTitle")}, {t("about.visionTitle")} & {t("about.valuesTitle")}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-hotel-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 mb-6 rounded-xl ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <card.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t(card.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed">{t(card.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const features = [
    { icon: GraduationCap, titleKey: "about.feature1Title", descKey: "about.feature1Desc" },
    { icon: Award, titleKey: "about.feature2Title", descKey: "about.feature2Desc" },
    { icon: Mountain, titleKey: "about.feature3Title", descKey: "about.feature3Desc" },
    { icon: Star, titleKey: "about.feature4Title", descKey: "about.feature4Desc" },
    { icon: Users, titleKey: "about.feature5Title", descKey: "about.feature5Desc" },
    { icon: BookOpen, titleKey: "about.feature6Title", descKey: "about.feature6Desc" },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-primary via-primary/95 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("about.featuresTitle")}
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            {t("about.featuresDesc")}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-5 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <feature.icon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t(feature.titleKey)}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("about.ctaTitle")}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            {t("about.ctaDesc")}
          </p>
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
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
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
