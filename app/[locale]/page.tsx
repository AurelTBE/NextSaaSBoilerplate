'use client'

import { useLanguage } from '../../contexts/LanguageContext'
import { Language } from '../../locales/translations'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Pricing from '../../components/Pricing'
import Testimonials from '../../components/Testimonials'
import CTA from '../../components/CTA'
import About from '../../components/About'
import Contact from '../../components/Contact'

export default function Home({ params }: { params: { locale: Language } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
