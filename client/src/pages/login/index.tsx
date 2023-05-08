import React, {FC} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Card, Form, Row, Space, Typography} from 'antd'

import {Layout} from '../../components/layout'
import {CustomButton, CustomInput, CustomLink, PasswordInput} from '../../elements'
import {route} from '../../routes/routes'
import {loginUser, TLoginData} from '../../api/loginUser'
import {authUser} from '../../store/slices/auth.slice'

export const Login: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = async (data: TLoginData) => {
        const {email, password} = data
        try {
            const user = await loginUser({email, password})
            dispatch(authUser(user))

            navigate(route.home)
        } catch (e) {
            navigate(route.error, {state: e})
        }
    }
    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Login user'} style={{width: '30rem'}}>
                    <Form onFinish={login}>
                        <CustomInput name={'email'} placeholder={'Email'} type={'email'}/>
                        <PasswordInput name={'password'} placeholder={'password'}/>
                        <CustomButton
                            type={'primary'}
                            htmlType={'submit'}>
                            Enter
                        </CustomButton>
                    </Form>
                    <Space direction={'vertical'} size={'large'}>
                        <Typography.Text>
                            no account?
                            <CustomLink to={route.register}> register</CustomLink>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
