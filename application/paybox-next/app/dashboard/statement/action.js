'use server'
import { statementInstance } from "@/utils/apiClient"

export const getStatementList = async () => {
    try {
        const result = await statementInstance().get('/statement/history/adsd-xdasd-asdad').then(res => res.data);
        return result
    } catch (err) {
        return err
    }
}