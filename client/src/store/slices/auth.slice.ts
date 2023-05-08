import {createSlice} from '@reduxjs/toolkit'
import {TAuthState, TUser} from '../../types/userTypes'


const initialState: TAuthState = {
    token: localStorage.getItem('token'),
    current: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authUser: (state, {payload}) => {
            const {name, email}: TUser = payload
            state.current = {name, email}
            state.token = payload.token
        },

        setCurrentUser: (state, {payload}) => {
            const {name, email}: TUser = payload
            state.current = {name, email}
        },

        outUser: (state) => {
            localStorage.removeItem('token')
            state.current = null
            state.token = null
        }
    }
})

export const {authUser, setCurrentUser, outUser} = authSlice.actions
export default authSlice.reducer


