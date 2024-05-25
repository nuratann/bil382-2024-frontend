import React from 'react';
import {
  Box,
  VStack,
  Flex,
  Text,
  Button,
  Divider,
  Tooltip,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { InfoIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';

const CheckoutSummary = (props) => {
  const navigate = useNavigate();
  const goCard = () => {
    navigate('/add_card');
  };
  const bg = useColorModeValue('white', 'gray.700'); // Цвет фона для светлой и темной темы
  const {items} = props
  const weight = items.reduce((accumulator, item) => {
    return accumulator + item.weight*item.quantity;
  }, 0);
  const oldTotal = items.reduce((accumulator, item) => {
    return accumulator + item.oldPrice*item.quantity;
  }, 0);
  const total = items.reduce((accumulator, item) => {
    return accumulator + item.price*item.quantity;
  }, 0);
  const sale = items.reduce((accumulator, item) => {
    return accumulator + (item.oldPrice-item.price)*item.quantity;
  }, 0);
  return (
    <VStack
      m={"16px 20px"}
      bg={bg}
      p={4}
      spacing={4}
      alignItems="stretch"
      borderRadius={"20px"} 
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)"
      w="380px"
    >
      <Button onClick={goCard} bg="#10c44c" color="white" _hover={{ bg: '#10c200' }} h={'32px'}>
        Перейти к оформлению
      </Button>
      <Text fontSize="sm" color="gray.500">
        Доступные способы и время доставки можно выбрать при оформлении заказа
      </Text>
      <Divider />
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Ваша корзина</Text>
        <Flex alignItems="center">
          <Icon as={FaShoppingCart} mr={2} />
          <Text>{items.length} товаров • {weight.toFixed(2)} кг</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Товары ({items.length})</Text>
        <Text fontWeight="bold">{oldTotal} som</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text color="red.500">Скидка</Text>
        <Text color="red.500" fontWeight="bold">- {sale} som</Text>
      </Flex>
      <Divider />
      <Flex justifyContent="space-between">
        <Text>Общая стоимость в RUB</Text>
        <Text fontWeight="bold" fontSize="xl">{total} SOM</Text>
      </Flex>
    </VStack>
  );
};

export default CheckoutSummary;
