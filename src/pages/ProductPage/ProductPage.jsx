import React from 'react';
import { Flex} from '@chakra-ui/react'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/ProductHeader/Breadcrumb/Breadcrumb'
import ProductHeader from '../../components/ProductHeader/ProductHeader'
import ProductGallery from '../../components/ProductInfo/ProductGallery'
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductActions from '../../components/ProductActions/ProductActions';



function ProductPage(){
    const productPageBreadcrumbItems = [
        { text: 'Главная', href: '/' },
        { text: 'Категории', href: '/categories' },
        { text: 'Кофе и чай', href: '/categories/coffee-tea' },
        { text: 'Кофе', href: '/categories/coffee-tea/coffee' }
      ];
      const imageUrls = [
        "https://ir-3.ozone.ru/s3/multimedia-b/wc1000/6064306271.jpg",
        "https://ir-3.ozone.ru/s3/multimedia-e/wc1000/6064306274.jpg"
      ];
    return(
        <>
            <Header />
            <Navbar />
            <Breadcrumb items={productPageBreadcrumbItems} />
            <ProductHeader />
            <Flex w={"80%"} m={"0 auto"}>
                <ProductGallery images={imageUrls} />
                <ProductInfo />
                <ProductActions />
            </Flex>
            
        </>
    )
}

export default ProductPage;