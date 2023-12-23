'use client'
import React, { useEffect, useState } from 'react'
import { Col, Row, Skeleton, Typography } from 'antd'
import { useSession } from 'next-auth/react'
// import { useUser } from '@/utils/apiClient';

const UserId = ({ params }) => {
    const { Title } = Typography
    const { data } = useSession()
    console.log('hi test log')
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