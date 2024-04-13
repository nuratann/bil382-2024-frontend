import React from 'react'
import { Box, VStack, Icon, Text } from '@chakra-ui/react'
import useUserStore from '../../stores/useUserStore'

const IconWithTitle = ({ icon, text, index}) => {
    const user = useUserStore((state) => state.user)
    const reset = useUserStore((state) => state.reset)
    const notifications = user.notifications[index]
    const isAuth = user.isAuth
    return (
        <>
            <VStack
                align={'center'}
                maxH={'54px'}
                spacing={0}
                fontFamily={'Montserrat'}
                position={'relative'}
                m={2}
                _hover={{color:'brand.hoverblue'}}
                >
                <Icon as={icon} boxSize={5} mx={2} mt={3} />
                <Text fontSize={11} fontWeight={'semibold'}>{text}</Text>
                
                {isAuth&&notifications!=0?
                <Box
                    boxSize={4}
                    position="absolute" top={0.25} right={0.25} zIndex={2}
                    color={'white'}
                    bg={'brand.red'}
                    textAlign={'center'}
                    rounded={'full'}
                    fontSize={9}
                    pt={'1.5px'}
                >
                    <Text>{notifications}</Text>
                </Box>
                :<></>}
            </VStack>
        </>
    )
}

export default IconWithTitle