import React from 'react';
import { customScrollbarStyles } from './MainSearchData';
import { Box, Text, VStack, Checkbox } from '@chakra-ui/react';

const CustomScrollableList = ({ title, height, data }) => {
    return (
        <Box mt={"32px"}>
            <Text fontWeight="650">{title}</Text>
            <Box marginBottom="25px" marginTop="12px" height={height} overflow="hidden">
                <Box height="100%" overflow="auto" css={customScrollbarStyles}>
                    <VStack alignItems="flex-start">
                        {data.map((item, index) => (
                            <Box key={index} display="flex">
                                <Checkbox mr="2" rounded={10} _hover={{ borderColor: "brand.blue" }} />
                                <Text>{item}</Text>
                            </Box>
                        ))}
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
};

export default CustomScrollableList;
