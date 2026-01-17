"use client";

import { useState, FormEvent } from "react";
import { Phone, MapPin, Mail, Send, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx";
const EMAILJS_PUBLIC_KEY = "xxxxxxxxxxxxxxxxxxx";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function PageHeader() {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{t("contact.pageTitle")}</h1>
          <p className="text-slate-400 text-base md:text-lg">{t("contact.pageDescription")}</p>
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

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const subjectOptions = [
  { value: "reservation", label: "Rezervasyon Bilgisi" },
  { value: "price", label: "Fiyat Bilgisi" },
  { value: "service", label: "Hizmet Bilgisi" },
  { value: "date", label: "Tarih Bilgisi" },
  { value: "other", label: "Diğer" },
];

function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contact.formNameRequired");
    if (!formData.email.trim()) newErrors.email = t("contact.formEmailRequired");
    else if (!validateEmail(formData.email)) newErrors.email = t("contact.formEmailInvalid");
    if (!formData.subject.trim()) newErrors.subject = t("contact.formSubjectRequired");
    if (!formData.message.trim()) newErrors.message = t("contact.formMessageRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const selectedSubject = subjectOptions.find(opt => opt.value === formData.subject)?.label || formData.subject;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: selectedSubject,
          message: formData.message,
          to_email: contactInfo.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && validateEmail(formData.email) && formData.subject.trim() && formData.message.trim();

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50/40 rounded-2xl p-6 border border-slate-200/60 shadow-sm overflow-hidden">
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full pointer-events-none" />
      <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/20 rounded-full pointer-events-none" />
      <h2 className="text-lg font-bold text-slate-900 mb-4 relative">{t("contact.formTitle")}</h2>

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
          <span className="text-green-800">{t("contact.formSuccess")}</span>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
          <span className="text-red-800">{t("contact.formError")}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 relative">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              {t("contact.formName")}
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className={errors.name ? "border-red-400" : ""}
            />
            {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              {t("contact.formEmail")}
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className={errors.email ? "border-red-400" : ""}
            />
            {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Subject (Select) */}
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-sm font-medium text-slate-700">
            {t("contact.formSubject")}
          </label>
          <Select
            value={formData.subject}
            onValueChange={(value) => {
              setFormData({ ...formData, subject: value });
              if (errors.subject) setErrors({ ...errors, subject: undefined });
            }}
          >
            <SelectTrigger className={`w-full ${errors.subject ? "border-red-400" : ""}`}>
              <SelectValue placeholder="Konu seçiniz..." />
            </SelectTrigger>
            <SelectContent>
              {subjectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.subject && <p className="text-xs text-red-600">{errors.subject}</p>}
        </div>

        {/* Row 3: Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            {t("contact.formMessage")}
          </label>
          <Textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            className={`resize-none ${errors.message ? "border-red-400" : ""}`}
          />
          {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
        </div>

        {/* Submit Button - Small, Right Aligned */}
        <div className="flex justify-end">
          <Button
            type="submit"
            size="sm"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {t("contact.formSending")}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t("contact.formSubmit")}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

function ContactContent() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Üst Kısım: İletişim Bilgileri + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Sol - İletişim Bilgileri */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">{t("contact.addressAndContact")}</h2>
            
            <div className="space-y-5">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 text-slate-700 hover:text-amber-600 transition-colors">
                <div className="w-11 h-11 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t("common.phone")}</p>
                  <p className="font-medium">{contactInfo.phone}</p>
                </div>
              </a>

              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-slate-700 hover:text-primary transition-colors">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{t("common.email")}</p>
                  <p className="font-medium break-all">{contactInfo.email}</p>
                </div>
              </a>

              <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-green-600 transition-colors">
                <div className="w-11 h-11 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <p className="font-medium">{contactInfo.whatsapp}</p>
                </div>
              </a>

              <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-pink-600 transition-colors">
                <div className="w-11 h-11 bg-pink-50 rounded-lg flex items-center justify-center shrink-0">
                  <InstagramIcon className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Instagram</p>
                  <p className="font-medium">@{contactInfo.instagram}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Sağ - Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Ayırıcı */}
        <div className="border-t border-slate-200 mb-16" />

        {/* Alt Kısım: Harita + Konum Bilgileri */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Sol - Harita */}
          <div className="rounded-xl overflow-hidden h-[300px] lg:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1234567890!2d44.0456!3d39.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU1JzI0LjIiTiA0NMKwMDInNDAuNCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("contact.mapTitle")}
            />
          </div>

          {/* Sağ - Konum ve Ulaşım */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">{t("contact.transportation")}</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-slate-600">{t("contact.cityCenter")} <strong>{contactInfo.cityCenterDistance}</strong> {t("contact.distance")}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-slate-600">{t("contact.airport")} <strong>{contactInfo.airportDistance}</strong> {t("contact.distance")}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-slate-600">{t("contact.publicTransport")}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-slate-600">{t("contact.parkingAvailable")}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-2" />
                <div>
                  <p className="text-sm text-slate-500 mb-1">{t("common.openAddress")}</p>
                  <p className="text-slate-600 leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <a 
              href={contactInfo.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-6"
            >
              {t("common.openInMap")}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IletisimPage() {
  return (
    <>
      <PageHeader />
      <ContactContent />
    </>
  );
}
