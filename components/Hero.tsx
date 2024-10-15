'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-xl mb-8">{t('hero.subtitle')}</p>
        <p className="text-lg mb-8">
          {t('hero.description')}
        </p>
        <Link href="#" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
          {t('hero.ctaButton')}
        </Link>
      </div>
    </section>
  )
}

export default Hero
