"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Clock,
  Utensils,
  Coffee,
  Users,
  Wifi,
  Car,
  Droplet,
  MapPin,
  Shield,
  Briefcase,
  GraduationCap,
  Phone,
  Heart,
  UtensilsCrossed,
  Dumbbell,
  Sparkles
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { contactInfo } from "@/lib/constants";

// Page Header
function PageHeader() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-violet-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-rose-500/20 rounded-full blur-[80px]" />
      
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
            Hizmetlerimiz
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Misafirlerimizin konforu için sunduğumuz kapsamlı hizmetler.
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

// Main Services Section
function MainServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Utensils,
      title: "Restoran Hizmeti",
      description: "100 kişilik restoranımızda zengin Türk mutfağı ve uluslararası lezzetler sunuyoruz. Kahvaltı, öğle ve akşam yemeği servisi mevcuttur.",
      image: "/assets/images/restoran_cafe.jpg",
      features: ["Açık Büfe Kahvaltı", "A La Carte Menü", "Grup Menüleri", "Özel Diyet Menüleri"],
    },
    {
      icon: Coffee,
      title: "Seyir Kafesi",
      description: "Ağrı Dağı'nın muhteşem manzarası eşliğinde kahve ve içecek keyfi. Mocktail çeşitleri ve atıştırmalıklar.",
      image: "/assets/images/kafetarya.JPG",
      features: ["Manzaralı Teras", "Sıcak/Soğuk İçecekler", "Tatlı Çeşitleri", "Lounge Alan"],
    },
    {
      icon: Users,
      title: "Konferans & Toplantı",
      description: "60 kişilik konferans salonu ve çeşitli kapasitelerde toplantı odaları. Profesyonel ekipman desteği.",
      image: "/assets/images/konferans.JPG",
      features: ["Projeksiyon Sistemi", "Ses Sistemi", "Yüksek Hızlı Internet", "Teknik Destek"],
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Öne Çıkan Hizmetlerimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Konforlu konaklama deneyiminiz için sunduğumuz premium hizmetler.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-hotel-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// All Services Grid
function AllServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: Clock, title: "24/7 Resepsiyon", desc: "Günün her saati hizmetinizdeyiz" },
    { icon: Droplet, title: "Çamaşırhane", desc: "Çamaşırhane ve kuru temizleme" },
    { icon: null, iconPath: "/assets/icons/mosque.svg", title: "Mescit", desc: "Dini ibadetleriniz için mescit" },
    { icon: Shield, title: "Özel Menü", desc: "Gruplar için özel menü uygulaması" },
    { icon: Heart, title: "Çocuk Konaklama", desc: "7 yaşına kadar ücretsiz" },
    { icon: GraduationCap, title: "Eğitim Hizmeti", desc: "Öğrencilere pratik deneyim" },
    { icon: Wifi, title: "Ücretsiz Wi-Fi", desc: "Tüm alanlarda yüksek hızlı internet" },
    { icon: Car, title: "Otopark", desc: "Açık ve kapalı otopark alanı" },
    { icon: Dumbbell, title: "Spor Salonu", desc: "Modern fitness ekipmanları" },
    { icon: UtensilsCrossed, title: "Room Service", desc: "Odanıza yemek servisi" },
    { icon: Sparkles, title: "Oda Temizliği", desc: "Günlük oda temizliği" },
    { icon: Briefcase, title: "İş Merkezi", desc: "Çalışma alanı ve ofis hizmetleri" },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Size Sunduklarımız
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Konforlu konaklama deneyiminiz için tüm ihtiyaçlarınızı düşündük.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white p-6 rounded-xl shadow-hotel hover:shadow-hotel-lg transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {service.icon ? (
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                ) : service.iconPath ? (
                  <Image 
                    src={service.iconPath} 
                    alt={service.title} 
                    width={28} 
                    height={28} 
                    className="text-primary group-hover:brightness-0 group-hover:invert transition-all" 
                  />
                ) : null}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Special Features Section
function SpecialFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Öğrencilerimizle
              <br />
              <span className="text-accent">Profesyonel Hizmet</span>
            </h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Turizm Mesleki ve Teknik Anadolu Lisesi olarak, öğrencilerimize gerçek otel 
              ortamında pratik yapma imkanı sunuyoruz. Bu sayede hem öğrencilerimiz 
              sektöre hazırlanıyor hem de misafirlerimiz özenli bir hizmet alıyor.
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              Her yıl 10. ve 11. sınıf öğrencilerimiz Türkiye'nin en prestijli otellerinde 
              staj yaparak edindiği deneyimleri otelimize taşıyor. Bu yenilikçi yaklaşımımız 
              sayesinde sürekli gelişen bir hizmet kalitesi sunuyoruz.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "5★", label: "Yıldızlı Staj Otelleri" },
                { value: "5 Ay", label: "Staj Süresi" },
                { value: "3 İl", label: "Staj Lokasyonu" },
                { value: "∞", label: "Yenilikçi Uygulama" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/lobi_2.jpg"
                alt="Resepsiyon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-hotel-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Eğitim</div>
                  <div className="text-sm text-gray-500">Odaklı Hizmet</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz Hakkında Bilgi Alın
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Sorularınız için bizimle iletişime geçebilir veya rezervasyon yapabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 group">
                <Phone className="mr-2 h-5 w-5" />
                {contactInfo.phone}
              </Button>
            </a>
            <Link href="/iletisim" scroll={false}>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                İletişim Sayfası
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function HizmetlerPage() {
  return (
    <>
      <PageHeader />
      <MainServicesSection />
      <AllServicesGrid />
      <SpecialFeatures />
      <CTASection />
    </>
  );
}

