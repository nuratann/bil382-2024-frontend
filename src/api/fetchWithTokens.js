import useUserStore from "../stores/useUserStore";
import AuthService from "./AuthService";

export async function fetchWithTokens(url, body, method) {

    const f = async (url, body, access_token, method) => {
        return await fetch(url, {
            method: method,
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
    const userState = useUserStore(state=>state)
    try {
        
        const response = await f(url, body, userState.user.authData.access_token, method)

        if (!response.ok) {
            const new_access_token = await AuthService.refreshAccessToken(authData.refreshToken)
            userState.updateUser({...userState.user,authData:{...authData,access_token:new_access_token}})
            f(url, body, new_access_token, method)
            throw new Error('failed to fetch with tokens')
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}