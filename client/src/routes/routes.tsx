import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import {Home} from '../pages/home/Home'
import {Login} from '../pages/login/Login'
import {Register} from '../pages/register/Register'

export const route = {
    home: '/',
    employeeAdd: '/employee/add',
    employeeEdit: '/employee/edit',
    employee: '/employee',
    status: '/status',
    login: '/login',
    register: '/register'
} as const

export const router = createBrowserRouter([
    {path: route.home, element: <Home/>},
    {path: route.login, element: <Login/>},
    {path: route.register, element: <Register/>},
])
