import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';

const ProductInfo = (props) => {
  const {specs} = props
  return (
    <Box fontSize={"14px"} width="400px"  p={5} >
      <Text fontSize={24} fontWeight={'bold'}>О товаре</Text>
      <Flex direction="column" gap={4}>
        {Object.keys(specs).map((spectitle,index) => (
        <Flex justify="space-start" key={index}>
          <Text w={"200px"} color="gray.400">{spectitle}:</Text>
          <Text w={"200px"} fontWeight="medium" >{specs[spectitle]}</Text>
        </Flex>
        ))}
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
