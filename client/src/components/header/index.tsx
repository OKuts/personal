import React, {FC} from 'react'
import {Layout, Space, Typography} from 'antd'
import {LoginOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons'
import st from './header.module.scss'
import {CustomButton} from '../../elements/customButton'
import {CustomLink} from '../../elements/customLink'
import {route} from '../../routes/routes'

export const Header: FC = () => {
    return (
        <Layout.Header className={st.header}>
            <Space>
                <CustomLink to={route.home}>
                    <TeamOutlined className={st.teamIcon}/>
                    <CustomButton type={'ghost'}>
                        <Typography.Title level={2}>Employees</Typography.Title>
                    </CustomButton>
                </CustomLink>
            </Space>
            <Space>
                <CustomLink to={route.login}>
                    <CustomButton type={'link'} icon={<UserOutlined/>}>
                        Login
                    </CustomButton>
                </CustomLink>
                <CustomLink to={route.register}>
                    <CustomButton type={'link'} icon={<LoginOutlined/>}>
                        Register
                    </CustomButton>
                </CustomLink>
            </Space>
        </Layout.Header>
    )
}
