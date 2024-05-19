import { Container, Heading, } from "@chakra-ui/react";
import BasketHeader from "../../components/BasketHeader/BasketHeader";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CartManager from "../../components/CartManager/CartManager";
import RecommendationBlock from "../../components/RecommendationBlock/RecommendationBlock";
import useUserStore from "../../stores/useUserStore";

function BasketPage() {
    const cartItems = useUserStore((state)=>state.cart)
    console.log(cartItems)
    const itemsWithId = cartItems.map((item, index) => ({
      ...item,
      id: index + 1 // Использование индекса плюс один для ID
    }));

    return(
    <>
        <Header/>
        <Navbar/>
        <Container maxWidth="80vw">
          <BasketHeader
              itemCount={5} // предполагаемое количество товаров
              onSelectAll={() => console.log('Выбраны все товары')}
              onDeleteSelected={() => console.log('Удалены выбранные товары')}
              onShare={() => console.log('Поделиться')}
          />            
          <CartManager initialItems={itemsWithId}/>
          <Heading fontSize={"2xl"} m={"50px 0"}>Ваши избарнные товары</Heading>
          <RecommendationBlock count={5}/>
          <Heading fontSize={"2xl"} m={"50px 0"}>Рекомендации</Heading>
          <RecommendationBlock count={5}/>        
        
        </Container>  
    </>
    );
}

export default BasketPage