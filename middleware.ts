import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true'
  const pathname = request.nextUrl.pathname
  const locale = pathname.split('/')[1]

  // Allow access to home pages and other public routes
  if (pathname === `/${locale}` || !pathname.includes('/app')) {
    return NextResponse.next()
  }

  // Check if the current route is the app route
  if (pathname.includes('/app')) {
    if (!isLoggedIn) {
      // Redirect to home page of the current locale if not logged in
      return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
