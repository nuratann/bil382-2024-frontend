import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RecomendationBlock from '../../components/RecomendationBlock/RecomendationBlock'
import Footer from '../../components/Footer/Footer'
import { Flex } from '@chakra-ui/react'
import useSearchStore from '../../stores/useSearchStore'
import ProductCard from '../../components/ProductCard/ProductCard'
const TestSearchPage = () => {
    const results = useSearchStore(state => state.results)
    return (
        <>
            <Header />
            <Navbar />
            <Flex my={8} justify={'center'} w={'100%'} >
                {results && <Flex 
                    w={'80%'} 
                    flexWrap={'wrap'}
                    justify={'space-between'}
                >
                    {results.map((product, index) => (
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
            </Flex>

            <Footer />
        </>
    )
}

export default TestSearchPage;