import {TError} from '../types/errorType'

export const isMessageInError = (err: unknown): err is TError => {
    return (
        typeof err === 'object'
        && err !== null
        && typeof (err as Record<string, unknown>).data === 'object'
    )
}
