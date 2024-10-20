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
import Image from 'next/image'
import iconSvg from '../app/icon.svg'

const TopBar = () => {
  const { t, language } = useLanguage();
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

    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
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
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Placeholder for logout logic
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  return (
    <header className="bg-light-background dark:bg-dark-background shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-light-primaryText dark:text-dark-primaryText">
          <Image src={iconSvg} alt="SaaSify Logo" width={16} height={16} className="mr-4 inline-block" />
          SaaSify
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="#features" className="text-light-secondaryText dark:text-dark-secondaryText hover:text-light-primaryText dark:hover:text-dark-primaryText">{t('common.features')}</Link>
          <Link href="#pricing" className="text-light-secondaryText dark:text-dark-secondaryText hover:text-light-primaryText dark:hover:text-dark-primaryText">{t('common.pricing')}</Link>
          <Link href="#about" className="text-light-secondaryText dark:text-dark-secondaryText hover:text-light-primaryText dark:hover:text-dark-primaryText">{t('common.about')}</Link>
          <Link href="#contact" className="text-light-secondaryText dark:text-dark-secondaryText hover:text-light-primaryText dark:hover:text-dark-primaryText">{t('common.contact')}</Link>
          {isLoggedIn && (
            <Link href={`/${language}/app`} className="bg-vibrant-purple hover:bg-light-purple text-dark-primaryText dark:text-dark-primaryText hover:text-dark-primaryText dark:hover:text-dark-primaryText font-bold py-2 px-4 rounded hover:bg-light-highlight dark:hover:bg-dark-highlight">
              {t('common.application')}
            </Link>
          )}
          <LanguageSelector />
          <Button onClick={toggleDarkMode} variant="outline" size="icon" className="bg-light-accent text-light-secondaryText dark:text-dark-secondaryText hover:text-light-primaryText dark:hover:text-dark-primaryText">
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
              className="text-light-secondaryText dark:text-dark-secondaryText hover:text-light-primaryText dark:hover:text-dark-primaryText"
            >
              {t('common.signIn')}
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 border border-light-border dark:border-dark-border p-1 rounded-md text-light-secondaryText dark:text-dark-secondaryText hover:text-light-primaryText dark:hover:text-dark-primaryText"
              >
                <span>{t('common.userMenu')}</span>
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-light-background dark:bg-dark-background rounded-md shadow-lg py-1 border border-light-border dark:border-dark-border">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-light-secondaryText dark:text-dark-secondaryText hover:bg-light-accent dark:hover:bg-dark-accent hover:bg-white">
                    {t('common.profile')}
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-light-secondaryText dark:text-dark-secondaryText hover:bg-light-accent dark:hover:bg-dark-accent hover:bg-white">
                    {t('common.settings')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-light-secondaryText dark:text-dark-secondaryText hover:bg-light-accent dark:hover:bg-dark-accent hover:bg-white"
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
