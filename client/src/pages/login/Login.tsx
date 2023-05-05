import React, {FC} from 'react'
import {Layout} from '../../components/layout'
import {Card, Form, Row, Space, Typography} from 'antd'
import {CustomInput} from '../../elements/customInput'
import {PasswordInput} from '../../elements/passwordInput'
import {CustomButton} from '../../elements/customButton'
import {Link} from 'react-router-dom'
import {CustomLink} from '../../elements/customLink'
import {route} from '../../routes/routes'


export const Login: FC = () => {
    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Login user'} style={{width: '30rem'}}>
                    <Form onFinish={() => null}>
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
