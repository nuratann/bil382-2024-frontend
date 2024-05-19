import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'


const useFavoritesStore = create()(
    devtools(
        persist(
            (set, get) => ({
                favorites: [],
            }),
            {
                name: 'favoritesStore'
            },
        )
    ),
)

export default useFavoritesStore