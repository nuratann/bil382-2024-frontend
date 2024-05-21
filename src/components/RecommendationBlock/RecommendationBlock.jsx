import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from './RecommendationBlock.module.scss'
import {Flex} from '@chakra-ui/react'
import useProductStore from "../../stores/useProductStore";
import useFavoritesStore from "../../stores/useFavoritesStore";

function RecommendationBlock(props) {
    useEffect(() => {
        useProductStore.getState().fetchRecommendations()
    },[])
    const {count} = props;
    const favorites = useFavoritesStore(state=>state.favorites)
    const recommendations = useProductStore(state => state.recommendations)
    return(
        <>     
                   
                   {recommendations && <Flex
                    flexWrap={'wrap'}
                    justify={'space-between'}
                >
                    {recommendations.map((product, index) =>{
                        const isFavorite = favorites.find(productId => productId === product.id)
                        if(isFavorite!==undefined){
                            product.isFavorite=true
                        }else{
                            product.isFavorite=false
                        }
                        return(
                            <ProductCard
                            key={index}
                            index={index}
                            product={product}
                            />
                        )
                    })}
                </Flex>}
        </>
    );
}

export default RecommendationBlock
