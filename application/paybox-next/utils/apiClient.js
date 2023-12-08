'use client'
import {useContext} from 'react'
import axios from 'axios';
// import { cookies } from 'next/headers'
import { create } from 'zustand'


export const apiInstance = () => {
    // const cookieStore = cookies();
    // const token = cookieStore.get('token')
    let token = window.localStorage.getItem('token')
    const instance = axios.create({
        baseURL: process.env.API_URL,
        headers: {
            Authorization: token ?? `Bearer ${token}`
        }
    });

    return instance
};

export const useUser = create((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    apiInstance
  }))