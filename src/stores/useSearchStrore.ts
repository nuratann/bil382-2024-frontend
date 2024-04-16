import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'

type SearchStore = {
    query: string,
    history: string[],
    choosenCat: string,
    isChoosen: boolean,
    updateQuery: (new_query: string) => void,
    updateChoosen: (category: string) => void,
    updateHistory: (query: string) => void,
    deleteHistory: (index: number) => void,
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
                updateHistory: (query) => {
                    set((state) => ({ history: [query, ...state.history] }))
                },
                deleteHistory: (index)=>{
                    set((state) => {
                        if (index === -1) {return { history: [] };
                    } else {
                      const updatedHistory = [...state.history];
                      updatedHistory.splice(index, 1);
                      return { history: updatedHistory };
                    }
                  })},
                reset: () => set(()=>({history: []})),
            }),
            {
                name: 'searchStore'
            },
        )
    ),
)

export default useSearchStore