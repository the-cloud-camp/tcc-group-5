import { NextResponse } from "next/server";
import { apiInstance } from "@/utils/apiClient";

export const POST = async () => {
    const register = await apiInstance().post('')
    return NextResponse.json(register)
}