import Image from 'next/image'
import styles from './page.module.css'
import { Row, Col, Form, Button, Input, ConfigProvider } from 'antd'
import StyledComponentsRegistry from '../lib/AntdRegistry';
import theme from '../theme/themeConfig';

export default function Home({ children }) {
  return (
    <ConfigProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ConfigProvider>
  )
}
