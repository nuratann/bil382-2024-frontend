import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import DiscountBlock from '../../components/DiscountBlock/DiscountBlock'
import TopCategoryBlock from '../../components/TopCategoryBlock/TopCategoryBlock'
import RecommendationBlock from '../../components/RecommendationBlock/RecommendationBlock'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'
import { Flex } from '@chakra-ui/react'


function HomePage() {

    return (
        <>
            <Header />
            <Navbar />
            <Carousel />
            {/* <DiscountBlock/>
      <TopCategoryBlock/> */}
            <Flex my={8} justify={'center'} w={'100%'} >
                <Flex w={'90%'}>
                    <RecommendationBlock gridColumns={5} count={50} />
                </Flex>
            </Flex>



            {/*<Flex mt={8} justify={'center'} align={'center'} bg={'brand.blue'} roundedTop={'lg'}>*/}
            {/*  <Text color={'white'} fontSize={48} fontFamily={'"Tilt Neon", sans-serif;'}>Footer</Text>*/}
            {/*</Flex>*/}

            <Footer />
        </>
    )
}

export default HomePage;