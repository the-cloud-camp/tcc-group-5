'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Row, Col, Form, Button, Input, ConfigProvider } from 'antd'
import StyledComponentsRegistry from '../lib/AntdRegistry';
import theme from '../theme/themeConfig';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Home({ children }) {
  const { data: session,status } = useSession();
  console.log('session page: ', session)
  return (
    <ConfigProvider theme={theme}>
      <StyledComponentsRegistry>

        { status !== 'loading' ? session ? <>
          login already as {session.user.name} {session.user.email}
          <Button onClick={() => signOut()}>Sign Out</Button>
        </>
          : <>
            not login
            <Button onClick={() => signIn()}>Sign In</Button>
            <button onClick={() => signIn()}>Sign in</button>
            <Link href={'/auth/signin'}>sine in</Link>
          </>
          :
          'loading'
        }
        {children}
      </StyledComponentsRegistry>
    </ConfigProvider>
  )
}
