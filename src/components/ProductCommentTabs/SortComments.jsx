import React from 'react';
import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';

const SortComments = ({ sortByDate, sortByRating }) => {
  return (
    <Box display="flex" alignItems="center" mt={"10px"} mb={"10px"}>
      <Text mr="2">Сортировать по:</Text>
      <ButtonGroup isAttached variant="outline">
        <Button onClick={sortByDate} border={"none"}>дате</Button>
        <Button onClick={sortByRating} border={"none"}>оценке</Button>
      </ButtonGroup>
    </Box>
  );
};

export default SortComments;
