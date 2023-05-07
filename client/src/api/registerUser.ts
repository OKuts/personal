import {User} from '@prisma/client'

export type TRegisterData = Omit<User, 'id'>

export const registerUser = async (data: TRegisterData) => {
    const response = await fetch('http://localhost:8000/api/users/register', {
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
