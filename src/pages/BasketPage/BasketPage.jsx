import { Container, Heading, Flex } from "@chakra-ui/react";
import BasketHeader from "../../components/BasketHeader/BasketHeader";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CartManager from "../../components/CartManager/CartManager";
import RecommendationBlock from "../../components/RecommendationBlock/RecommendationBlock";
import useCartStore from '../../stores/useCartStore'
import useFavoritesStore from '../../stores/useFavoritesStore'
import useProductStore from '../../stores/useProductStore'
import ProductCard from '../../components/ProductCard/ProductCard'

function BasketPage() {
    const cartItems = useCartStore(state=>state.cart)
    const getProductById = useProductStore(state=>state.getProductById)
    const favorites = useFavoritesStore(state=>state.favorites)
    console.log(cartItems)

    return(
    <>
        <Header/>
        <Navbar/>
        <Container maxWidth="90%">
          <BasketHeader
              itemCount={5} // предполагаемое количество товаров
              onSelectAll={() => console.log('Выбраны все товары')}
              onDeleteSelected={() => console.log('Удалены выбранные товары')}
              onShare={() => console.log('Поделиться')}
          />            
          <CartManager initialItems={cartItems}/>
          <Heading fontSize={"2xl"} m={"50px 0"}>Ваши избранные товары</Heading>
          <>

            {favorites && <Flex
              flexWrap={'wrap'}
              justify={'space-between'}
              borderBottomWidth={"0.01px"}
              borderBottomColor={"#36454F"}
              pb={8}
              mb={8}
            >
              {favorites.map((productId, index) => {
                const product = getProductById(productId)
                product.isFavorite = true
                return (
                  <ProductCard
                    key={index}
                    index={index}
                    product={product}
                  />
                )
              })}
            </Flex>}
          </>
          <Heading fontSize={"2xl"} m={"50px 0"}>Рекомендации</Heading>
          <RecommendationBlock count={5}/>        
        
        </Container>  
    </>
    );
}

export default BasketPage