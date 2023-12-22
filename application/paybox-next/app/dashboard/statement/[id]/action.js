'use server'
import { statementInstance } from '@/utils/apiClient'

export const getStatementDetail = async (stateId) => {
    try {
        console.log('stateId', stateId)
        const result = await statementInstance().get(`/statement/${stateId}`).then(res => res.data);
        console.log('result', result)
        return result
    } catch (err) {
        return err
    }
}