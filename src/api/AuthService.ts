class AuthService {

    async getJWT(username: string, password: string) {
        const url = 'http://localhost:5052/realms/buyers_realm/protocol/openid-connect/token';
        const clientId = 'springsecurity';
        const clientSecret = '63B0GkzMnnw7VgYsVqapaWrwOzKgXmRF';

        const data = {
            grant_type: 'password',
            username: username,
            password: password,
            client_id: clientId,
            client_secret: clientSecret,
        };

        try {

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(data).toString(),
            })
            if (!response.ok) {
                throw new Error('Failed to get auth data');
            }

            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async refreshAccessToken(refreshToken: string): Promise<string> {
        const keycloakUrl = 'http://localhost:5052/realms/buyers_realm/protocol/openid-connect/token';
        const clientId = 'springsecurity';
        const clientSecret = '63B0GkzMnnw7VgYsVqapaWrwOzKgXmRF';

        const data = {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret,
        };

        try {
            const response = await fetch(keycloakUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(data).toString(),
            });

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