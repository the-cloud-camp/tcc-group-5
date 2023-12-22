'use client'
import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme, Row, Col, Typography } from 'antd';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
    }),
);
const layout = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const _items = [
        {
            label: <Link href={'/dashboard/user/me'}>Profile</Link>
        },
        {
            label: <Link href={'/dashboard/statement'}>Statement</Link>
        },
        {
            label: <Row onClick={() => { signOut({ callbackUrl: "/login", redirect: true }) }}>Sign out</Row>
        }
    ]

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Row justify={'center'}>
                    <Col>
                        <Typography.Title style={{color: 'white'}}>
                            PAYBox
                        </Typography.Title>
                    </Col>
                </Row>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
                    items={_items}
                    onClick={(value) => {
                        console.log('value: ', value)
                    }} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    PAYBox ©2023
                </Footer>
            </Layout>
        </Layout>
    );
};
export default layout;