'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../locales/translations';
import { useRouter, usePathname } from 'next/navigation';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { returnObjects: boolean }) => string | string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const defaultLanguage: Language = 'en';

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLang: Language }> = ({ children, initialLang }) => {
  const [language, setLanguage] = useState<Language>(initialLang || defaultLanguage);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && translations[storedLang]) {
      setLanguage(storedLang);
    } else {
      setLanguage(initialLang || defaultLanguage);
    }
    console.log('LanguageProvider - Initial language set:', language);
  }, [initialLang]);

  const changeLanguage = (lang: Language) => {
    if (translations[lang]) {
      console.log(`LanguageProvider - Changing language to: ${lang}`);
      setLanguage(lang);
      localStorage.setItem('language', lang);
      const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
      router.push(newPathname);
    }
  };

  const t = (key: string, options?: { returnObjects: boolean }): string | string[] => {
    console.log(`LanguageProvider - Translating key: ${key}, Current language: ${language}`);
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.error(`Translation not found for key: ${key}`);
        return key; // Return the key if translation is not found
      }
    }
    console.log(`LanguageProvider - Translation result:`, value);
    if (options?.returnObjects && Array.isArray(value)) {
      return value;
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
