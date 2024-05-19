
import AuthService from './AuthService'
class RegService{
    async checkEmailOrUsername(emailOrUsername){
        try {
            const response = await fetch(
              `http://localhost:5000/api/v1/users/check/${emailOrUsername}`,
              {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
              }
            );
        
            if (response.ok) {
              return await response.json();
            } else {
              throw new Error('Ошибка при проверке email');
            }
          } catch (error) {
            console.error(error);
            return false;
          }
    }

    async register(user){
        try {
            const response = await fetch(
              `http://localhost:5000/api/v1/users/`,
              {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
              }
            );
        
            if (response.ok)  {
                const authData = await AuthService.getJWT(user.username, user.password);
                const userdto =  await response.json();
                const userfull = {
                    ...userdto,
                    authData
                }
                return userfull;
            } else if(response.status===409){
                return await response.json();
            }else {
              throw new Error('Ошибка при регистрации');
            }
          } catch (error) {
            console.error(error);
            return false;
          }
    }
}

export default new RegService()