import React from 'react';
import { Box, Flex, Text, Image, Button, Badge } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ProductService from '../../api/ProductService';

const OrderCard = ({ status, productId }) => {
  const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await ProductService.getProduct(productId);
                setProduct(productData);
            } catch (error) {
                console.error('Failed to fetch product', error);
            }
        }
        fetchProduct();
    },[])
  // Элементы UI, которые меняются в зависимости от статуса
  const statusElements = {
    "Ожидают оплаты": (
      <Button size="sm" colorScheme="orange">Оплатить</Button>
    ),
    "В работе": (
      <Badge colorScheme="blue">В процессе</Badge>
    ),
    "Выполненные": (
      <Badge colorScheme="green">Завершён</Badge>
    ),
    "Отмененные": (
      <Badge colorScheme="red">Отменён</Badge>
    )
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} boxShadow="sm">
      <Flex justifyContent="space-between" mb={4}>
        <Flex direction="column">
          <Text fontWeight="bold">{product!==null?'Заказ от 31 мая;':'Заказ от 21 июля;'}</Text>
          <Text fontSize="sm">{product!==null?product.id:'Заказ от 21 июля;'}</Text>
          <Text fontSize="sm">{product!==null?'Stripe id: pm_1PMLP908MXO6we99UlVRU8Cf':'Заказ от 21 июля;'}</Text>
        </Flex>
        <Flex direction="column" alignItems="flex-end">
          <Text fontWeight="bold">{product!==null?'120 000 som':'4 500 ₽'}</Text>
          <Text fontSize="sm">Краткий онлайн</Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        {statusElements[status]}
        <Image
          boxSize="50px"
          objectFit="cover"
          src={product!==null?JSON.parse(product.mediaLinks)[0].url:"https://ir-2.ozone.ru/s3/multimedia-b/wc1000/6064306271.jpg"}
          alt="Product image"
        />
      </Flex>
      <Text fontSize="sm">Ожидаемое время доставки: с 18:00 до 21:00</Text>
      {status === "Ожидают оплаты" && (
        <Text fontSize="sm" color="orange.500" mt={2}>
          Оплата ожидается в ближайшее время.
        </Text>
      )}
      {status === "Отмененные" && (
        <Text fontSize="sm" color="red.500" mt={2}>
          Заказ был отменён.
        </Text>
      )}
      {/* Дополнительные элементы для других статусов */}
    </Box>
  );
};

export default OrderCard;
