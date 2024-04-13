import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import UserService from '@/api/UserService'
import AuthService from "@/api/AuthService";
import {User, initialUserState} from '@/types/User'

type UserActions = {
    updateFirstName: (firstName: User['firstName']) => void
    updateLastName: (lastName: User['lastName']) => void
    updateEmail: (email: User['email']) => void
    updateIsAuth: (isAuth: User['isAuth']) => void
    fetchUser: (accessToken:string) => Promise<void>;
    authUser: (username:string, password: string) => Promise<void>,
    reset: () => void
}

const useUserStore = create<User & UserActions>()(
    devtools(
        persist(
            (set, get) => ({
                ...initialUserState,
                updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
                updateLastName: (lastName) => set(() => ({ lastName: lastName })),
                updateEmail: (email) => set(() => ({ email: email })),
                updateIsAuth: (isAuth) => set(() => ({ isAuth: isAuth })),
                fetchUser: async (accessToken) => {
                    const user = await UserService.getUser(accessToken)
                    set(user)
                },
                authUser: async (username, password) => {
                    const authData = await AuthService.getJWT(username, password);
                    console.log(authData)
                    const user = await UserService.getUser(authData.access_token);    
                    console.log(user)                
                    set(user); set(()=>({isAuth:true}))
                },
                reset: () => set(initialUserState),
            }),
            {
                name: 'userStore'
            },
        )
    ),
)

export default useUserStore