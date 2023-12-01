import axios from 'axios'
export const apiInstance = () => {
    const instance = axios.create({baseURL: 'https://paybox-wnfo.onrender.com'})
    debugger
    return instance
}