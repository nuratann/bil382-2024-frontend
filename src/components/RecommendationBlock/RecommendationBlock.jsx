import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from './RecommendationBlock.module.scss'
import {Flex} from '@chakra-ui/react'
import useProductStore from "../../stores/useProductStore";

function RecommendationBlock(props) {
    useEffect(() => {
        useProductStore.getState().fetchRecommendations()
    },[])
    const {count} = props;

    const recommendations = useProductStore(state => state.recommendations)
    return(
        <>     
                   
                   {recommendations && <Flex
                    flexWrap={'wrap'}
                    justify={'space-between'}
                >
                    {recommendations.map((product, index) => (
                        <ProductCard
                            key={index}
                            index={index}
                            product={product}
                        />
                    ))}
                </Flex>}
        </>
    );
}

export default RecommendationBlock
