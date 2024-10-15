'use client'

import { useLanguage } from '../contexts/LanguageContext'

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.john.name'),
      title: t('testimonials.john.title'),
      quote: t('testimonials.john.quote'),
    },
    {
      name: t('testimonials.jane.name'),
      title: t('testimonials.jane.title'),
      quote: t('testimonials.jane.quote'),
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('testimonials.heading')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
