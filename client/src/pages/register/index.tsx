import React, {FC} from 'react'
import {Layout} from '../../components/layout'
import {Card, Form, Row, Space, Typography} from 'antd'
import {CustomButton, CustomInput, CustomLink, PasswordInput} from '../../elements'

import {route} from '../../routes/routes'
import {registerUser, TRegisterData} from '../../api/registerUser'
import {useNavigate} from 'react-router-dom'

export const Register: FC = () => {
    const navigate = useNavigate()
    const register = async (data: TRegisterData) => {
        const {name, email, password} = data
        try {
            const user = await registerUser({name, email, password})
            localStorage.setItem('token', user.token)
            navigate(route.home)
        } catch (e) {
            navigate(route.error, {state: e})
        }
    }

    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'User register'} style={{width: '30rem'}}>
                    <Form onFinish={register}>
                        <CustomInput name={'name'} placeholder={'Name'} />
                        <CustomInput name={'email'} placeholder={'Email'} type={'email'}/>
                        <PasswordInput name={'password'} placeholder={'password'}/>
                        <PasswordInput name={'confirmPassword'} placeholder={'confirmPassword'}/>
                        <CustomButton
                            type={'primary'}
                            htmlType={'submit'}>
                            Register
                        </CustomButton>
                    </Form>
                    <Space direction={'vertical'} size={'large'}>
                        <Typography.Text>
                            account exist?
                            <CustomLink to={route.login}> Login</CustomLink>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
