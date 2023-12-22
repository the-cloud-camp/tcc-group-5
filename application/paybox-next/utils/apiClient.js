
import axios from 'axios';
import { cookies } from 'next/headers';


export const apiInstance = () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token')

    console.log('token auth api: ', token)
    // let token = window.localStorage.getItem('token')
    console.log('API_URL: ', process.env.API_URL)
    const instance = axios.create({
        baseURL: process.env.API_URL,
        headers: {
            Authorization: token ? `Bearer ${token.value}` : ''
        }
    });

    return instance
};
export const statementInstance = () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token')

    const instance = axios.create({
        baseURL: process.env.STATEMENT_URL,
        headers: {
            Authorization: token ? `Bearer ${token.value}` : ''
        }
    });

    return instance
}