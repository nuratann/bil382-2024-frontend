import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import UserService from '../api/UserService'
import AuthService from "../api/AuthService";
import { Avatar } from "@chakra-ui/react";

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
    birthDate: "",
    email: "",
    phone: "",
    gender: "",
    avatarImg: "",
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
                        const user = await UserService.getUser(authData.access_token);
                        return {...user,authData,isAuth:true,notifications:initialUserState.notifications}
                    }
                    catch (error) {
                        throw error
                    }
                    
                    
                },
                signUp: async (user, type) => {
                    try{
                        if(type==='register'){
                            const authData = await AuthService.signUp(user);
                            await UserService.createUser(user, authData.access_token)
                            return {...user,authData,isAuth:true,notifications:initialUserState.notifications}
                        }else{
                            const authData = await AuthService.update(user);
                            await UserService.updateUser(user, authData.access_token)
                            return {...user,authData,isAuth:true,notifications:initialUserState.notifications}
                        }
                    }
                    catch (error) {
                        throw error
                    }
                    // set(()=>({user:{...response,isAuth:true,notifications:initialUserState.notifications}}));
                },
                fullName: () => {
                    return get().user.firstName + " " + get().user.lastName
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