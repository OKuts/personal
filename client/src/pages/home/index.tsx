import React, {FC, useEffect} from 'react'
import {Layout} from '../../components/layout'
import {useSelector} from 'react-redux'
import {TAuth} from '../../store/slices/auth.slice'
import {useNavigate} from 'react-router-dom'
import {route} from '../../routes/routes'

export const Home: FC = () => {
    const navigate = useNavigate()
    const {token} = useSelector((state: any) => state.auth)

    useEffect(()=>{
        if (!token) navigate(route.login)
    }, [])

    return (
        <Layout>
            <div>Home</div>
        </Layout>
    )
}
