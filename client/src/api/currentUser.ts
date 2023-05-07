import {User} from '@prisma/client'

export type TLoginData = Omit<User, 'id' | 'name'>

export const currentUser = async (data: TLoginData) => {
    const response = await fetch('http://localhost:8000/api/users/current', {
        headers: {
            'Authorization': 'application/json'
        }
    })
    const userData = await response.json()
    if (response.status !== 200) throw new Error(userData?.message)

    return userData
}
