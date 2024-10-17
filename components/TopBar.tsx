'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import { useState } from 'react'

const TopBar = () => {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogin = () => {
    // Placeholder for authentication logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Placeholder for logout logic
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

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
          {!isLoggedIn ? (
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {t('common.signIn')}
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
              >
                <img
                  src="/placeholder-avatar.png"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span>{t('common.userMenu')}</span>
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('common.profile')}
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {t('common.settings')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t('common.signOut')}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default TopBar
