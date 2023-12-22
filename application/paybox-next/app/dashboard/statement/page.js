'use client'
import React, { useEffect, useState } from 'react'
import { Row, Table, Typography, Col, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useSession } from 'next-auth/react'
import { getStatementList } from './action'
import Link from 'next/link'

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
            title: 'Action',
            dataIndex: 'action',
            key: 'address',
            render: (_, record) => {
                console.log('record', record)
                return (
                    <Link href={`/dashboard/statement/${record.id}`}>
                        <SearchOutlined />
                    </Link>
                )
            }
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
            console.log('err', err)
            return
        }
    }

    useEffect(() => {
        if (session) {
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