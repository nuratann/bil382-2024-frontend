import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'


const useFavoritesStore = create()(
    devtools(
        persist(
            (set, get) => ({
                favorites: [],
                addFavorite: (productId) => set(() => ({ favorites: [...get().favorites,productId] })),
                removeFavorite: (productId) => {
                    const updatedFavorites = get().favorites.filter((id) => id !== productId);
                    set(() => ({ favorites: updatedFavorites }));
                  },
            }),
            {
                name: 'favoritesStore'
            },
        )
    ),
)

export default useFavoritesStore