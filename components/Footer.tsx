'use client'

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-electric-blue transition-colors">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-electric-blue transition-colors">{t('footer.documentation')}</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">{t('footer.blog')}</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">{t('footer.support')}</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${language}/privacy`} className="hover:text-electric-blue transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href={`/${language}/terms`} className="hover:text-electric-blue transition-colors">
                  {t('footer.termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">{t('footer.subscribe')}</h3>
            <p className="mb-4">{t('footer.subscribeText')}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder') as string}
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
              />
              <Button type="submit" className="bg-electric-blue hover:bg-blue-600 text-white rounded-r-md">
                {t('footer.subscribeButton')}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
