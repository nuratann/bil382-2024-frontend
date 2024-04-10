import { create } from "zustand";

type User = {
    username: String
    firstName: String
    lastName: String
    birthDay: Date
    email: String
    gender: Gender
}

enum Gender {
    male,
    female,
    hz
}  

type UserActions = {
    updateFirstName: (firstName: User['firstName']) => void
    updateLastName: (lastName: User['lastName']) => void
    updateEmail: (email: User['email']) => void
}

const useUserStore = create<User & UserActions>((set) => ({
    username: "",
    firstName: "",
    lastName: "",
    birthDay: new Date(),
    email: "",
    gender: Gender.hz,
    updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
    updateLastName: (lastName) => set(() => ({ lastName: lastName })),
    updateEmail: (email) => set(() => ({ email: email })),
  })) 