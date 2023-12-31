'use client'
import React from 'react'
import { Form, Row, Col, Typography, Checkbox, Button, Input, message } from 'antd'
import { useRouter } from 'next/navigation'
import { register } from './action';
import { BUILD_ID_FILE } from 'next/dist/shared/lib/constants';

const RegisterPage = () => {
    const router = useRouter();
    const { Text } = Typography;

    const onFinish = async (values) => {
        try {
            const result = await register(values)
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
                        name="firstName"
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
                        <Row justify={'space-between'}>
                            <Button onClick={() => router.back()}>back</Button>
                            <Button type="primary" htmlType="submit">
                                register
                            </Button>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default RegisterPage