import {api} from './api'
import {User} from '@prisma/client'
import {TLoginData, TUserData, TUserState} from '../types/userTypes'

export const authApi = api.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation<TUserState, TLoginData>({
            query: (loginData) => ({
                url: '/users/login',
                method: 'POST',
                body: loginData
            }),
        }),
        register: builder.mutation<TUserState, TUserData>({
            query: (userData) => ({
                url: '/users/register',
                method: 'POST',
                body: userData
            }),
        }),
        current: builder.query<TUserState, void>({
            query: () => ({
                url: '/users/current',
                method: 'GET',
            }),
        }),
    })
})

export const {useCurrentQuery, useLoginMutation, useRegisterMutation} = authApi
export const {endpoints: {login, register, current}} = authApi
