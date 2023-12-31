'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Row, Col, Form, Input, Skeleton, Typography, Select, Button, message, InputNumber } from 'antd'
import { createStatement } from './action'

const CreateStatementpage = () => {
    const { data: session } = useSession()
    const { Title, Text } = Typography
    const router = useRouter();
    const [statementDetail, setStatementDetail] = useState();

    const handleSubmit = async (values) => {
        try {
            console.log('values', values)
            const body = {
                ...values,
                source: session.user.id
            }
            debugger
            const submit = await createStatement(body)
            debugger
            message.success("Create Success!!")
            debugger
            router.push('/dashboard/statement')
            return submit
        } catch (err) {
            return err
        }
    }

    return (
        <Row >
            <Col span={10}>
                <Title>Create Statement</Title>
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
                    onFinish={handleSubmit}
                >
                    <Form.Item name={"type"} label="Type"
                        rules={[{
                            required: true,
                            message: "select your type"
                        }]}
                    >
                        <Select>
                            <Select.Option value={'deposit'}>deposit</Select.Option>
                            <Select.Option value={'transfer'}>transfer</Select.Option>
                            <Select.Option value={'withdraw'}>withdraw</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item noStyle shouldUpdate={(prev, cur) => prev.type !== cur.type}>
                        {
                            ({ getFieldValue }) => {
                                if (getFieldValue('type') === 'transfer') {
                                    return <Form.Item name={'destination'} label={'Destination'}>
                                        <Input />
                                    </Form.Item>
                                }
                            }
                        }
                    </Form.Item>
                    <Form.Item name={'paymentMethod'} label="Payment method">
                        <Select>
                            <Select.Option value={'credit_card'}>credit card</Select.Option>
                            <Select.Option value={'bank_transfer'}>bank transfer</Select.Option>
                            <Select.Option value={'cash'}>cash</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={"amount"} label="Amount"
                        rules={[{
                            required: true,
                            message: "required amount"
                        }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={"currency"} label="Currency"
                        rules={[{
                            required: true,
                            message: "required currency"
                        }]}
                    >
                        <Select>
                            <Select.Option value={'USD'}>USD</Select.Option>
                            <Select.Option value={'EUR'}>EUR</Select.Option>
                            <Select.Option value={'THB'}>THB</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name={'description'} label="Description"
                        rules={[{
                            required: true,
                            message: "required description"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Row justify={'center'}>
                        <Col span={12}>
                            <Button type='default' onClick={() => router.back()}>Back</Button>
                        </Col>
                        <Col span={12}>
                            <Button type='primary' htmlType="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default CreateStatementpage