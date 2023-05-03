import {createBrowserRouter} from "react-router-dom";
import {Home, Login, Register} from "../components";
import React from "react";

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
