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
  Calendar,
  Target,
  Heart,
  Building,
  Star,
  BookOpen
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { contactInfo } from "@/lib/constants";

// Page Header Component
function PageHeader() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]" />
      
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
            Hakkımızda
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Türkiye Odalar ve Borsalar Birliği Turizm Mesleki ve Teknik Anadolu Lisesi 
            Uygulama Oteli olarak hizmetinizdeyiz.
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

// About Content Section
function AboutContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Eğitim ve Turizmde
              <br />
              <span className="text-primary">Öncü Bir Kurum</span>
            </h2>
            
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Bünyemizde açılan uygulama otelimiz, 30 odalı (26 standart oda, 4 süit) ve
                60 yatak kapasiteli modern tesislerimizle öğrencilere iş hayatı öncesi deneyim
                sunmaktadır.
              </p>
              <p>
                Modern bina ve imkânları ile müşterilerin hizmetine hazırlanan ve ilimizde tek olan 
                uygulama otelimiz, dışarıdan müşteri kabul etmekte olup, aynı zamanda turizm sektöründe 
                çalışacak öğrencilerin yetiştirilmesinde katkı sunmaktadır.
              </p>
              <p>
                Okulumuz Konaklama ve Seyahat Hizmetleri ile Yiyecek ve İçecek Hizmetleri alan
                öğretmen ve öğrencileri ve güler yüzlü personellerin özverili çalışmaları ile
                konforlu ve huzurlu bir aile ortamı oluşturulmaktadır.
              </p>
              <p>
                Her yıl okulumuz 10. ve 11. sınıf öğrencileri Antalya, Muğla, Aydın illerindeki 
                beş yıldızlı otellerde beş ay süresince İşletmelerde Mesleki Eğitim / Staj yaparak
                otelimize yenilikçi uygulamaları katmaktadır.
              </p>
            </div>

          </motion.div>

          {/* Images */}
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
            
            {/* Overlapping Image */}
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

  const stats = [
    { icon: Bed, value: "30", label: "Oda", suffix: "" },
    { icon: Users, value: "60", label: "Yatak Kapasitesi", suffix: "" },
    { icon: Building, value: "100", label: "Kişilik Restoran", suffix: "+" },
    { icon: GraduationCap, value: "5", label: "Yıldızlı Staj Deneyimi", suffix: "★" },
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
              <div className="text-sm text-gray-500">{stat.label}</div>
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

  const cards = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "Turizm sektörüne nitelikli insan gücü yetiştirirken, misafirlerimize modern ve konforlu konaklama hizmeti sunmak.",
      color: "bg-primary",
    },
    {
      icon: Mountain,
      title: "Vizyonumuz",
      description: "Bölgenin en tercih edilen uygulama oteli olarak, eğitim ve turizmi harmanlayan bir rol model olmak.",
      color: "bg-accent",
    },
    {
      icon: Heart,
      title: "Değerlerimiz",
      description: "Eğitime katkı, misafir memnuniyeti, kaliteli hizmet, sürekli gelişim ve takım ruhu.",
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
            Misyon, Vizyon & Değerler
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
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

  const features = [
    {
      icon: GraduationCap,
      title: "Eğitim Odaklı Yaklaşım",
      description: "Turizm öğrencilerine gerçek otel ortamında pratik yapma imkanı sunuyoruz.",
    },
    {
      icon: Award,
      title: "5 Yıldızlı Staj Deneyimi",
      description: "Öğrencilerimiz Türkiye'nin en iyi otellerinde staj yaparak deneyim kazanıyor.",
    },
    {
      icon: Mountain,
      title: "Eşsiz Ağrı Dağı Manzarası",
      description: "Şehir gürültüsünden uzak, muhteşem manzara eşliğinde huzurlu bir ortam.",
    },
    {
      icon: Star,
      title: "Modern Tesisler",
      description: "Konferans salonu, spor salonu, restoran ve kafeterya ile tam donanımlı tesis.",
    },
    {
      icon: Users,
      title: "Güler Yüzlü Ekip",
      description: "Özverili öğretmenler, öğrenciler ve personelimizle aile sıcaklığı.",
    },
    {
      icon: BookOpen,
      title: "Halka Açık Hizmet",
      description: "Sadece eğitim amaçlı değil, herkese açık kaliteli konaklama hizmeti.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-primary via-primary/95 to-slate-800 relative overflow-hidden">
      {/* Subtle Pattern */}
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
            Bizi Özel Kılan Özellikler
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Misafirlerimize en iyi deneyimi sunmak için özenle hazırladığımız hizmetlerimiz.
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
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
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
            Bizimle İletişime Geçin
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Rezervasyon veya sorularınız için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim" scroll={false}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 group">
                İletişime Geç
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/odalar-tesisler" scroll={false}>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                Odaları İncele
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

