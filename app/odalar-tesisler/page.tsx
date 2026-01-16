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
  Tv,
  Wind,
  Bath,
  Mountain,
  Phone,
  Building,
  Dumbbell,
  UtensilsCrossed,
  Check
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
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]" />
      
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
            Odalar & Tesisler
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Modern ve konforlu odalarımız ile size en iyi konaklama deneyimini sunuyoruz.
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

// Rooms Section
function RoomsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rooms = [
    {
      title: "Standart Oda",
      count: "26 Adet",
      description: "Konforlu ve modern tasarımlı standart odalarımız, tüm temel ihtiyaçlarınızı karşılayacak şekilde donatılmıştır.",
      image: "/assets/images/tek_kisilik_yatakli_odalar.jpeg",
      features: [
        { icon: Bed, text: "Çift Kişilik Yatak" },
        { icon: Wind, text: "Klima" },
        { icon: Wifi, text: "Ücretsiz Wi-Fi" },
        { icon: Tv, text: "LCD TV" },
        { icon: Bath, text: "Özel Banyo" },
        { icon: Coffee, text: "Çay/Kahve" },
      ],
    },
    {
      title: "Süit Oda",
      count: "4 Adet",
      description: "Geniş ve lüks süit odalarımız, ekstra konfor ve premium hizmetlerle donatılmıştır.",
      image: "/assets/images/cift_kisilik_yatakli_oda.jpg",
      features: [
        { icon: Bed, text: "King Size Yatak" },
        { icon: Users, text: "Oturma Alanı" },
        { icon: Wind, text: "Klima" },
        { icon: Wifi, text: "Yüksek Hızlı Wi-Fi" },
        { icon: Tv, text: "Smart TV" },
        { icon: UtensilsCrossed, text: "Mini Bar" },
      ],
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
            Konforlu Odalarımız
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Toplam 30 oda ve 60 yatak kapasitesiyle misafirlerimizi ağırlıyoruz.
          </p>
        </motion.div>

        <div className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-hotel-lg">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                  {room.count}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {room.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link href="/iletisim" scroll={false}>
                  <Button className="bg-primary hover:bg-primary/90 text-white group">
                    Rezervasyon Yap
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Room Gallery
function RoomGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { src: "/assets/images/cift_kisilik_yatakli_oda.jpg", title: "Suit Oda" },
    { src: "/assets/images/tek_kisilik_yatakli_odalar.jpeg", title: "Tek Kişilik Oda" },
    { src: "/assets/images/oda_giris.jpg", title: "Oda Girişi" },
    { src: "/assets/images/banyo.jpg", title: "Banyo" },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Oda Detayları
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {img.title}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <Link href="/galeri" scroll={false}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white group">
              Tüm Galeriyi Gör
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Facilities Section
function FacilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facilities = [
    {
      icon: Utensils,
      title: "Restoran & Fuaye",
      description: "100 kişilik restoran ve fuaye alanımızda zengin menümüzle hizmet veriyoruz.",
      image: "/assets/images/restoran_cafe.jpg",
    },
    {
      icon: Coffee,
      title: "Kafeterya",
      description: "Ağrı Dağı manzaralı kafeteryamızda mocktail ve kahve çeşitleri.",
      image: "/assets/images/kafetarya.JPG",
    },
    {
      icon: Users,
      title: "Konferans Salonu",
      description: "60 kişilik konferans salonu ve eğitim toplantı odaları.",
      image: "/assets/images/konferans.JPG",
    },
    {
      icon: Building,
      title: "Toplantı Odaları",
      description: "Farklı kapasitelerde toplantı odaları ile iş toplantılarınız için ideal ortam.",
      image: "/assets/images/toplanti_salonu.jpg",
    },
    {
      icon: Dumbbell,
      title: "Spor Salonu",
      description: "Modern ekipmanlarla donatılmış spor salonumuz hizmetinizde.",
      image: "/assets/images/spor_salonu.jpeg",
    },
    {
      icon: Car,
      title: "Otopark",
      description: "Açık ve kapalı otopark alanlarımızla araçlarınız güvende.",
      image: "/assets/images/otel_giris.jpg",
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
            Otel Tesisleri
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modern tesislerimizle konforlu bir konaklama deneyimi sunuyoruz.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-hotel-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  {/* <div className="w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Amenities Section
function AmenitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const amenities = [
    "24/7 Resepsiyon",
    "Ücretsiz Wi-Fi",
    "Klima",
    "LCD TV",
    "Mini Bar",
    "Çamaşırhane Hizmeti",
    "Kuru Temizleme",
    "Mescit",
    "7 Yaşına Kadar Ücretsiz Konaklama",
    "Özel Menü Uygulaması",
    "Room Service",
    "Ağrı Dağı Manzarası",
  ];

  return (
    <section ref={ref} className="py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Oda & Otel Olanakları
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5"
            >
              <Check className="h-5 w-5 text-accent shrink-0" />
              <span>{amenity}</span>
            </motion.div>
          ))}
        </motion.div>
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
            Rezervasyon İçin Bizi Arayın
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Konforlu odalarımızda unutulmaz bir konaklama deneyimi için hemen iletişime geçin.
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
export default function OdalarTesislerPage() {
  return (
    <>
      <PageHeader />
      <RoomsSection />
      <RoomGallery />
      <FacilitiesSection />
      <AmenitiesSection />
      <CTASection />
    </>
  );
}

