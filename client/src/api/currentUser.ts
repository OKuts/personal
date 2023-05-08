
export const currentUser = async (token: string) => {
    const response = await fetch('http://localhost:8000/api/users/current', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const userData = await response.json()
    if (response.status !== 200) throw new Error(userData?.message)

    const {email, name} = userData
    return {email, name}
}
