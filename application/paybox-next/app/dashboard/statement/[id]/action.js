'use server'
import { statementInstance } from '@/utils/apiClient'

export const getStatementDetail = async (stateId) => {
    try {
        if (!stateId) {
            throw 'i want state id!!'
        }
        const result = await statementInstance().get(`/statement/${stateId}`).then(res => res.data);
        return result
    } catch (err) {
        throw err
    }
}

export const updateStatus = async (stateId) => {
    try {
        if (!stateId) {
            throw 'i want state id!!'
        }
        const result = await statementInstance().patch(`/statement/${stateId}`).then(res => res.data);
        return result
    } catch (err) {
        throw err
    }
}