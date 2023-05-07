import React, {FC} from 'react'
import {Alert, Space} from 'antd'
import {Layout} from '../../components/layout'
import {useLocation, useNavigate} from 'react-router-dom'
import {route} from '../../routes/routes'

export const ErrorPage: FC = () => {
    const {message} = useLocation().state || null
    const navigate = useNavigate()
    return (
        <Layout>
            <Space direction="vertical" style={{width: '100%'}}>
                <Alert
                    message="Error"
                    showIcon
                    description={message}
                    type="error"
                    closable
                    onClick={()=> navigate(route.login)}
                />
            </Space>
        </Layout>
    )
}
