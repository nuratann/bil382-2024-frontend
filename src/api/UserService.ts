import {User} from '@/types/User' 
import {jwtDecode} from 'jwt-decode'

class UserService {

    async getUser(accessToken:string):Promise<User> {
        try {
            const id:string = jwtDecode(accessToken).sub
            console.log(id)
            const url = `http://localhost:5000/api/v1/users/${id}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default new UserService()