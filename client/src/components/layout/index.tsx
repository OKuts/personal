import React, {FC, ReactNode} from 'react'
import {Layout as AntLayout} from 'antd'
import st from './layout.module.scss'
import {Header} from '../header'

type Props = {
    children: ReactNode
}
export const Layout: FC<Props> = ({children}) => {

    return (
        <div className={st.main}>
            <AntLayout.Content>
                <Header/>
                {children}
            </AntLayout.Content>
        </div>
    )
}
