'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Row, Col, Form, Input, Skeleton, Typography, Select, Button, message, InputNumber } from 'antd'
import { createStatement } from './action'

const CreateStatementpage = () => {
    const { Title, Text } = Typography
    const router = useRouter();
    const [statementDetail, setStatementDetail] = useState();

    const handleSubmit = async (values) => {
        try {
            console.log('values', values)
            const body = {
                ...values,
                source: "adsd-xdasd-asdad"
            }
            const submit = await createStatement(body)
            message.success("Create Success!!")
            router.back()
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
                    <Form.Item name={"type"} label="type"
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
                    <Form.Item name={"amount"} label="amount"
                     rules={[{
                        required: true,
                        message: "required amount"
                    }]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={"currency"} label="currency"
                     rules={[{
                        required: true,
                        message: "required currency"
                    }]}
                    >
                        <Input  />
                    </Form.Item>
                    <Form.Item name={'description'} label="description"
                     rules={[{
                        required: true,
                        message: "required description"
                    }]}
                    >
                        <Input  />
                    </Form.Item>
                    <Row justify={'center'}>
                        <Col span={12}>
                            <Button type='default' onClick={() => router.back()}>Back</Button>
                        </Col>
                        <Col span={12}>
                            <Button type='primary' htmlType="submit">Subnmit</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default CreateStatementpage