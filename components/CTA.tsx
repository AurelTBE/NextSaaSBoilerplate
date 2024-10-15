'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="mb-8">
          {t('cta.description')}
        </p>
        <Link href="#" className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
          {t('cta.buttonText')}
        </Link>
      </div>
    </section>
  )
}

export default CTA
