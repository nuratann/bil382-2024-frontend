import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import DiscountBlock from '../../components/DiscountBlock/DiscountBlock'
import TopCategoryBlock from '../../components/TopCategoryBlock/TopCategoryBlock'
import RecomendationBlock from '../../components/RecomendationBlock/RecomendationBlock'
import Subscribe from '../../components/Subscribe/Subscribe'
import Breadcrumb from '../../components/ProductHeader/Breadcrumb/Breadcrumb'
import ProductHeader from '../../components/ProductHeader/ProductHeader'


function HomePage(){
    const productPageBreadcrumbItems = [
        { text: 'Главная', href: '/' },
        { text: 'Категории', href: '/categories' },
        { text: 'Кофе и чай', href: '/categories/coffee-tea' },
        { text: 'Кофе', href: '/categories/coffee-tea/coffee' }
      ];
    return(
        <>
            <Breadcrumb items={productPageBreadcrumbItems}/>
            <ProductHeader/>
            {/* <Header />
            <Navbar />
            <Carousel /> 
      <DiscountBlock/>
      <TopCategoryBlock/>
      <RecomendationBlock/>
      <Subscribe/> */}
        </>
    )
}

export default HomePage;