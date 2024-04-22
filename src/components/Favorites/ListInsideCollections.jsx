import React from 'react';
// import React, { useState } from 'react';
import { Box, Flex, Text, List, ListItem } from '@chakra-ui/react';
import { useState } from 'react';

function ListInsideCollections({ bgColor }) {

    return (
        <Box
            width="1100px"
            ml="50px"
            height="200vh"
            mr="50px"
            bgColor={bgColor}

        >
            <Box width="1100px" height="80vh" display="flex">
                <Text>Collection  </Text>
            </Box>


        </Box>
    );
}

export default ListInsideCollections;