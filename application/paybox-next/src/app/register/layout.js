import React from 'react'
import { Row, Col } from 'antd'

const layout = ({ children }) => {
    return (
        <Row justify={'center'} align={'middle'} style={{ height: "100vh" }}>
            <Col span={24}>
                {children}
            </Col>
        </Row>
    )
}

export default layout