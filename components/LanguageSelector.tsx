'use client'

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language, translations } from '../locales/translations';
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronDown } from "lucide-react"

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const languageNames = {
    en: 'English',
    fr: 'Français'
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-label={t('common.languageSelector') as string} className="justify-between">
          {languageNames[language as keyof typeof languageNames]}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col p-2 w-32 gap-2">
        {Object.keys(translations).map((lang) => (
          <Button
            key={lang}
            className="w-full justify-start font-normal p-2"
            variant={lang === language ? "secondary" : "ghost"}
            onClick={() => setLanguage(lang as Language)}
          >
            <Check
              className={`mr-2 h-4 w-4 ${
                lang === language ? "opacity-100" : "opacity-0"
              }`}
            />
            {languageNames[lang as keyof typeof languageNames]}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
