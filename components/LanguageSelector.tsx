'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language, translations } from '../locales/translations';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      aria-label={t('languageSelector') as string}
      className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {Object.keys(translations).map((lang) => (
        <option key={lang} value={lang} className="bg-gray-700">
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
