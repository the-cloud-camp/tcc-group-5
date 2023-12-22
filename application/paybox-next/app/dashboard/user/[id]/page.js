'use client'
import React, { useEffect, useState } from 'react'
import { Col, Row, Skeleton, Typography } from 'antd'
import { useSession } from 'next-auth/react'
// import { useUser } from '@/utils/apiClient';

const UserId = ({ params }) => {
    // const { count, inc, apiInstance } = useUser()
    const { Title } = Typography
    const { data } = useSession()

    // const initUserData = async () => {
    //     try {
    //         console.log('apiInstance: ', apiInstance)
    //         const result = await apiInstance().get(`/auth/me`);
    //         // const result = await axios.get(`/auth/me`);
    //         console.log('result aaa', result)
    //         // setUserData(result)
    //         return
    //     } catch (err) {
    //         console.log('err user', err)
    //         return
    //     }
    // }
    // useEffect(() => {
    //     initUserData();
    // }, [params.id, initUserData]);
    console.log('data', data)
    return (
        <Row>
            <Col span={24}>
                {
                    data ? (<>
                        <Title>User id: {data.user.id}</Title>
                        <Title>Name: {`${data.user.firstName} ${data.user.lastName}`}</Title>
                        <Row>

                            <Title> Mobile: {data.user.mobile || '-'}</Title>
                        </Row>
                    </>)
                        :
                        <Skeleton />
                }
            </Col>
        </Row>
    )
}

export default UserId