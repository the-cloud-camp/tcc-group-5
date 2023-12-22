import { apiInstance } from "@/utils/apiClient";

export async function register(values) {
    try {
        const result = await apiInstance().post('/auth/register', values)
        return { status: "Success" }
    } catch (err) {
        console.log('err login', err)
    }
}