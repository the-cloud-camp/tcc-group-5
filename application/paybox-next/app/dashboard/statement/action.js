'use server'
import { statementInstance } from "@/utils/apiClient"

export const getStatementList = async (userId) => {
    try {
        const result = await statementInstance().get(`/statement/history/${userId}`).then(res => res.data);
        return result
    } catch (err) {
        return err
    }
}