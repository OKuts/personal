import {useDispatch} from 'react-redux'
import {useMemo} from 'react'
import {bindActionCreators} from '@reduxjs/toolkit'
import {authActions} from './slices/auth.slice'

export const useActions = (): any => {
    const dispatch = useDispatch()

    return useMemo(()=>{
        bindActionCreators(authActions, dispatch)
    }, [dispatch])
}
