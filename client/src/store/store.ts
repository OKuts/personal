import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/auth.slice'
import employeeReducer from './slices/employee.slice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        employee: employeeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
