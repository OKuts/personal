import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import {ErrorPage, Home, Login, Register} from '../pages'


export const route = {
    home: '/',
    employeeAdd: '/employee/add',
    employeeEdit: '/employee/edit',
    employee: '/employee',
    status: '/status',
    login: '/login',
    register: '/register',
    error: '/error',
} as const

export const router = createBrowserRouter([
    {path: route.home, element: <Home/>},
    {path: route.login, element: <Login/>},
    {path: route.register, element: <Register/>},
    {path: route.error, element: <ErrorPage/>},
])
