import { Container } from "@chakra-ui/react";
import BasketHeader from "../../components/BasketHeader/BasketHeader";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CartManager from "../../components/CartManager/CartManager";

function BasketPage() {
    const cartItems = [
        {
          imageUrl: 'https://ir-2.ozone.ru/s3/multimedia-1-i/wc100/6967124478.jpg',
          title: 'Товар 1',
          description: 'Описание товара 1',
          price: '1293.7c',
          discountedPrice: '1267.98c',
          isLiked: false,
          isDiscounted: true,
          // ... другие свойства товара
        },
        {
            imageUrl: 'https://ir-2.ozone.ru/s3/multimedia-1-i/wc100/6967124478.jpg',
            title: 'Товар 1',
            description: 'Описание товара 1',
            price: '1293.7c',
            discountedPrice: '1267.98c',
            isLiked: false,
            isDiscounted: true,
            // ... другие свойства товара
          },
          {
            imageUrl: 'https://ir-2.ozone.ru/s3/multimedia-1-i/wc100/6967124478.jpg',
            title: 'Товар 1',
            description: 'Описание товара 1',
            price: '1293.7c',
            discountedPrice: '1267.98c',
            isLiked: false,
            isDiscounted: true,
            // ... другие свойства товара
          },
          {
            imageUrl: 'https://ir-2.ozone.ru/s3/multimedia-1-i/wc100/6967124478.jpg',
            title: 'Товар 1',
            description: 'Описание товара 1',
            price: '1293.7c',
            discountedPrice: '1267.98c',
            isLiked: false,
            isDiscounted: true,
            // ... другие свойства товара
          },
          {
            imageUrl: 'https://ir-2.ozone.ru/s3/multimedia-1-i/wc100/6967124478.jpg',
            title: 'Товар 1',
            description: 'Описание товара 1',
            price: '1293.7c',
            discountedPrice: '1267.98c',
            isLiked: false,
            isDiscounted: true,
            // ... другие свойства товара
          },
          {
            imageUrl: 'https://ir-2.ozone.ru/s3/multimedia-1-i/wc100/6967124478.jpg',
            title: 'Товар 1',
            description: 'Описание товара 1',
            price: '1293.7c',
            discountedPrice: '1267.98c',
            isLiked: false,
            isDiscounted: true,
            // ... другие свойства товара
          },
        // ... другие товары
      ];
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
        </Container>  
    </>
    );
}

export default BasketPage