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
import { InfoIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';

const CheckoutSummary = () => {
  const bg = useColorModeValue('white', 'gray.700'); // Цвет фона для светлой и темной темы

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
      h={"356px"}
    >
      <Button bg="#10c44c" color="white" _hover={{ bg: '#10c400' }} size="lg">
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
          <Text>5 товаров • 1.91 кг</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Товары (5)</Text>
        <Text fontWeight="bold">12 810.12 с</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text color="red.500">Скидка</Text>
        <Text color="red.500" fontWeight="bold">- 3 351.17 с</Text>
      </Flex>
      <Divider />
      <Flex justifyContent="space-between">
        <Text>Общая стоимость в RUB</Text>
        <Text fontWeight="bold" fontSize="xl">9 848 ₽</Text>
      </Flex>
    </VStack>
  );
};

export default CheckoutSummary;
