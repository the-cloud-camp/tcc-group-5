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
            name: "Credentials",
            credentials: {
                emailOrMobile: { label: "email", type: "text", placeholder: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log('req', req)
                debugger
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com", kio: 'ioio' }
                const result = await login(credentials);
                // console.log('result auth', result)
                if (result) {
                    debugger
                    return result.user
                } else {
                    return null
                }
                return null
            },
        })
    ],
    pages: {
        // signIn: '/login',
        signOut: '/auth/singout'
    },
    callbacks: {
        async jwt({ user, profile, session, account, token, trigger }) {
            console.log('jwt call', { user, profile, session, account, token, trigger });
            return token
        },
        async signIn({ user, account, email, credentials, profile }) {
            console.log('user', user)
            console.log('account', account)
            console.log('email', email)
            console.log('credentials', credentials)
            console.log('profile', profile)
            return true
        },
        async session({ session, user, token, trigger, newSession }) {

            console.log('session callback: ', session)
            console.log('user callback: ', user);
            console.log('token call: ', token)
            return {
                ...session,
                hi: 'hello world!!'
            }
        }
    }
})

export { handler as GET, handler as POST }