import React from 'react';
import { Box, Text, Flex, Link, Button } from '@chakra-ui/react';

const ProductOptions = (props) => {
  const options = JSON.parse(props.options)
  console.log(options)
  return (
    <Box fontSize={"14px"} width="400px"  p={5}>
      
      <Flex direction="column" gap={4}>
        {options.map((option,index) => (
        <Flex justify="space-start" key={index}>
          <Text w={"200px"} color="gray.400">{option.title}:</Text>
          <Flex>
            {option.value.map((option,index)=>{
                return <Button key={index} ms={1} fontSize={11}>{option.title}</Button>
            })}
          </Flex>

          {/* <Text w={"200px"} fontWeight="medium" >{option.value}</Text> */}
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
        </Link>
      </Flex>
    </Box>
  );
};

export default ProductOptions;
