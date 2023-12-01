'use client'
import React, { useState, useEffect } from 'react'
import { Row } from 'antd'

const UserId = ({ params }) => {
    const [userData, setUserData] = useState({});
    const initUserData = async () => {
        try {

        } catch (err) {
            console.log('err', err)
            return 
        }
    }
    return (
        <Row>User id: {params.id}</Row>
    )
}

export default UserId