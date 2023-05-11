import {createSlice} from '@reduxjs/toolkit'
import {TAuthState} from '../../types/userTypes'
import {authApi} from '../../api/auth.api'
import {RootState} from '../store'

const initialState: TAuthState = {
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        outUser: () => {
            localStorage.removeItem('token')
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled,(state, {payload})=>{
                state.user = payload
                state.isAuthenticated = true
            })
            .addMatcher(authApi.endpoints.register.matchFulfilled,(state, {payload})=>{
                state.user = payload
                state.isAuthenticated = true
            })
            .addMatcher(authApi.endpoints.current.matchFulfilled,(state, {payload})=>{
                state.user = payload
                state.isAuthenticated = true
            })
    }
})

export const {outUser} = authSlice.actions
export const authActions = authSlice.actions

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated
export const selectUser = (state: RootState) => state.auth.user

export default authSlice.reducer


