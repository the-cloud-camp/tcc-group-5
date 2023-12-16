import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { apiInstance } from '@/utils/apiClient'

const login = async (values) => {
    try {
        console.log('values login: ', values)
        const body = {
            emailOrMobile: values.emailOrMobile,
            password: values.password
        }
        debugger
        const result = await apiInstance().post('auth/login', body).then(res => res.data);
        console.log('Auth Success~~')
        return Promise.resolve({ ...result });
    } catch (err) {
        console.log('err auth login', err)
        return Promise.reject(err);
    }
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Paybox",
            credentials: {
                emailOrMobile: { label: "email", type: "text", placeholder: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log('req', req)
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com", kio: 'ioio' }
                const result = await login(credentials);
                if (result) {
                    console.log('result', result)
                    return result.user
                }
                return null
            },
        })
    ],
    pages: {
        signIn: '/login',
        // signOut: '/auth/singout'
    },
    callbacks: {
        async jwt({ user, profile, session, account, token, trigger }) {
            console.log('jwt call 2', { user, profile, session, account, token, trigger });
            if (user) {
                token.user = user
            }
            return token
        },
        async signIn({ user, account, email, credentials, profile }) {
            return true
        },
        async session({ session, user, token, trigger, newSession }) {
            console.log('session callback: ', { session, user, token, trigger, newSession })
            if (token.id) {
                session.user = { ...session.user, ...token.user }
            }
            return {
                ...session,
                hi: 'hello world!!'
            }
        }
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }