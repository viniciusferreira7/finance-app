import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const hasTokenFinance = request.cookies.has('finance-token')
  // const hasTokenGoogle = request.cookies.has('next-auth.session-token')
  // TODO: Login social
  // if (hasTokenFinance || hasTokenGoogle) {
  //   return NextResponse.next()
  // }

  if (hasTokenFinance) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/sign-in', request.url))
}

export const config = {
  matcher: ['/'],
}
