'use client'
import React, { useEffect, useState } from 'react'
import { Row, Table, Typography, Col, Button } from 'antd'
import { statementInstance } from '@/utils/apiClient'
import { useSession } from 'next-auth/react'
import { getStatementList } from './action'

const StatementPage = () => {
    const [statementList, setStatementList] = useState([])
    const { Text } = Typography
    const columns = [
        {
            title: 'Date',
            dataIndex: 'formattedDate',
            key: 'date',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const { data: session, status } = useSession();
    const getListStatement = async () => {
        try {
            // const result = await statementInstance().get(`/statement/history/${session.user.id}`);
            const result = await getStatementList();
            console.log('result aaa', result)
            setStatementList(result)
            return
        } catch (err) {
            console.log('err user', err)
            return
        }
    }

    useEffect(() => {
        if (session) {
            debugger
            getListStatement()
        }
    }, [session])

    return (
        <Row justify={'center'}>
            <Col span={24}>
                <Row justify={'space-between'}>
                    <Text style={{ fontSize: "2rem" }}>Statement list</Text>
                    <Button type='primary'>สร้าง</Button>
                </Row>
                <Table dataSource={statementList} columns={columns} />
            </Col>
        </Row>
    )
}

export default StatementPage