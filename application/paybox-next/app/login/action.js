'use server'
// import { cookies } from 'next/headers'
import { apiInstance } from '@/utils/apiClient';

export const login = async (values) => {
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