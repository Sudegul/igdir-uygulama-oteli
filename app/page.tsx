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
import { fadeInUp, staggerContainer, staggerItem, heroVariants, heroItem } from "@/lib/animations";
import { contactInfo } from "@/lib/constants";

// Hero Section - Elegant Split Design
function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-128px)] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vertical lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 100px)`,
        }} />
        {/* Horizontal lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 100px)`,
        }} />
      </div>

      {/* Gradient Orbs - Multiple layers */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[120px] -translate-x-1/3" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[130px] translate-y-1/2" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px]" />
      
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-1/4 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent rotate-[25deg] origin-top-right" />
        <div className="absolute bottom-1/3 -left-1/4 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-[15deg]" />
      </div>

      {/* Corner glow accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-128px)] py-12 lg:py-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 lg:mb-8 leading-[1.05] tracking-tight"
            >
              Iğdır'ın Kalbinde
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                Konforlu Konaklama
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed font-light"
            >
              TOBB Turizm Mesleki ve Teknik Anadolu Lisesi Uygulama Oteli'nde 
              30 odalı modern tesisimizle unutulmaz bir deneyim sunuyoruz.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link href="/iletisim" scroll={false}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-base font-semibold group shadow-xl shadow-amber-500/20 border-0"
                >
                  Rezervasyon Yap
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/hakkimizda" scroll={false}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base font-medium border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm"
                >
                  Bizi Tanıyın
                </Button>
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 md:gap-10"
            >
              {[
                { value: "30", label: "Modern Oda" },
                { value: "60", label: "Yatak Kapasitesi" },
                { value: "100+", label: "Kişilik Restoran" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs md:text-sm text-slate-400 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/otel_giris.jpg"
                alt="Iğdır Uygulama Oteli"
                fill
                priority
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Kaliteli Hizmet</div>
                  <div className="text-xs text-slate-500">Profesyonel Ekip</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}

// About Preview Section
function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-hotel-lg">
              <Image
                src="/assets/images/lobi.jpg"
                alt="Otel Lobi"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-hotel-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Eğitim</div>
                  <div className="text-sm text-gray-500">Odaklı Hizmet</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Eğitim ve Konforun
              <br />
              <span className="text-primary">Buluştuğu Nokta</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              TOBB Turizm Mesleki ve Teknik Anadolu Lisesi bünyesinde açılan uygulama otelimiz, 
              öğrencilere iş hayatı öncesi deneyim sunarken, misafirlerimize de modern ve 
              konforlu bir konaklama imkanı sağlamaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Ağrı Dağı manzarası eşliğinde, şehir gürültüsünden uzak, huzurlu bir ortamda 
              konaklama, kahvaltı ve yemek hizmetleri sunuyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Bed, text: "30 Oda, 60 Yatak" },
                { icon: Utensils, text: "100 Kişilik Restoran" },
                { icon: Users, text: "Konferans Salonu" },
                { icon: Star, text: "Eşsiz Manzara" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <Link href="/hakkimizda" scroll={false}>
              <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">
                Daha Fazla Bilgi
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Rooms Preview Section
function RoomsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rooms = [
    {
      title: "Standart Oda",
      description: "26 adet standart odamız ile konforlu konaklama",
      image: "/assets/images/tek_kisilik_yatakli_odalar.jpeg",
      features: ["Çift Kişilik Yatak", "Klima", "Ücretsiz Wi-Fi", "TV"],
    },
    {
      title: "Süit Oda",
      description: "4 adet süit odamız ile lüks konaklama deneyimi",
      image: "/assets/images/cift_kisilik_yatakli_oda.jpg",
      features: ["Geniş Alan", "Oturma Grubu", "Mini Bar", "Premium Hizmet"],
    },
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
            Konforlu Odalarımız
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern tasarımlı odalarımızda huzurlu bir konaklama deneyimi sizi bekliyor.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group bg-white rounded-2xl overflow-hidden shadow-hotel hover:shadow-hotel-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/odalar-tesisler" scroll={false}>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 group">
              Tüm Odaları Gör
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Services Preview Section
function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { icon: Utensils, title: "Restoran", desc: "100 kişilik restoran ve fuaye", color: "from-amber-500 to-orange-500" },
    { icon: Coffee, title: "Seyir Kafesi", desc: "Ağrı Dağı manzaralı kafe", color: "from-rose-500 to-pink-500" },
    { icon: Users, title: "Konferans Salonu", desc: "60 kişilik konferans salonu", color: "from-violet-500 to-purple-500" },
    { icon: Car, title: "Otopark", desc: "Açık ve kapalı otopark", color: "from-emerald-500 to-teal-500" },
    { icon: Wifi, title: "Ücretsiz Wi-Fi", desc: "Tüm alanlarda internet", color: "from-blue-500 to-cyan-500" },
    { icon: Bed, title: "24/7 Resepsiyon", desc: "Günün her saati hizmet", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Size Sunduklarımız
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Konforlu konaklama deneyiminiz için tüm ihtiyaçlarınızı düşündük.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-1">{service.title}</h3>
              <p className="text-sm text-slate-400">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/hizmetler" scroll={false}>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-base group font-semibold shadow-lg shadow-amber-500/20 border-0">
              Tüm Hizmetleri Gör
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Gallery Preview Section
function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryImages = [
    { src: "/assets/images/lobi_2.jpg", span: "col-span-2 row-span-2" },
    { src: "/assets/images/oturma_alani.jpg", span: "col-span-1" },
    { src: "/assets/images/restoran_cafe.jpg", span: "col-span-1" },
    { src: "/assets/images/konferans.JPG", span: "col-span-1" },
    { src: "/assets/images/kafetarya.JPG", span: "col-span-1" },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tesisimizden Kareler
            </h2>
          </div>
          <Link href="/galeri" scroll={false} className="mt-4 md:mt-0">
            <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">
              Tüm Galeri
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={`relative aspect-square rounded-xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={`Galeri ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
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
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/agri_dagi.jpeg"
              alt="CTA Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rezervasyon İçin Bizi Arayın
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ağrı Dağı manzarası eşliğinde unutulmaz bir konaklama deneyimi için 
              hemen iletişime geçin.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg group">
                  <Phone className="mr-2 h-5 w-5" />
                  {contactInfo.phone}
                </Button>
              </a>
              <Link href="/iletisim" scroll={false}>
                <Button size="lg" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 text-lg backdrop-blur-sm">
                  <MapPin className="mr-2 h-5 w-5" />
                  Konum ve İletişim
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
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
