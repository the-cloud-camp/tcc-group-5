'use client'
import React, { useEffect, useState } from 'react'
import { Button, Row } from 'antd'
// import { useUser } from '@/utils/apiClient';
// import axios from 'axios'

const UserId = ({ params }) => {
    // const { count, inc, apiInstance } = useUser()
    const [userData, setUserData] = useState({
        firstname: 'test',
        lastname: 'test',
        email: "test@yopmail.com"
    });
    const initUserData = async () => {
        try {
            console.log('apiInstance: ', apiInstance)
            const result = await apiInstance().get(`/auth/me`);
            // const result = await axios.get(`/auth/me`);
            console.log('result aaa', result)
            // setUserData(result)
            return
        } catch (err) {
            console.log('err user', err)
            return
        }
    }
    useEffect(() => {
        initUserData();
    }, [params.id, initUserData]);

    return (
        <Row>
            User id: {params.id}
            {/* {count} */}
            <Button onClick={inc}>hi</Button>
            {/* {userData} */}
        </Row>
    )
}

export default UserId