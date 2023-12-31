'use client'
import React, { useEffect, useState } from 'react'
import { Row, Table, Typography, Col, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useSession } from 'next-auth/react'
import { getStatementList } from './action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const StatementPage = () => {
    const [statementList, setStatementList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { Text } = Typography
    const router = useRouter()
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
                    <Row justify={'space-between'}>
                        <Link href={`/dashboard/statement/${record.id}`}>
                            <SearchOutlined />
                        </Link>
                    </Row>
                )
            }
        },
    ];
    const { data: session, status } = useSession();
    const getListStatement = async () => {
        try {
            setIsLoading(true)
            // const result = await statementInstance().get(`/statement/history/${session.user.id}`);
            const result = await getStatementList(session.user.id);
            console.log('result aaa', result)
            setStatementList(result)
            setIsLoading(false)
            return
        } catch (err) {
            setIsLoading(false)
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
                    <Button type='primary'
                        onClick={() => {
                            console.log('hi')
                            return router.push('/dashboard/statement/create')
                        }}
                    >
                        create
                    </Button>
                </Row>
                <Table loading={isLoading} dataSource={statementList} columns={columns} />
            </Col>
        </Row>
    )
}

export default StatementPage