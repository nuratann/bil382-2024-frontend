import React from 'react'
import {
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    VStack,
} from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import OAuthBlock from './OAuthBlock';

const AuthForm = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const styles = {
        input: {
            borderWidth: '2px',
            borderColor: 'gray.300',
        },
    };
    return (
        <>

            <ModalHeader>Вход</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack alignItems={'start'}>
                    <Input placeholder='логин или email' sx={styles.input} />
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='пароль'
                            sx={styles.input}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Checkbox defaultChecked>Запомнить меня</Checkbox>
                    <Flex justify={'center'} w={'100%'} pt={2}>
                        <Button bg='brand.blue' color={'white'} mr={3} rounded={'2xl'} w={'70%'}>
                            Войти
                        </Button>
                    </Flex>

                </VStack>
            </ModalBody>
            <OAuthBlock />
        </>
    )
}

export default AuthForm