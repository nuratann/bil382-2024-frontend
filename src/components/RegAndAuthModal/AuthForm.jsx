import React from 'react'
import {
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    VStack,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import OAuthBlock from './OAuthBlock';

const AuthForm = () => {
    const styles = {
        input: {
            borderWidth: '2px',
            borderColor: 'gray.300',
        },
    };
    return(
        <>

            <ModalHeader>Вход</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack alignItems={'start'}>
                    <Input placeholder='login or email' sx={styles.input} />
                    <Input placeholder='password' sx={styles.input} />
                    <Checkbox defaultChecked>Запомнить меня</Checkbox>
                    <Flex justify={'center'} w={'100%'} pt={2}>
                        <Button bg='brand.blue' color={'white'} mr={3} rounded={'2xl'} w={'70%'}>
                            Войти
                        </Button>
                    </Flex>
                    
                </VStack>
            </ModalBody>
            <OAuthBlock/>
        </>
    )
}

export default AuthForm