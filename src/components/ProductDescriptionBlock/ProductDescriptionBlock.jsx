import React from 'react';
import { Box, Heading, Text, Divider, SimpleGrid, VStack, Flex } from '@chakra-ui/react';

const ProductDescriptionBlock = ({ description, characteristicsString }) => {
  const characteristics = JSON.parse(characteristicsString)
  return (
    <Box p={5}>
      <VStack align="stretch" spacing={5}>
        <Heading as="h2" size="lg">Описание</Heading>
        <Text fontSize="md">{description}</Text>

        <Divider />

        <Heading as="h3" size="md">Характеристики</Heading>
        <SimpleGrid columns={2} spacing={5}>
          {characteristics.map((char, index) => (
            <Flex key={index}>
              <Text w={"300px"} fontWeight="light" color={"gray"}>{char.title}:</Text>
              <Text w={"300px"} fontSize="light">{char.value}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default ProductDescriptionBlock