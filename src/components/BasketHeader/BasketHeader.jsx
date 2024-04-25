import React from 'react';
import { Flex, Box, Checkbox, Button, Heading, Spacer, IconButton, useColorModeValue, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FaShareAlt } from 'react-icons/fa';

const BasketHeader = ({ itemCount, onSelectAll, onDeleteSelected, onShare }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('black', 'white');

  return (
    <Box >
      <Heading size="lg" m="50px 0">
        Корзина
        <Text as="sup" fontSize="sm" lineHeight="none" ml={1}>
          {itemCount}
        </Text>
      </Heading>
      
      <Flex alignItems="center" w={"800px"} h={"48px"} borderRadius={"20px"} boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)" p={"15px"}>
        <Checkbox mr={3} onChange={onSelectAll}>Выбрать все</Checkbox>
        <Button leftIcon={<DeleteIcon />} colorScheme="red" variant="ghost" onClick={onDeleteSelected}>
          Удалить выбранные
        </Button>
        <Spacer />
        <IconButton aria-label="Поделиться" icon={<FaShareAlt />} onClick={onShare} variant="ghost" />
      </Flex>
    </Box>
  );
};

export default BasketHeader;
