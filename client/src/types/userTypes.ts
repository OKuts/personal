import {User} from '@prisma/client'

export type TUserData = Omit<User, 'password' | 'id'>
export type TLoginData = Omit<User, 'id' | 'name'>
export type TUserState = User & {token: string}

export type TAuthState = {
    user: TUserState | null
    isAuthenticated: boolean
}

