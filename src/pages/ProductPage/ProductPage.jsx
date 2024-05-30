import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
import { recomendations } from '../../api/MockData/recommendations';
import  ProductService  from '../../api/ProductService';


function ProductPage(){
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        
        const productData = await ProductService.getProduct(productId);
        setProduct({
          ...productData, 
          options: JSON.parse(productData.options), 
          specs: JSON.parse(productData.specs), 
          mediaLinks: JSON.parse(productData.mediaLinks)});
        console.log(product)
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
    }
    window.scrollTo(0, 0); // Прокручиваем вверх страницы при монтировании компонента
    fetchProduct()
  }, []);
  
    const productPageBreadcrumbItems = [
        { text: 'Главная', href: '/' },
        { text: 'Категории', href: '/categories' },
        { text: 'Подкатегория', href: '/categories' }
      ];

  return (
    <>
      {product === null ?
        <p>Loading...</p>
        :

        <>
        {console.log(product)}
          <Header />
          <Navbar />
          <Breadcrumb items={productPageBreadcrumbItems} />
          <ProductHeader rating={product.rating} title={product.title} videoCount={0} reviewCount={product.reviews.length} questionCount={0} />
          <Flex w={"90%"} m={"0 auto"}>
            <ProductGallery images={product.mediaLinks} />
            <Flex flexDirection={'column'}>
              <ProductOptions options={product.options} />
              <ProductInfo specs={product.specs} />
            </Flex>
            <ProductActions id={product.id} price={product.price} delivery={product.deliveryDays} favorite={product.isFavorite} />
          </Flex>
          <Container maxWidth="90vw">
            <StoreInfoBlock sellerId={product.sellerId} rating={product.rating} />
            <Heading fontSize={"2xl"}>Похожие товары</Heading>
            <RecommendationBlock gridColumns={5} count={50} />
            <ProductDescriptionBlock
              description={product.description}
              specs={product.specs} />
            <ProductCommentTabs reviews={product.reviews} questionsCount={0} />
          </Container>
          <Footer />
        </>}
    </>
  )
}

export default ProductPage;