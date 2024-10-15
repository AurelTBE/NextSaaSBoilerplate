import enCommon from './en/common.json';
import enHero from './en/hero.json';
import enFeatures from './en/features.json';
import enPricing from './en/pricing.json';
import enTestimonials from './en/testimonials.json';
import enCTA from './en/cta.json';
import enAbout from './en/about.json';
import enContact from './en/contact.json';
import enFooter from './en/footer.json';
import enPrivacy from './en/privacy.json';
import enTerms from './en/terms.json';

import frCommon from './fr/common.json';
import frHero from './fr/hero.json';
import frFeatures from './fr/features.json';
import frPricing from './fr/pricing.json';
import frTestimonials from './fr/testimonials.json';
import frCTA from './fr/cta.json';
import frAbout from './fr/about.json';
import frContact from './fr/contact.json';
import frFooter from './fr/footer.json';
import frPrivacy from './fr/privacy.json';
import frTerms from './fr/terms.json';

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
    privacy: enPrivacy,
    terms: enTerms,
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
    privacy: frPrivacy,
    terms: frTerms,
  },
};

export type Language = keyof typeof translations;
