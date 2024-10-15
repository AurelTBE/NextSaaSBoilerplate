'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

const TopBar = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          SaaSify
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-gray-800">{t('common.features')}</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-800">{t('common.pricing')}</Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-800">{t('common.about')}</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">{t('common.contact')}</Link>
          <LanguageSelector />
        </div>
      </nav>
    </header>
  )
}

export default TopBar
