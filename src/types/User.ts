import { Product } from "./Product"

export type User = {
    isAuth: boolean
    id:number
    username: string
    firstName: string
    lastName: string
    birthDay: string
    email: string
    phone: string
    gender: string
    notifications: Int16Array
    authData: JSON
}

export type UserRegistrationDTO = {
    username:string
    firstName:string
    lastName:string
    birthDay:string
    email:string
    phone:string
    gender:string
    password:string
}

export const initialUserState: User = {
    isAuth: false,
    id:0,
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
