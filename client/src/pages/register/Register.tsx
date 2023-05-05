import React, {FC} from 'react'
import {Layout} from '../../components/layout'
import {Card, Form, Row, Space, Typography} from 'antd'
import {CustomInput} from '../../elements/customInput'
import {PasswordInput} from '../../elements/passwordInput'
import {CustomButton} from '../../elements/customButton'
import {CustomLink} from '../../elements/customLink'
import {route} from '../../routes/routes'

export const Register: FC = () => {
    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'User register'} style={{width: '30rem'}}>
                    <Form onFinish={() => null}>
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
                            <CustomLink to={route.login}> enter</CustomLink>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
