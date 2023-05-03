import React, {FC, ReactNode} from 'react'
import {Button} from 'antd'
import {ButtonType} from 'antd/es/button'

type Props = {
    children: ReactNode,
    type?: ButtonType,
    danger?: boolean,
    loading?: boolean,
    shape?: 'default' | 'circle' | 'round' | undefined,
    icon?: ReactNode,
    onClick?: () => void
}
export const CustomButton: FC<Props> = (
    {
        children,
        type = 'default',
        danger,
        loading,
        shape = 'default',
        icon,
        onClick
    }) => {

    return (
        <Button
            type={type}
            danger={danger}
            loading={loading}
            shape={shape}
            icon={icon}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
