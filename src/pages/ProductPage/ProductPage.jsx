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
import RecommendationBlock from '../../components/RecommendationBlock/RecommendationBlock';
import ProductDescriptionBlock from '../../components/ProductDescriptionBlock/ProductDescriptionBlock';
import ProductCommentTabs from '../../components/ProductCommentTabs/ProductCommentTabs';
import Footer from '../../components/Footer/Footer'
import useProductStore from '../../stores/useProductStore';
import ProductOptions from '../../components/ProductInfo/ProductOptions';

function ProductPage(){
  const { productId } = useParams();
  const product = useProductStore((state)=>state.getProductById(productId))
    const productPageBreadcrumbItems = [
        { text: 'Главная', href: '/' },
        { text: 'Категории', href: '/categories' },
        { text: product.category.name, href: '/categories' }
      ];
      const imageUrls = JSON.parse(product.mediaLinks)

    return(
        <>
            <Header />
            <Navbar />
            <Breadcrumb items={productPageBreadcrumbItems} />
            <ProductHeader title={product.title} reviews={product.reviews.length}/>
            <Flex w={"90%"} m={"0 auto"}>
                <ProductGallery images={imageUrls} />
                <Flex flexDirection={'column'}>
                  <ProductOptions options={product.options}/>
                  <ProductInfo specs={product.specs}/>
                </Flex>
                <ProductActions price={product.price}/>
            </Flex>
            <Container maxWidth="90vw">
                <StoreInfoBlock seller={product.sellerId} rating={product.rating}/>
                <Heading fontSize={"2xl"}>Похожие товары</Heading>
                <RecommendationBlock gridColumns={5} count={50} />
                <ProductDescriptionBlock 
                  description={product.description}
                  characteristicsString={product.specs}/>
                <ProductCommentTabs reviews={product.reviews} questionsCount={12}/>
            </Container>  
            <Footer/>  
        </>
    )
}

export default ProductPage;