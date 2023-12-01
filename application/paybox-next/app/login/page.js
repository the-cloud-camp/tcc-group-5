'use client';
import React from 'react'
import { Button, Row, Col, Space, Layout, Form, Input, Checkbox, Typography, message } from 'antd';
import { SignJWT, importJWK } from 'jose'
const { Header, Footer, Sider, Content } = Layout;

const Page = () => {
    const { Text } = Typography
    const onFinish = async (values) => {
        try {
            if (values.email === 'admin@test.com' && values.password === '1234') {
                // Login pass
                const secretJWK = {
                    kty: 'oct',
                    k: process.env.JOSE_SECRET // Replace with your actual base64 encoded secret key
                }

                const secretKey = await importJWK(secretJWK, 'HS256')
                const token = await new SignJWT({ email: 'mike@test.com' })
                    .setProtectedHeader({ alg: 'HS256' })
                    .setIssuedAt()
                    .setExpirationTime('1h') // Token expires in 1 hour
                    .sign(secretKey)

                cookies().set('token', token)
                redirect('/manage/blog')
            } else {
                throw new Error('Login fail')
            }
            message.success('login success')
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
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
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
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default Page