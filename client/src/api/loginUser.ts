import {User} from '@prisma/client'

export type TLoginData = Omit<User, 'id' | 'name'>

export const loginUser = async (data: TLoginData) => {
    const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const userData = await response.json()
    if (response.status !== 200) throw new Error(userData?.message)

    return userData
}
