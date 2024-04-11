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
            <DiscountBlock/>
            <TopCategoryBlock/>
            <RecomendationBlock/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default HomePage;