import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import RecommendationBlock from '../../components/RecommendationBlock/RecommendationBlock'
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
                >
                    {results.map((product, index) => (
                        <ProductCard
                            key={index}
                            index={index}
                            product={product}
                        />
                    ))}
                </Flex>}
            </Flex>

            <Footer />
        </>
    )
}

export default TestSearchPage;