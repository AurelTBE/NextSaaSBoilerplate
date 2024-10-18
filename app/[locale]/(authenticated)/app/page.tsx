'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const ApplicationPage = () => {
  const { t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-light-primaryText dark:text-dark-primaryText">
        {t('app.title')}
      </h1>
      <p className="text-light-secondaryText dark:text-dark-secondaryText mb-4">
        {t('app.welcome')}
      </p>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-light-primaryText dark:text-dark-primaryText">
          {t('app.dummyContent')}
        </h2>
        <ul className="list-disc list-inside text-light-secondaryText dark:text-dark-secondaryText">
          <li>{t('app.feature1')}</li>
          <li>{t('app.feature2')}</li>
          <li>{t('app.feature3')}</li>
        </ul>
      </div>
    </div>
  );
};

export default ApplicationPage;
