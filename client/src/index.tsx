import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {ConfigProvider, theme} from 'antd'
import {RouterProvider} from 'react-router-dom'
import {store} from './app/store'
import {router} from './routes/routes'
import './index.scss'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <RouterProvider router={router}/>
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
)

