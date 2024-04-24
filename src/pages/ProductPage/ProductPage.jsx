import React from 'react';
import { Flex, Box, Heading, Container} from '@chakra-ui/react'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/ProductHeader/Breadcrumb/Breadcrumb'
import ProductHeader from '../../components/ProductHeader/ProductHeader'
import ProductGallery from '../../components/ProductInfo/ProductGallery'
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductActions from '../../components/ProductActions/ProductActions';
import StoreInfoBlock from '../../components/StoreInfoBlock/StoreInfoBlock';
import RecomendationBlock from '../../components/RecomendationBlock/RecomendationBlock';
import ProductDescriptionBlock from '../../components/ProductDescriptionBlock/ProductDescriptionBlock';
import ProductCommentTabs from '../../components/ProductCommentTabs/ProductCommentTabs';
import Footer from '../../components/Footer/Footer'

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
      const exampleCharacteristics = [
        { label: 'Состав кофе', value: 'Арабика/Робуста' },
        { label: 'Степень обжарки', value: 'Средняя' },
        { label: 'Интенсивность вкуса', value: 'Средний' },
        { label: 'Состав кофе', value: 'Арабика/Робуста' },
        { label: 'Степень обжарки', value: 'Средняя' },
        { label: 'Интенсивность вкуса', value: 'Средний' },
        // Добавьте дополнительные характеристики...
      ];
      const exampleDescription = 'Кофе хареный зерновой JAMADJI 1 кг - отличный подарок для мужчин и женщин на 14 и 23 февраля...';

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
            <Container maxWidth="80vw">
                <StoreInfoBlock />
                <Heading fontSize={"2xl"}>Похожие товары</Heading>
                <RecomendationBlock count={5}/>    
                <ProductDescriptionBlock 
                  description={exampleDescription}
                  characteristics={exampleCharacteristics}/>
                <ProductCommentTabs reviewsCount={1002} questionsCount={12}/>
            </Container>  
            <Footer/>  
        </>
    )
}

export default ProductPage;