import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'

type User = {
    isAuth: Boolean
    login: String
    firstName: String
    lastName: String
    birthDay: Date
    email: String
    phone: String
    gender: Gender
    notifications: Int16Array
}

enum Gender {
    male,
    female,
    hz
}

const initialUserState: User = {
    isAuth: false,
    login: "",
    firstName: "",
    lastName: "",
    birthDay: new Date(),
    email: "",
    phone: "",
    gender: Gender.hz,
    notifications: new Int16Array(4),
}

type UserStore = {
    User, UserActions
}

const fetchUser = async (set) => {
    try {
        const response = await fetch('http://localhost:5000/api/v1/users/1');
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        const user = await response.json();
        set({ isAuth: true, ...user });
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

type UserActions = {
    updateFirstName: (firstName: User['firstName']) => void
    updateLastName: (lastName: User['lastName']) => void
    updateEmail: (email: User['email']) => void
    updateIsAuth: (isAuth: User['isAuth']) => void
    fetchUser: () => Promise<void>;
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
                fetchUser: () => fetchUser(set),
                reset: () => set(initialUserState),
            }),
            {
                name: 'userStore'
            },
        )
    ),
)

export default useUserStore