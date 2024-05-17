import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';

const ProductInfo = (props) => {
  return (
    <Box fontSize={"14px"} width="400px" height="500px" p={5} overflowY="auto">
      
      <Flex direction="column" gap={4}>
        {Object.entries(props.specs).map(([key, value]) => (
        <Flex justify="space-start" key={key}>
          <Text w={"200px"} color="gray.400">{key}:</Text>
          <Text w={"200px"} fontWeight="medium" >{value}</Text>
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
