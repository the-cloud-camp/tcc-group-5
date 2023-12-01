import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    try {
        let token = request.cookies.get('token')
        console.log('token', token)
        console.log('IN PROGress')
        debugger
        return NextResponse.redirect(new URL('/login', request.url))
    } catch (err) {

    }
}

export const config = {
    matcher: ['/home/:path*', '/user/:path*'],
}