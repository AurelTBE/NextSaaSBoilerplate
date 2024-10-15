'use client'

import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
        <p className="text-center max-w-2xl mx-auto">
          {t('about.description')}
        </p>
      </div>
    </section>
  )
}

export default About
