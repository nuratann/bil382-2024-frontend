import React from 'react'
import {Box, VStack, Icon, Text } from '@chakra-ui/react'

const IconWithTitle = ({ icon, text, count }) => {
    return (
        <>
            <VStack align={'center'} maxH={'54px'} spacing={0}  fontFamily={'Montserrat'} position={'relative'} m={2}>
                <Icon as={icon} boxSize={5} mx={2} mt={3}/>
                <Text fontSize={11} fontWeight={'semibold'}>{text}</Text>
                <Box
                    boxSize={4}
                    position="absolute" top={0.25} right={0.25} zIndex={2}
                    color={'white'}
                    bg={'red'}
                    textAlign={'center'}
                    rounded={'full'}
                    fontSize={9}
                    pt={'1.5px'}
                >
                    <Text>{count}</Text>
                </Box>
            </VStack>
        </>
    )
}

export default IconWithTitle