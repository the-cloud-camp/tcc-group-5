'use client'
import React, { useState } from 'react'
import { Row } from 'antd'

const UserId = ({ params }) => {
    const [userData, setUserData] = useState({});
    return (
        <Row>User id: {params.id}</Row>
    )
}

export default UserId