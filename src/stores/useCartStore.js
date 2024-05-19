import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'


const useCartStore = create()(
    devtools(
        persist(
            (set, get) => ({
                cart: [],
            }),
            {
                name: 'cartStore'
            },
        )
    ),
)

export default useCartStore