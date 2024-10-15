'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { FiLayers, FiShield, FiZap } from 'react-icons/fi';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <FiLayers className="w-12 h-12 text-neon-green" />,
      title: t('features.scalable.title'),
      description: t('features.scalable.description'),
    },
    {
      icon: <FiShield className="w-12 h-12 text-electric-blue" />,
      title: t('features.security.title'),
      description: t('features.security.description'),
    },
    {
      icon: <FiZap className="w-12 h-12 text-vibrant-purple" />,
      title: t('features.speed.title'),
      description: t('features.speed.description'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t('features.heading')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white text-center mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
