class AuthService {

    async signIn(username, password) {
        const url = 'http://localhost:8081/api/v1/auth/signIn';

        try {

            const response = await fetch(
                url,
                {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({"username":`${username}`,"password":`${password}`})
                }
              );
            if (!response.ok) {
                throw new Error('Failed to signIn');
            }

            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async signUp(user) {
        const url = 'http://localhost:8081/api/v1/auth/signUp';

        try {

            const response = await fetch(
                url,
                {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(user)
                }
              );
            if (!response.ok) {
                throw new Error('Failed to signUp');
            }

            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async refreshAccessToken(refreshToken){
        const url = 'http://localhost:8081/api/v1/auth/refresh';

        try {
            const response = await fetch(url, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"refreshToken":`${refreshToken}`})
                }
            );

            if (!response.ok) {
                throw new Error('Failed to refresh access token');
            }

            const responseData = await response.json();
            return responseData.access_token;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default new AuthService()