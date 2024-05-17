import React from 'react';
import { useParams } from 'react-router-dom';
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
import useSearchStore from '../../stores/useSearchStore';

function ProductPage(){
  const { productId } = useParams();
  const product = useSearchStore((state)=>state.recomendations[productId])
  console.log('product')
  console.log(product)
    const productPageBreadcrumbItems = [
        { text: 'Главная', href: '/' },
        { text: 'Категории', href: '/categories' },
        { text: product.category, href: '/categories' }
      ];
      const imageUrls = [
        product.img,
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
      const exampleDescription = product.description;

    return(
        <>
            <Header />
            <Navbar />
            <Breadcrumb items={productPageBreadcrumbItems} />
            <ProductHeader title={product.title} reviews={product.reviews}/>
            <Flex w={"80%"} m={"0 auto"}>
                <ProductGallery images={imageUrls} />
                <ProductInfo specs={product.specs}/>
                <ProductActions price={product.price}/>
            </Flex>
            <Container maxWidth="80vw">
                <StoreInfoBlock seller={product.seller} rating={product.rating}/>
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