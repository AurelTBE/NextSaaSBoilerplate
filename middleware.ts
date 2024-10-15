import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { translations, Language } from './locales/translations'

const defaultLocale: Language = 'en'

function getLocale(request: NextRequest): Language {
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const [browserLang] = acceptLanguage.split(',')
    if (browserLang) {
      const [language] = browserLang.split('-')
      if (language in translations) {
        return language as Language
      }
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = Object.keys(translations).every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
