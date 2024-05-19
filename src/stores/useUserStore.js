import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import UserService from '../api/UserService'
import AuthService from "../api/AuthService";
import RegService from "../api/RegService";

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
                cart: [
                    {
                        "id": 1,
                        "img": "https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/Pro/1-500x400.jpg",
                        "title": "Смартфон Apple iPhone 13",
                        "description": "Смартфон Apple iPhone 13 – это новейшая модель от компании Apple, представленная в 2023 году. Устройство оснащено чипом A15 Bionic, который обеспечивает высокую производительность и эффективную работу. Дисплей Retina XDR с диагональю 6,1 дюйма позволяет наслаждаться яркими и четкими изображениями. Камера с тройным объективом делает превосходные фотографии и видео в 4K. iPhone 13 поддерживает 5G, Face ID для безопасного разблокирования и работает на последней версии iOS.",
                        "specs": {
                          "type": "смартфон",
                          "chip": "A15 Bionic",
                          "display": "Retina XDR 6,1 дюйма",
                          "camera": "тройная камера 12 Мп"
                        },
                        "rating": 4.8,
                        "category": "Электроника",
                        "orders": 5000,
                        "sells": ["скидки недели"],
                        "quantity": 100,
                        "price": 799,
                        "old_price": 899,
                        "seller": "apple_store",
                        "is_premium_seller": true,
                        "reviews": 1200,
                        "delivery_date": "05-07-2024"
                      },
                ],
                favorites:[],
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