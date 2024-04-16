import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import DiscountBlock from '../../components/DiscountBlock/DiscountBlock'
import TopCategoryBlock from '../../components/TopCategoryBlock/TopCategoryBlock'
import RecomendationBlock from '../../components/RecomendationBlock/RecomendationBlock'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'


function HomePage(){

    return(
        <>
            <Header />
            <Navbar />
            <Carousel /> 
      {/* <DiscountBlock/>
      <TopCategoryBlock/> */}
      <Flex justify={'center'} w={'100%'} mt={4}>
        <Flex justify={'center'} w={'80%'} >
        <RecomendationBlock gridColumns={5} count={50}/>
        </Flex>
        </Flex>

      {/* <Subscribe/>  */}
      <Flex mt={8} justify={'center'} align={'center'} bg={'brand.blue'} roundedTop={'lg'}>
        <Text color={'white'} fontSize={48} fontFamily={'"Tilt Neon", sans-serif;'}>Footer</Text>
      </Flex>
            <Footer/>
        </>
    )
}

export default HomePage;