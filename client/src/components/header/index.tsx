import React, {FC} from 'react'
import {Layout, Space, Typography} from 'antd'
import {LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons'

import {CustomButton, CustomLink} from '../../elements'
import {route} from '../../routes/routes'
import {useDispatch, useSelector} from 'react-redux'
import {outUser} from '../../store/slices/auth.slice'
import st from './header.module.scss'
import {RootState} from '../../store/store'

export const Header: FC = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state: RootState) => state.auth)


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
            {user
                ?
                <Space>
                    <span>{user.id}</span>
                    <CustomLink to={route.login}>
                        <CustomButton
                            type={'link'}
                            icon={<LogoutOutlined/>}
                            onClick={() => dispatch(outUser())}
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
