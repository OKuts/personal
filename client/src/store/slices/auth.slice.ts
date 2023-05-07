import {createSlice} from '@reduxjs/toolkit'

export type TAuth = {
    token: string | null
}

const initialState: TAuth = {
    token: localStorage.getItem('token')
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export default authSlice.reducer


