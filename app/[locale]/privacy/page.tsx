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
        <h1 className="text-3xl font-bold mb-6">{t('privacy.title')}</h1>
        <p className="mb-4"><strong>{t('privacy.effectiveDate')}</strong></p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('privacy.introduction.title')}</h2>
        <p className="mb-4">{t('privacy.introduction.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('privacy.informationCollected.title')}</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">{t('privacy.informationCollected.personal.title')}</h3>
        <p className="mb-2">{t('privacy.informationCollected.personal.content')}</p>
        <ul className="list-disc pl-6 mb-4">
          <li>{t('privacy.informationCollected.personal.username')}</li>
          <li>{t('privacy.informationCollected.personal.email')}</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">{t('privacy.informationCollected.payment.title')}</h3>
        <p className="mb-4">{t('privacy.informationCollected.payment.content')}</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">{t('privacy.informationCollected.usage.title')}</h3>
        <p className="mb-4">{t('privacy.informationCollected.usage.content')}</p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">{t('privacy.informationCollected.account.title')}</h3>
        <p className="mb-4">{t('privacy.informationCollected.account.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('privacy.dataUsage.title')}</h2>
        <p className="mb-4">{t('privacy.dataUsage.content')}</p>
        <ul className="list-disc pl-6 mb-4">
          <li>{t('privacy.dataUsage.provide')}</li>
          <li>{t('privacy.dataUsage.communicate')}</li>
          <li>{t('privacy.dataUsage.improve')}</li>
          <li>{t('privacy.dataUsage.security')}</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('privacy.dataSharing.title')}</h2>
        <p className="mb-4">{t('privacy.dataSharing.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('privacy.dataSecurity.title')}</h2>
        <p className="mb-4">{t('privacy.dataSecurity.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('privacy.userRights.title')}</h2>
        <p className="mb-4">{t('privacy.userRights.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('privacy.changes.title')}</h2>
        <p className="mb-4">{t('privacy.changes.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('privacy.contact.title')}</h2>
        <p className="mb-2">{t('privacy.contact.content')}</p>
        <p><strong>{t('privacy.contact.email')}:</strong> privacy@saasify.com</p>
        <p><strong>{t('privacy.contact.address')}:</strong> 123 SaaSify Lane, Tech City, USA</p>
      </main>
      <Footer />
    </div>
  );
}
