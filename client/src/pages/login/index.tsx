import React, {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {Card, Form, Row, Space, Typography} from 'antd'

import {Layout} from '../../components/layout'
import {CustomButton, CustomInput, CustomLink, PasswordInput} from '../../elements'
import {route} from '../../routes/routes'
import {useLoginMutation} from '../../api/auth.api'
import {TLoginData} from '../../types/userTypes'
import {isMessageInError} from '../../utils/isMessageInError'


export const Login: FC = () => {
    const navigate = useNavigate()
    const [loginUser] = useLoginMutation()
    const login = async (data: TLoginData) => {
        try {
            await loginUser(data)
            navigate(route.home)
        } catch (err) {
            navigate(route.error,
                {state: isMessageInError(err) ? err.data.message : 'Unknown error'}
            )
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
