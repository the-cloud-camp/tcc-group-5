'use client'
import React from 'react'
import { Table } from 'antd'

const StatementPage = () => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

    return (
        <Table dataSource={[]} columns={columns}/>
    )
}

export default StatementPage