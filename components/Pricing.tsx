'use client'

import { useLanguage } from '../contexts/LanguageContext'

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      features: t('pricing.starter.features', { returnObjects: true }) as string[]
    },
    {
      name: t('pricing.pro.name'),
      price: t('pricing.pro.price'),
      features: t('pricing.pro.features', { returnObjects: true }) as string[]
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      features: t('pricing.enterprise.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="pricing" className="bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary text-light-primaryText dark:text-dark-primaryText py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('pricing.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-light-backgroundPrimary dark:bg-dark-backgroundPrimary text-light-primaryText dark:text-dark-primaryText p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-2xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-6">
                  {Array.isArray(plan.features) ? (
                    plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-2">✓ {feature}</li>
                    ))
                  ) : (
                    <li className="mb-2">✓ {String(plan.features)}</li>
                  )}
                </ul>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-auto">
                {t('pricing.choosePlan')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
