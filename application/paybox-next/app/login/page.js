'use client';
import React from 'react'
import { Button, Row, Col, Space, Layout, Form, Input, Checkbox, Typography, message } from 'antd';
import { SignJWT, importJWK } from 'jose'
import { apiInstance } from '@/utils/apiClient';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const { Text } = Typography
    const onFinish = async (values) => {
        try {
            const body = {
                emailOrMobile: values.email,
                password: values.password
            }
            const result = await apiInstance().post('/auth/login', body);
            console.log('result', result)
            message.success('login success')
            router.push('/user')
            console.log('Success:', values);
        } catch (err) {
            message.error('Err!!')
            return
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row justify={'center'}>
            <Col span={24} >
                <Row justify={'center'} style={{ marginBottom: "10px" }}>
                    <Text>Paybox Login</Text>
                </Row>
            </Col>
            <Col>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button type='link'>register</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default Page