import enCommon from './en/common.json';
import enHero from './en/hero.json';
import enFeatures from './en/features.json';
import enPricing from './en/pricing.json';
import enTestimonials from './en/testimonials.json';
import enCTA from './en/cta.json';
import enAbout from './en/about.json';
import enContact from './en/contact.json';
import enFooter from './en/footer.json';

import frCommon from './fr/common.json';
import frHero from './fr/hero.json';
import frFeatures from './fr/features.json';
import frPricing from './fr/pricing.json';
import frTestimonials from './fr/testimonials.json';
import frCTA from './fr/cta.json';
import frAbout from './fr/about.json';
import frContact from './fr/contact.json';
import frFooter from './fr/footer.json';

import esCommon from './es/common.json';
import esHero from './es/hero.json';
import esFeatures from './es/features.json';
import esPricing from './es/pricing.json';
import esTestimonials from './es/testimonials.json';
import esCTA from './es/cta.json';
import esAbout from './es/about.json';
import esContact from './es/contact.json';
import esFooter from './es/footer.json';

export const translations = {
  en: {
    common: enCommon,
    hero: enHero,
    features: enFeatures,
    pricing: enPricing,
    testimonials: enTestimonials,
    cta: enCTA,
    about: enAbout,
    contact: enContact,
    footer: enFooter,
  },
  fr: {
    common: frCommon,
    hero: frHero,
    features: frFeatures,
    pricing: frPricing,
    testimonials: frTestimonials,
    cta: frCTA,
    about: frAbout,
    contact: frContact,
    footer: frFooter,
  },
  es: {
    common: esCommon,
    hero: esHero,
    features: esFeatures,
    pricing: esPricing,
    testimonials: esTestimonials,
    cta: esCTA,
    about: esAbout,
    contact: esContact,
    footer: esFooter,
  },
};

export type Language = keyof typeof translations;
