import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';

const ProductInfo = (props) => {
  const specs = JSON.parse(props.specs)
  return (
    <Box fontSize={"14px"} width="400px"  p={5} >
      <Text fontSize={24} fontWeight={'bold'}>О товаре</Text>
      <Flex direction="column" gap={4}>
        {specs.map((spec,index) => (
        <Flex justify="space-start" key={index}>
          <Text w={"200px"} color="gray.400">{spec.title}:</Text>
          <Text w={"200px"} fontWeight="medium" >{spec.value}</Text>
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
