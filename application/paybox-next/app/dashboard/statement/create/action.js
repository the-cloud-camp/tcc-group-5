'use server'
import { statementInstance } from '@/utils/apiClient'

export const createStatement = async (values) => {
    try {
        console.log('values', values)
        const result = await statementInstance().post(`/statement`, values ).then(res => res.data);
        console.log('result', result)
        return result
    } catch (err) {
        return err
    }
}