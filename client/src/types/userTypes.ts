import {User} from '@prisma/client'

export type TUser = Omit<User, 'password' | 'id'>

export type TAuthState = {
    token: string | null
    current: TUser | null
}
