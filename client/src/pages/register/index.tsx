import React, {FC} from 'react'
import {Layout} from '../../components/layout'
import {Card, Form, Row, Space, Typography} from 'antd'
import {CustomButton, CustomInput, CustomLink, PasswordInput} from '../../elements'

import {route} from '../../routes/routes'
import {useNavigate} from 'react-router-dom'
import {useRegisterMutation} from '../../api/auth.api'
import {isMessageInError} from '../../utils/isMessageInError'
import {TUserState} from '../../types/userTypes'

export const Register: FC = () => {
    const navigate = useNavigate()
    const [registerUser] = useRegisterMutation()
    const register = async (data: TUserState) => {
        try {
            await registerUser(data)
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
