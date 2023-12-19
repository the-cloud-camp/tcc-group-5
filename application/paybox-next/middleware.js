
import { withAuth } from "next-auth/middleware"
import { NextResponse } from 'next/server'

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    {
        callbacks: {
            authorized: ({ token, req }) => {
                console.log('token: ', token)
                return token
            },
        },
    }
);

export function middleware(request) {
    // console.log('headers: ', request.headers)
    console.log('request', request)
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/dashboard'],
} 