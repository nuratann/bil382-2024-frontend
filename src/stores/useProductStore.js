import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import RecommendationService from '../api/RecomendationService'


const useProductStore = create()(
    devtools(
        persist(
            (set, get) => ({
                recommendations: [],
                fetchRecommendations: async () => {
                    const cart = await RecommendationService.getRecomendations();
                    set(()=>({recommendations:cart}));
                },
                getProductById: (id) => {
                    const product = get().recommendations.find(product => product.id === id);
                    if(product!==undefined){
                        return product
                    }else{
                        //TODO: get product from backend
                        return null
                    }
                }
            }),
            {
                name: 'productStore'
            },
        )
    ),
)

export default useProductStore