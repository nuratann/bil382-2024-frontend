import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from './RecommendationBlock.module.scss'
import {Flex} from '@chakra-ui/react'
import useProductStore from "../../stores/useProductStore";
import useFavoritesStore from "../../stores/useFavoritesStore";

function RecommendationBlock(props) {
    // useEffect(() => {
    //     useProductStore.getState().fetchRecommendations()
    // },[])
    const {count} = props;
    const favorites = useFavoritesStore(state=>state.favorites)
    const recommendations = useProductStore(state => state.recommendations)
    return(
        <>     
                   
                   {recommendations && <Flex
                    flexWrap={'wrap'}
                    justify={'space-between'}
                >
                    {recommendations.map((productId, index) =>{
                        const isFavorite = favorites.find(pId => pId === productId)
                        if(isFavorite!==undefined){
                            return(
                                <ProductCard
                                key={index}
                                index={index}
                                productId={productId}
                                isFavorite={true}
                                />
                            )
                        }else{
                            return(
                                <ProductCard
                                key={index}
                                index={index}
                                productId={productId}
                                isFavorite={false}
                                />
                            )
                        }
                    })}
                </Flex>}
        </>
    );
}

export default RecommendationBlock
