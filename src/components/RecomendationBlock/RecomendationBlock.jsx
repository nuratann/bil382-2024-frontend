import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from './RecomendationBlock.module.scss'
import {Flex} from '@chakra-ui/react'
import useSearchStore from "../../stores/useSearchStore";

function RecomendationBlock(props) {
    useEffect(() => {
        useSearchStore.getState().getRecomendations()
    },[])
    const {count} = props;

    const recomendations = useSearchStore(state => state.recomendations)
    return(
        <>     
                   
                   {recomendations && <Flex
                    flexWrap={'wrap'}
                    justify={'space-between'}
                >
                    {recomendations.map((product, index) => (
                        <ProductCard
                            key={index}
                            imageUrl='https://habrastorage.org/r/w1560/getpro/habr/upload_files/221/ca9/a1e/221ca9a1ed27f8db4db8df25d38f6164.png'
                            imageAlt='KUDO image'
                            price={product.price}
                            oldPrice={product.old_price}
                            rating={product.rating}
                            reviews={product.reviews}
                            seller={product.seller}
                            description={product.description}
                            date={product.delivery_date}
                            isFavorite={false}
                        />
                    ))}
                </Flex>}
        </>
    );
}

export default RecomendationBlock
