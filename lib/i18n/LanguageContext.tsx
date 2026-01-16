"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import trMessages from "./tr.json";
import enMessages from "./en.json";
import azMessages from "./az.json";

export type Language = "tr" | "en" | "az";

type Messages = typeof trMessages;

const messages: Record<Language, Messages> = {
  tr: trMessages,
  en: enMessages,
  az: azMessages as Messages,
};

export const languageNames: Record<Language, string> = {
  tr: "Türkçe",
  en: "English",
  az: "Azərbaycanca",
};

export const languageFlags: Record<Language, string> = {
  tr: "🇹🇷",
  en: "🇬🇧",
  az: "🇦🇿",
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  messages: Messages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "preferred_language";

// Helper function to get nested value from object
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path; // Return the key if not found
    }
  }

  return typeof result === "string" ? result : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr");
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    if (storedLanguage && messages[storedLanguage]) {
      setLanguageState(storedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "az") {
        setLanguageState("az");
      } else if (browserLang === "en") {
        setLanguageState("en");
      }
      // Default is already "tr"
    }
    setMounted(true);
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    // Update html lang attribute
    document.documentElement.lang = lang;
  }, []);

  // Translation function
  const t = useCallback((key: string): string => {
    return getNestedValue(messages[language] as unknown as Record<string, unknown>, key);
  }, [language]);

  // Update document language on mount and language change
  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: "tr",
          setLanguage: () => {},
          t: (key: string) => getNestedValue(trMessages as unknown as Record<string, unknown>, key),
          messages: trMessages,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        messages: messages[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Shorthand hook for just the translation function
export function useTranslation() {
  const { t, language } = useLanguage();
  return { t, language };
}

