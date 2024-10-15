'use client'

import { useLanguage } from '../../../contexts/LanguageContext'
import { Language } from '../../../locales/translations'
import TopBar from '../../../components/TopBar'
import Footer from '../../../components/Footer'

export default function PrivacyPolicy({ params }: { params: { locale: Language } }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{t('privacy')}</h1>
        {/* Add your privacy policy content here */}
      </main>
      <Footer />
    </div>
  );
}
