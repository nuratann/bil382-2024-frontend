import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import UserService from '../api/UserService'
import AuthService from "../api/AuthService";

// type UserStore = {
//     user: User
//     cart: Product[]
//     favorites: Product[]
//     updateIsAuth: (isAuth: User['isAuth']) => void
//     signIn: (username:string, password: string) => Promise<void>,
//     signUp: (user:UserRegistrationDTO) => Promise<string>
//     reset: () => void
// }

const initialUserState = {
    isAuth: false,
    id:-1,
    username: "",
    firstName: "",
    lastName: "",
    birthDay: "",
    email: "",
    phone: "",
    gender: "",
    notifications: new Int16Array(4),
    authData: null
}

const useUserStore = create()(
    devtools(
        persist(
            (set, get) => ({
                user: initialUserState,
                updateUser: (user)=>{
                    set(()=>({user:{...user}}));
                },
                signIn: async (username, password) => {
                    try{
                        const authData = await AuthService.signIn(username, password)
                        console.log(authData)
                        const user = await UserService.getUser(authData.access_token);
                        return {...user,authData,isAuth:true,notifications:initialUserState.notifications}
                    }
                    catch (error) {
                        throw error
                    }
                    
                    
                },
                signUp: async (user) => {
                    const authData = await AuthService.signUp(user);
                    await UserService.updateUser(user, authData.access_token)
                    return {...user,authData,isAuth:true,notifications:initialUserState.notifications}
                    // set(()=>({user:{...response,isAuth:true,notifications:initialUserState.notifications}}));
                },
                reset: () => set(()=>({user:{...initialUserState}})),
            }),
            {
                name: 'userStore'
            },
        )
    ),
)

export default useUserStore