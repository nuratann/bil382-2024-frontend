import React, { useState } from 'react';
import {
  Box, Flex, Image, Text, Icon, IconButton, Input, Stack, Badge, Checkbox, VStack, Center, Button, useColorModeValue,
} from '@chakra-ui/react';
import { DeleteIcon, MinusIcon, AddIcon } from '@chakra-ui/icons';
import { FaHeart, FaFire } from 'react-icons/fa';
import CheckoutSummary from './CheckoutSummary';

const CartManager = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems.map(item => ({
    ...item,
    quantity: item.quantity || 1 // Убедитесь, что quantity всегда инициализирован
  })));
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

  if (items.length === 0) {
    return (
      <Center m={"16px 0"} w="800px" h="100%" p="16px" borderRadius="20px" boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)">
        <Text fontSize="lg" color="gray.500">Корзина пуста. Выберите товар.</Text>
      </Center>
    );
  }

  return (
    <Flex>
      <VStack m="16px 0" w="800px" p="16px" spacing="4" borderRadius="20px" boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)">
        {items.map((item) => (
          <Flex key={item.id} w="768px" h="auto" p="5px 0" align="center" m="10px 0">
            <Checkbox size="lg" colorScheme="blue" mr={8} isChecked={selectedItems.has(item.id)} onChange={() => {
              const newSelectedItems = new Set(selectedItems);
              if (selectedItems.has(item.id)) {
                newSelectedItems.delete(item.id);
              } else {
                newSelectedItems.add(item.id);
              }
              setSelectedItems(newSelectedItems);
            }} />
            <Image src={item.imageUrl} alt={item.title} w="69px" h="92px" objectFit="cover" mr={10} />
            <Box flex="1" mr={4} maxBlockSize="320px">
              <Text fontWeight="medium" fontSize="sm" mb="8px">{item.title}</Text>
              <Text fontSize="sm" color="#808D9A" mb="16px">{item.description}</Text>
              {item.isDiscounted && (
                <Badge colorScheme="red" mb="8px">
                  <Icon as={FaFire} color="red" mr={1} /> Распродажа
                </Badge>
              )}
              <Box>
                <IconButton aria-label="Добавить в избранное" icon={<FaHeart />} onClick={() => console.log('Toggle like')} variant="ghost" colorScheme={item.isLiked ? 'red' : 'gray'} size="sm" />
                <IconButton aria-label="Удалить из корзины" icon={<DeleteIcon />} onClick={() => handleRemove(item.id)} variant="ghost" size="sm" />
              </Box>
            </Box>
            <Box flex="1" mr={4} textAlign="right">
              <Text color="red.500" fontWeight="bold">{item.discountedPrice} с</Text>
              {item.isDiscounted && <Text as="s">{item.price} с</Text>}
            </Box>
            <Stack direction="row" alignItems="center" mr={4}>
              <IconButton icon={<MinusIcon />} aria-label="Уменьшить количество" onClick={() => handleDecrement(item.id)} size="sm" />
              <Input value={item.quantity} onChange={(e) => console.log('Change Quantity')} size="sm" maxWidth="50px" />
              <IconButton icon={<AddIcon />} aria-label="Увеличить количество" onClick={() => handleIncrement(item.id)} size="sm" />
            </Stack>
          </Flex>
        ))}
      </VStack>
      <CheckoutSummary/>
    </Flex>
  );
};

export default CartManager;