import React, {FC} from 'react'
import {Layout} from '../../components/layout'
import {Card, Form, Row, Space, Typography} from 'antd'
import {CustomButton, CustomInput, CustomLink, PasswordInput} from '../../elements'
import {route} from '../../routes/routes'
import {useNavigate} from 'react-router-dom'
import {loginUser, TLoginData} from '../../api/loginUser'

export const Login: FC = () => {
    const navigate = useNavigate()
    const login = async (data: TLoginData) => {
        const {email, password} = data
        try {
            const user = await loginUser({email, password})
            console.log(user)
            localStorage.setItem('token', user.token)
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
