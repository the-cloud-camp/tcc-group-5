import axios from 'axios'
export const apiInstance = () => {
    const instance = axios.create({baseURL: process.env.API_URL})
    return instance
}