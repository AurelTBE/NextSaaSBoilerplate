'use client'

import { useLanguage } from '../../../contexts/LanguageContext'
import { Language } from '../../../locales/translations'
import TopBar from '../../../components/TopBar'
import Footer from '../../../components/Footer'

export default function TermsOfService({ params }: { params: { locale: Language } }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{t('terms.title')}</h1>
        <p className="mb-4"><strong>{t('terms.effectiveDate')}</strong></p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.introduction.title')}</h2>
        <p className="mb-4">{t('terms.introduction.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.accountRegistration.title')}</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2"><strong>{t('terms.accountRegistration.eligibility.title')}:</strong> {t('terms.accountRegistration.eligibility.content')}</li>
          <li className="mb-2"><strong>{t('terms.accountRegistration.accountInfo.title')}:</strong> {t('terms.accountRegistration.accountInfo.content')}</li>
          <li className="mb-2"><strong>{t('terms.accountRegistration.accountSecurity.title')}:</strong> {t('terms.accountRegistration.accountSecurity.content')}</li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.useOfServices.title')}</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2"><strong>{t('terms.useOfServices.license.title')}:</strong> {t('terms.useOfServices.license.content')}</li>
          <li className="mb-2">
            <strong>{t('terms.useOfServices.prohibitedActivities.title')}:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>{t('terms.useOfServices.prohibitedActivities.item1')}</li>
              <li>{t('terms.useOfServices.prohibitedActivities.item2')}</li>
              <li>{t('terms.useOfServices.prohibitedActivities.item3')}</li>
            </ul>
          </li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.paymentAndSubscription.title')}</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2"><strong>{t('terms.paymentAndSubscription.billing.title')}:</strong> {t('terms.paymentAndSubscription.billing.content')}</li>
          <li className="mb-2"><strong>{t('terms.paymentAndSubscription.subscriptionPlans.title')}:</strong> {t('terms.paymentAndSubscription.subscriptionPlans.content')}</li>
          <li className="mb-2"><strong>{t('terms.paymentAndSubscription.cancellation.title')}:</strong> {t('terms.paymentAndSubscription.cancellation.content')}</li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.intellectualProperty.title')}</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2"><strong>{t('terms.intellectualProperty.ownership.title')}:</strong> {t('terms.intellectualProperty.ownership.content')}</li>
          <li className="mb-2"><strong>{t('terms.intellectualProperty.trademarks.title')}:</strong> {t('terms.intellectualProperty.trademarks.content')}</li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.limitationOfLiability.title')}</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-2"><strong>{t('terms.limitationOfLiability.disclaimer.title')}:</strong> {t('terms.limitationOfLiability.disclaimer.content')}</li>
          <li className="mb-2"><strong>{t('terms.limitationOfLiability.limitation.title')}:</strong> {t('terms.limitationOfLiability.limitation.content')}</li>
        </ol>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.indemnification.title')}</h2>
        <p className="mb-4">{t('terms.indemnification.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.changes.title')}</h2>
        <p className="mb-4">{t('terms.changes.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.governingLaw.title')}</h2>
        <p className="mb-4">{t('terms.governingLaw.content')}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">{t('terms.contact.title')}</h2>
        <p className="mb-2">{t('terms.contact.content')}</p>
        <p><strong>{t('terms.contact.email')}:</strong> support@saasify.com</p>
        <p><strong>{t('terms.contact.address')}:</strong> 123 SaaSify Lane, Tech City, USA</p>
      </main>
      <Footer />
    </div>
  );
}
