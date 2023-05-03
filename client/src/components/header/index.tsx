import React, {FC} from 'react'
import {Layout, Space, Typography} from 'antd'
import {TeamOutlined} from '@ant-design/icons'
import st from './header.module.scss'
import {CustomButton} from '../CustomButton'
import {CustomLink} from '../CustomLink'
import {route} from '../../routes/routes'

export const Header: FC = () => {
    return (
        <Layout.Header className={st.header}>
            <Space>
                <TeamOutlined className={st.teamIcon}/>
                <CustomLink to={route.home}>
                    <CustomButton type={'link'}>
                        <Typography.Title level={4}>Home</Typography.Title>
                    </CustomButton>
                </CustomLink>
            </Space>
            <Space>
                <CustomLink to={route.login}>
                    <CustomButton type={'link'}>
                        <Typography.Title level={4}>Login</Typography.Title>
                    </CustomButton>
                </CustomLink>
            </Space>
            <Space>
                <CustomLink to={route.register}>
                    <CustomButton type={'link'}>
                        <Typography.Title level={4}>Register</Typography.Title>
                    </CustomButton>
                </CustomLink>
            </Space>
        </Layout.Header>
    )
}
