import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    try {
        let token = request.cookies.get('token')
        console.log('token', token)
        console.log('IN PROGress')
        // const requestHeaders = new Headers(request.headers)
        // requestHeaders.set('user', JSON.stringify({ email: payload.email }))

        // const response = NextResponse.next({
        //     request: {
        //         headers: requestHeaders,
        //     },
        // })

        return NextResponse.next()
    } catch (err) {
        console.log('err', err)
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/home/:path*', '/user/:path*'],
}