'use server'
import { apiInstance } from "@/utils/apiClient";

export const register = async (values) => {
    try {
        const result = await apiInstance().post('/auth/register', values)
        return { status: "Success", result }
    } catch (err) {
        console.log('err login', err)
        throw err
    }
}