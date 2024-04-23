import React from 'react';
import { Link, Box } from '@chakra-ui/react';

const LinkSequence = () => {
    const numberOfLinks = 10;

    return (
        <Box marginTop="20px">
            {[...Array(numberOfLinks)].map((_, index) => (
                <Link
                    key={index}
                    href={`#${index + 1}`}
                    px={2}
                    py={1}
                    color="brand.blue"
                    mr="8px"
                    rounded={4}
                    _hover={{ bg: 'gray.200', color: 'blue.500' }}
                    _active={{ bg: 'blue.50', color: 'blue.950' }}
                    isExternal
                >
                    {index + 1}
                </Link>
            ))}
            <span>...</span>
            <Link
                ml="10px"
                href="#Еще"
                gap="20px"
                px={2}
                py={1}
                rounded={4}

                color="brand.blue"
                backgroundColor={"gray.100"}
                _hover={{ bg: 'gray.200', color: 'blue.500' }}
                _active={{ bg: 'brand.blue', color: 'blue.700' }}
                isExternal
            >
                Еще
            </Link>
        </Box>
    );
};

export default LinkSequence;
