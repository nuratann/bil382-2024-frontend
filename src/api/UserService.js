import {users} from './MockData/users'
import {jwtDecode} from 'jwt-decode'

class UserService {

    async getUser(accessToken) {
        try {
            const id = jwtDecode(accessToken).sub
            console.log(id)
            const url = `http://localhost:8081/api/v1/users/${id}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
            });
    
            if (!response.ok) {
                throw new Error('failed to fetch user')
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async updateUser(user, accessToken) {
        try {
            const id = jwtDecode(accessToken).sub
            console.log(id)
            const dto = {id:id,...user}
            const url = `http://localhost:8081/api/v1/users/`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dto)
            });
    
            if (!response.ok) {
                throw new Error('failed to fetch user')
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default new UserService()