import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {Layout} from '../../components/layout'
import {route} from '../../routes/routes'
import {currentUser} from '../../api/currentUser'
import {setCurrentUser} from '../../store/slices/auth.slice'

export const Home: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token, current} = useSelector((state: any) => state.auth)

    const getCurrentUser = async (token: string) => {
        const user = await currentUser(token)
        dispatch(setCurrentUser(user))
    }

    useEffect(() => {
        if (!token) navigate(route.login)
        getCurrentUser(token).then()
    }, [])

    return (
        <Layout>
            <div>Home</div>
            {JSON.stringify(current)}
        </Layout>
    )
}
