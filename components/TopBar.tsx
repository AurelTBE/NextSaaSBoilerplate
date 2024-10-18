'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const TopBar = () => {
  const { t } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled on initial load
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

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
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          SaaSify
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">{t('common.features')}</Link>
          <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">{t('common.pricing')}</Link>
          <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">{t('common.about')}</Link>
          <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">{t('common.contact')}</Link>
          <LanguageSelector />
          <Button onClick={toggleDarkMode} variant="outline" size="icon">
            {isDarkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">{t('common.toggleTheme')}</span>
          </Button>
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
