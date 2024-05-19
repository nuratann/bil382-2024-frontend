
import {jwtDecode} from 'jwt-decode'

class UserService {

    async getUser(accessToken) {
        try {
            const id = jwtDecode(accessToken).sub
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