import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '../contexts/LanguageContext'
import { translations, Language } from '../locales/translations'

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const languages = Object.keys(translations) as Language[];
  
  const alternates = languages.reduce((acc, lang) => {
    acc[lang] = `/${lang}`;
    return acc;
  }, {} as Record<string, string>);

  return {
    alternates: {
      languages: alternates,
    },
  };
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: Language }
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <LanguageProvider initialLang={params.locale}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
