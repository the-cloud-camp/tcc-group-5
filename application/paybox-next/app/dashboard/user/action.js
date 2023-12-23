'use server'
import { cookies } from 'next/headers'
import { message } from 'antd'
import { apiInstance } from '@/utils/apiClient';

export async function login(values) {
    try {
        const body = {
            emailOrMobile: values.email,
            password: values.password
        }
        console.log('body', body)
        const result = await apiInstance().post('/auth/login', body);
        cookies().set('token', result.data.accessToken);
        return { status: "Success" }
    } catch (err) {
        console.log('err login', err)
        throw err
    }
}