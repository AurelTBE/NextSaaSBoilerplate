import { LanguageProvider } from '../../contexts/LanguageContext'
import { Language } from '../../locales/translations'

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: Language }
}) {
  return (
    <LanguageProvider initialLang={params.locale}>
      {children}
    </LanguageProvider>
  )
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }]
}
