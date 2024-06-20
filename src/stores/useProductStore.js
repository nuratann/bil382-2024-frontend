import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import RecommendationService from '../api/RecomendationService'
import ProductService from "../api/ProductService";


const initProduct = {
    "category":"Категории",
    "mediaLinks":[],
    "sellerId":"",
    "title":"",
    "description":"",
    "options":[{title: "", count: "", price: ""}],
    "specs":[],
    "stock":0,
    "deliveryDays":0,
    "price":0,
    "oldPrice":0
}




const useProductStore = create()(
    devtools(
        persist(
            (set, get) => ({
                recommendations: ['b1b19efc-3de3-4531-ab80-b878ea9de44a','1b939188-6902-417b-88c7-a9ef7131b2b5','6f726e5a-9459-4507-a3ef-b6ee524f743a'],
                product: initProduct,
                fetchRecommendations: async () => {
                    const cart = await RecommendationService.getRecomendations();
                    set(()=>({recommendations:cart}));
                },
                resetProduct: () => {
                    set(()=>({product:initProduct}))
                },
                getProductById: async (id) => {
                    // const product = get().recommendations.find(product => product.id === id);
                    // if(product!==undefined){
                    //     return product
                    // }else{
                    //     //TODO: get product from backend
                    //     return null
                    // }
                    return await ProductService.getProduct(id)
                },
                setProduct: (product) => {
                    set(()=>({product:product}))
                }
            }),
            {
                name: 'productStore'
            },
        )
    ),
)

export default useProductStore