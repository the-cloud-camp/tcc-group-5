'use client'
import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Input, Skeleton, Typography, DatePicker, Button } from 'antd'
import { getStatementDetail, updateStatus } from './action'
import { useRouter } from 'next/navigation'

const StatementDetail = ({ params }) => {
    const { Title, Text } = Typography
    const router = useRouter();
    const [statementDetail, setStatementDetail] = useState()

    const _getStatementDetail = async () => {
        const result = await getStatementDetail(params.id)
        console.log('result client:', result)
        setStatementDetail(result)
        return
    }

    const _updateStatus = async () => {
        const result = await updateStatus(params.id)
        console.log('result', result)
        router.push(`/dashboard/statement/`)
        return 
    }

    useEffect(() => {
        if (params.id) {
            _getStatementDetail(params.id)
            return
        }
    }, [params.id])
    console.log('statementDetail', statementDetail)

    return (
        <Row justify={'center'}>
            <Col>
                <Title>Statement detail:  {params.id}</Title>
                {
                    statementDetail ? <>
                        <Form
                            labelCol={{
                                span: 24,
                            }}
                            wrapperCol={{
                                span: 24,
                            }}
                            style={{
                                maxWidth: 800,
                            }}
                            autoComplete="off"
                            layout='horizontal'
                            initialValues={statementDetail}
                        >
                            <Form.Item name={"formattedDate"} label="Date">
                                <Input readOnly />
                            </Form.Item>
                            <Form.Item name={"type"} label="type">
                                <Input readOnly />
                            </Form.Item>
                            <Form.Item noStyle shouldUpdate={(prev, cur) => prev.type !== cur.type}>
                                {
                                    ({ getFieldValue }) => {
                                        if (getFieldValue('type') === 'transfer') {
                                            return <Form.Item name={'destination'} label={'Destination'}>
                                                <Input readOnly />
                                            </Form.Item>
                                        }
                                    }
                                }
                            </Form.Item>
                            <Form.Item name={"amount"} label="amount">
                                <Input readOnly />
                            </Form.Item>
                            <Form.Item name={"currency"} label="currency">
                                <Input readOnly />
                            </Form.Item>
                            <Form.Item name={'status'} label="status">
                                <Input readOnly />
                            </Form.Item>
                            <Form.Item name={'description'} label="description">
                                <Input readOnly />
                            </Form.Item>
                            <Row justify={'space-between'}>
                                <Button type='dashed' onClick={() => router.back()}>Back</Button>
                                <Button type='primary' onClick={_updateStatus}>Update Status</Button>
                            </Row>
                        </Form>
                    </>
                        :
                        <Skeleton />
                }
            </Col>
        </Row>
    )
}

export default StatementDetail