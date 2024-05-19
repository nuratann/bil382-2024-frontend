import { create } from "zustand";
import { persist, devtools } from 'zustand/middleware'
import SearchService from "../api/SearchService";

// type SearchStore = {
//     query: string,
//     history: string[],
//     suggestions: string[],
//     choosenCat: string,
//     isChoosen: boolean,
//     results: Product[],
//     recomendations: Product[],
//     updateQuery: (new_query: string) => void,
//     updateChoosen: (category: string) => void,
//     updateHistory: (query: string) => void,
//     deleteHistory: (index: number) => void,
//     getSuggestions: (query: string) => void,
//     search: (query: string) => void,
//     getRecomendations: (query: string) => void,
//     reset: () => void
// }

const useSearchStore = create()(
    devtools(
        persist(
            (set, get) => ({
                query: '',
                history: ['ryzen 7840hs', 'xiaomi redmi 12 pro'],
                suggestions: [],
                choosenCat: 'Везде',
                isChoosen: false,
                results: [],
                updateQuery: (new_query) => set({query:new_query}),
                updateChoosen: (category) => {
                    set({choosenCat:category})
                    category==='Везде'?set({isChoosen:false}):set({isChoosen:true});                    
                },
                updateHistory: (query) => {
                    set((state) => {
                        if(state.history.findIndex(item => item === query) === -1){
                            return { history: [query, ...state.history] };
                        }else{
                            return { history: state.history };}
                    })                        
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
                search: async (query) => {
                    const results = await SearchService.search(query);
                    set(()=>({results:results}));
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