import React from 'react';
import { Box, Flex, Text, Badge, Button, Link, VStack, HStack } from '@chakra-ui/react';

const ReturnPage = () => {
    return (
    <Box
        p={5}
        shadow="md"
        height="max-content"
        flexDirection="column"
        width="1160px"
        bgColor="white"
        display="flex"
        ml="30px"
        mt="30px"
        mb="50px"
        borderRadius="28px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
        <Link color="brand.blue" mb={4}>Вернуться назад к возвратам</Link>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} boxShadow="sm" bg="white">
        <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <Text fontSize="xl" fontWeight="bold">Заявка на возврат №97402398-R2</Text>
            <HStack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">432,00 ₽</Text>
            <Button colorScheme="teal" size="sm">На карту</Button>
            </HStack>
        </Flex>
        <VStack align="start" spacing={4}>
            <Text fontSize="md">от 12 апреля 2023</Text>
            <Badge colorScheme="green" p={2}>Одобрено</Badge>
            <Text fontSize="md">
            До 19 апреля включительно подготовьте товар и отнесите в пункт выдачи. Назовите специалисту
            номер заказа на возврат. Если не успеете передать возврат в срок, заказ будет отменен.
            </Text>
            <Link color="teal.500" href="#">Как работать с возвратами</Link>
        </VStack>
        <VStack align="start" spacing={4} mt={5}>
            <Text fontSize="lg" fontWeight="bold">Способ возврата — в пункт выдачи Ozon</Text>
            <Text fontSize="md">Россия, Москва, поселение Десеновское, Новоаютиинский проезд, 13</Text>
        </VStack>
        <Flex mt={5}>
            <Text fontSize="md">Товары в возврате:</Text>
            {/* Список товаров */}
        </Flex>
        </Box>
    </Box>
  );
};

export default ReturnPage;
