import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import { sellers } from "../api/MockData/sellers";


const useSellersStore = create()(
    devtools(
        persist(
            (set, get) => ({
                cachedSellers: sellers,
                fetchSeller: async (id) => {
                    // set(()=>({cachedSellers:}));
                },
                getSellerById: (id) => {
                    const seller = get().cachedSellers.find(seller => seller.id === id);
                    if(seller!==undefined){
                        return seller
                    }else{
                        //TODO: use fetchSeller
                        return null
                    }
                },
            }),
            {
                name: 'favoritesStore'
            },
        )
    ),
)

export default useSellersStore