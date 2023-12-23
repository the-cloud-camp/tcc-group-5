
import { withAuth } from "next-auth/middleware"
import { NextResponse } from 'next/server'

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    {
        callbacks: {
            authorized: ({ token, req }) => {
                return token
            },
        },
    }
);

// export function middleware(request) {
//     // Access headers from the request
//     const headers = request.headers;

//     // Get the value of the 'X-Forwarded-Prefix' header
//     const pathBaseHeaderValue = headers.get('X-Forwarded-Prefix');

//     // Check if the header is present
//     if (pathBaseHeaderValue) {
//         process.env.NEXT_PUBLIC_BASE_PATH = pathBaseHeaderValue;
//     }

//     // Continue to the next middleware or route
//     return NextResponse.next();
// }

export const config = {
    matcher: ['/', '/dashboard'],
} 