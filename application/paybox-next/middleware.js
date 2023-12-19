
import { withAuth } from "next-auth/middleware"

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
)

export const config = {
    matcher: '/dashboard',
}