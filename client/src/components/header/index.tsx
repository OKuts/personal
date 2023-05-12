import React, {FC} from 'react'
import {Layout, Space, Typography} from 'antd'
import {useQuery} from '@tanstack/react-query'
import {LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons'
import {CustomButton, CustomLink} from '../../elements'
import {route} from '../../routes/routes'
import st from './header.module.scss'
import {Api} from '../../api/myApi'

export const Header: FC = () => {
    const {data, isLoading, isError} = useQuery(['auth'], Api.getCurrentUser)

    console.log(data, isLoading, isError)

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
            {data?.id
                ?
                <Space>
                    <span>{data.id}</span>
                    <CustomLink to={route.login}>
                        <CustomButton
                            type={'link'}
                            icon={<LogoutOutlined/>}
                            onClick={() => null}
                        >
                            Out
                        </CustomButton>
                    </CustomLink>
                </Space>
                :
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
                </Space>}
        </Layout.Header>
    )
}
