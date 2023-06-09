import React, {FC} from 'react'
import {Form, Input} from 'antd'
import {NamePath} from 'antd/es/form/interface'

type Props = {
    name: string,
    placeholder: string,
    dependencies?: NamePath[],
}
export const PasswordInput: FC<Props> = (
    {
        name,
        placeholder,
        dependencies
    }) => {


    return (
        <Form.Item
            name={name}
            dependencies={dependencies}
            hasFeedback
            rules={[
                {required: true, message: 'required'},
                ({getFieldValue}) => ({
                    validator(_, value) {
                        if(!value) return Promise.resolve()
                        if (name === 'confirmPassword') {
                            if(getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject(new Error('passwords must match'))
                        } else {
                            if (value.length < 6 ) {
                                return Promise.reject(new Error('passwords must be more then 6 symbols'))
                            }
                            return Promise.resolve()
                        }
                    }
                })
            ]}
        >
            <Input.Password
                placeholder={placeholder}
                size={'large'}
            />
        </Form.Item>
    )
}
