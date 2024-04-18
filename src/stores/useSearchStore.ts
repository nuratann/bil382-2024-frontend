import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import SearchService from "@/api/SearchService";

type SearchStore = {
    query: string,
    history: string[],
    suggestions: string[],
    choosenCat: string,
    isChoosen: boolean,
    updateQuery: (new_query: string) => void,
    updateChoosen: (category: string) => void,
    updateHistory: (query: string) => void,
    deleteHistory: (index: number) => void,
    getSuggestions: (query: string) => void,
    reset: () => void
}

const useSearchStore = create<SearchStore>()(
    devtools(
        persist(
            (set, get) => ({
                query: '',
                history: ['ryzen 7840hs', 'xiaomi redmi 12 pro'],
                suggestions: [],
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
                getSuggestions: async (query) => {
                    const suggestions = await SearchService.getSuggestions(query);
                    set(()=>({suggestions:suggestions}));
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