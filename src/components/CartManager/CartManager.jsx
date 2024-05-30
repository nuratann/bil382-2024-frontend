import React, { useEffect, useState } from 'react';
import {
  Box, Flex, Image, Text, Icon, IconButton, Input, Stack, Badge, Checkbox, VStack, Center, Button, useColorModeValue,
} from '@chakra-ui/react';
import { DeleteIcon, MinusIcon, AddIcon } from '@chakra-ui/icons';
import { FaHeart, FaFire } from 'react-icons/fa';
import CheckoutSummary from './CheckoutSummary';
import useProductStore from '../../stores/useProductStore';
import ProductService from '../../api/ProductService';
import CartItem from './CartItem';

const CartManager = ({ initialItems }) => {
  console.log(initialItems)
  const [items, setItems] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState(new Set(initialItems.map(item => item.id)));

  const handleRemove = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleIncrement = (id) => {
    setItems(prevItems => prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrement = (id) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else if (item.id === id && item.quantity === 1) {
        handleRemove(id); // Удаляем элемент, если его количество равно 1
        return { ...item, quantity: 0 }; // Это изменение не будет видно, так как элемент удаляется
      }
      return item;
    }));
  };

  return (
    <>
      {items !== null ?
        items.length !== 0 ?
          <>
            <Flex w={'100%'}>
              <VStack m="16px 0" w="70%" p="16px" spacing="4" borderRadius="20px" boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)">
                {items.map((item, index) => (
                  <CartItem
                    key={index}
                    quantity={item.quantity}
                    selectedItems={selectedItems} 
                    productId={item.id}
                    setSelectedItems={setSelectedItems}
                    isFavorite={false} 
                    handleRemove={handleRemove}
                    handleIncrement={handleIncrement} 
                    handleDecrement={handleDecrement}
                  />
                ))}
              </VStack>
              {/* <CheckoutSummary items={items} /> */}
            </Flex>
          </> :
          <>
            <Center m={"16px 0"} w="100%" h="100%" p="16px" borderRadius="20px" boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)">
              <Text fontSize="lg" color="gray.500">Корзина пуста. Выберите товар.</Text>
            </Center>
          </> :
        <><Text>Loading...</Text></>
      }
    </>
  );
};

export default CartManager;