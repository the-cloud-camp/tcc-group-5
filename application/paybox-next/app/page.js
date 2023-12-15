'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Row, Col, Form, Button, Input, ConfigProvider, Typography } from 'antd'
import StyledComponentsRegistry from '../lib/AntdRegistry';
import theme from '../theme/themeConfig';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Home({ children }) {
  const { Text } = Typography
  const { data: session, status } = useSession();
  
  return (
    <ConfigProvider theme={theme}>
      <StyledComponentsRegistry>
        <Text>Home page</Text>
        {status !== 'loading' ? session ? <>
          login already as {session.user.name} {session.user.email}
          <Button onClick={() => signOut()}>Sign Out</Button>
        </>
          : <>
            not login
            <Button onClick={() => signIn()}>Sign In</Button>
            <button onClick={() => signIn()}>Sign in</button>
            <Link href={'/auth/signin'}>register</Link>
          </>
          :
          'loading'
        }
        {children}
      </StyledComponentsRegistry>
    </ConfigProvider>
  )
}
