
import axios from 'axios';

export const apiInstance = () => {
    // const cookieStore = cookies();
    // const token = cookieStore.get('token')
    // let token = window.localStorage.getItem('token')
    console.log('API_URL: ', process.env.API_URL)
    const instance = axios.create({
        baseURL: process.env.API_URL,
        // headers: {
        //     Authorization: token ?? `Bearer ${token}`
        // }
    });

    return instance
};
export const statementInstance = () => {
    const instance = axios.create({
        baseURL: process.env.STATEMENT_URL,
        // headers: {
        //     Authorization: token ?? `Bearer ${token}`
        // }
    });

    return instance
}