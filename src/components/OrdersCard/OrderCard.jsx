import React from 'react';
import { Box, Flex, Text, Image, Button, Badge } from '@chakra-ui/react';

const OrderCard = ({ status }) => {
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
          <Text fontWeight="bold">Заказ от 21 июля</Text>
          <Text fontSize="sm">3427020-0023</Text>
        </Flex>
        <Flex direction="column" alignItems="flex-end">
          <Text fontWeight="bold">4 500 ₽</Text>
          <Text fontSize="sm">Краткий онлайн</Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        {statusElements[status]}
        <Image
          boxSize="50px"
          objectFit="cover"
          src="https://ir-2.ozone.ru/s3/multimedia-b/wc1000/6064306271.jpg"
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
