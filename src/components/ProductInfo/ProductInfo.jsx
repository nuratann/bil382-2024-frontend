import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';

const ProductInfo = () => {
  return (
    <Box fontSize={"14px"} width="400px" height="500px" p={5} overflowY="auto">
      <Flex direction="column" gap={4}>
        <Flex justify="space-start" >
          <Text w={"200px"} color="gray.400">Тип:</Text>
          <Text w={"200px"} fontWeight="medium" >Кофе в зернах</Text>
        </Flex>
        <Flex justify="space-start" >
          <Text w={"200px"} color="gray.400">Состав кофе:</Text>
          <Text w={"200px"} fontWeight="medium" >Арабика/Робуста</Text>
        </Flex>
        <Flex justify="space-start" >
          <Text w={"200px"} color="gray.400">Степень обжарки:</Text>
          <Text w={"200px"} fontWeight="medium">Средняя:</Text>
        </Flex>
        <Flex justify="space-start" >
          <Text w={"200px"} color="gray.400">Интенсивность вкуса:</Text>
          <Text w={"200px"} fontWeight="medium" >Средний</Text>
        </Flex>
        <Flex justify="space-start" >
          <Text w={"200px"} color="gray.400">Вес товара, г:</Text>
          <Text w={"200px"} fontWeight="medium" >1000</Text>
        </Flex>
        <Link
            color={"blue.500"}
            _hover={{
                textDecoration: 'none',
                color: 'blue',
                cursor: 'pointer',
            }}
            href='#'
        >
            Перейти к описанию
        </Link>
      </Flex>
    </Box>
  );
};

export default ProductInfo;
