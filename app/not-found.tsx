"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-slate-600 mb-8">{t("notFound.title")}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
      >
        <Home className="w-5 h-5" />
        {t("notFound.backHome")}
      </Link>
    </div>
  );
}
