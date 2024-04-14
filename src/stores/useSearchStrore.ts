import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'

type SearchStore = {
    query: string,
    history: string[],
    choosenCat: string,
    isChoosen: boolean,
    updateQuery: (new_query: string) => void,
    updateChoosen: (category: string) => void,
    reset: () => void
}

const useSearchStore = create<SearchStore>()(
    devtools(
        persist(
            (set, get) => ({
                query: '',
                history: ['ryzen 7840hs', 'xiaomi redmi 12 pro'],
                choosenCat: 'Везде',
                isChoosen: false,
                updateQuery: (new_query) => set({query:new_query}),
                updateChoosen: (category) => {
                    set({choosenCat:category})
                    category==='Везде'?set({isChoosen:false}):set({isChoosen:true});                    
                },
                reset: () => set(()=>({history: []})),
            }),
            {
                name: 'searchStore'
            },
        )
    ),
)

export default useSearchStore