import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'


const useCartStore = create()(
    devtools(
        persist(
            (set, get) => ({
                cart: [],
                addToCart: (cartItem) => {
                    if(!get().exists(cartItem.id))
                        set(() => ({ cart: [...get().cart,cartItem] }))
                },
                exists: (productId)=>{
                    const cartItem = get().cart.find(item => item.id === productId);
                    if(cartItem!==undefined)return true
                    return false
                },
                removeFromCart: (productId) => {
                    const updatedCart = get().cart.filter((cartItem) => cartItem.id !== productId);
                    set(() => ({ cart: updatedCart }));
                  },
                increaseQuantity: (productId) => {
                    const cartItem = get().cart.find(item => item.id === productId);
                    cartItem.quantity=cartItem.quantity+1
                    const updatedCart = get().cart.filter((cartItem) => cartItem.id !== productId);
                    updatedCart.add(cartItem)
                    set(() => ({ cart: updatedCart}))
                },
            }),
            {
                name: 'cartStore'
            },
        )
    ),
)

export default useCartStore