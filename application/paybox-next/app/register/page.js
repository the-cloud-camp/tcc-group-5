'use client'
import React from 'react'
import { Form, Row, Col, Typography, Checkbox, Button, Input, message } from 'antd'
import { apiInstance } from '../../utils/apiClient';
import { useRouter } from 'next/navigation'

const RegisterPage = () => {
    const router = useRouter();
    const { Text } = Typography;

    const onFinish = async (values) => {
        try {
            console.log('values', values)
            const result = await apiInstance().post('/auth/register', values)
            console.log('result', result)
            message.success('Register Success');
            router.push('/login')
            return
        } catch (err) {
            console.log('err', err)
            message.error('Register Error')
            return
        }
    };

    return (
        <Row justify={'center'}>
            <Col span={24} >
                <Row justify={'center'} style={{ marginBottom: "10px" }}>
                    <Text>Paybox Register</Text>
                </Row>
            </Col>
            <Col>
                <Form
                    name="register"
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    style={{
                        maxWidth: 800,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout='vertical'
                >
                    <Form.Item
                        label="Email"
                        name="emailOrMobile"
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
                        label="confirm Password"
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your confirmPassword!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="First Name"
                        name="firstname"
                        rules={[
                            {
                                required: true,
                                message: "firstname"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                            {
                                required: true,
                                message: "lastName"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    >
                        <Button type="primary" htmlType="submit">
                            register
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default RegisterPage