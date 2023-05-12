import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {ConfigProvider, theme} from 'antd'
import {RouterProvider} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {router} from './routes/routes'
import './index.scss'
import {store} from './store/store'

const container = document.getElementById('root')!
const root = createRoot(container)

const client = new QueryClient()

root.render(
        <QueryClientProvider client={client}>
            <Provider store={store}>
                <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                    <RouterProvider router={router}/>
                </ConfigProvider>
            </Provider>
        </QueryClientProvider>
)

