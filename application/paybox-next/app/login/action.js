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
        const result = await apiInstance().post('/auth/login', body);
        console.log('result', result)
        cookies().set('token', token)
        console.log('Success:', values);

    } catch (err) {
        console.log('err', err)
    }
}