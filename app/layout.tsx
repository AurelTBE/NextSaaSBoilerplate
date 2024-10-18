import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '../contexts/LanguageContext'
import { translations, Language } from '../locales/translations'
import { AuthProvider } from '../contexts/AuthContext'

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <LanguageProvider initialLang="en">
            {children}
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
