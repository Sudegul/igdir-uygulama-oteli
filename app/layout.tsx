import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TOBB Turizm MTAL Uygulama Oteli",
    template: "%s | TOBB Turizm MTAL Uygulama Oteli",
  },
  description: "Türkiye Odalar ve Borsalar Birliği Turizm Mesleki ve Teknik Anadolu Lisesi Uygulama Oteli - 30 odalı, 60 yatak kapasiteli modern tesislerimizle öğrencilere iş hayatı öncesi deneyim sunuyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/assets/logos/logo_mavi.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logos/logo_mavi.png" />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
