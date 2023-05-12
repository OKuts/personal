export class Api {
    static async getCurrentUser() {
        const data = await fetch('http://localhost:8000/api/users/current', {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                'Authorization': 'Bearer '
            }
        })

       if (data.status >= 400) {
           console.log('Error')
       }

        return data.json()
    }
}
