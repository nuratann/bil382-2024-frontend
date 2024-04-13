import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import UserService from '@/api/UserService'
import AuthService from "@/api/AuthService";
import {User, UserRegistrationDTO, initialUserState} from '@/types/User'
import RegService from "@/api/RegService";

type UserStore = {
    user: User
    updateIsAuth: (isAuth: User['isAuth']) => void
    signIn: (username:string, password: string) => Promise<void>,
    signUp: (user:UserRegistrationDTO) => Promise<string>
    reset: () => void
}

const useUserStore = create<UserStore>()(
    devtools(
        persist(
            (set, get) => ({
                user: initialUserState,
                updateIsAuth: (isAuth) => set(() => ({ user: {...get().user,isAuth:isAuth} })),
                signIn: async (username, password) => {
                    const authData = await AuthService.getJWT(username, password);
                    const user = await UserService.getUser(authData.access_token);
                    set(()=>({user:{...user,authData,isAuth:true,notifications:initialUserState.notifications}}));
                },
                signUp: async (user) => {
                    const response = await RegService.register(user);
                    if ('conflictField' in response){
                        return response.conflictField
                    }else{ 
                        set(()=>({user:{...response,isAuth:true,notifications:initialUserState.notifications}}));
                        return 'ok'
                    }
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