import React from 'react'
import {
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    VStack,
    HStack,
    Text,
    Link
} from '@chakra-ui/react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import OAuthBlock from './OAuthBlock';

const RegForm = () => {
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

            <ModalHeader>Регистрация</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <VStack>
                    <HStack spacing={2}>
                        <Input placeholder='Имя' sx={styles.input} />
                        <Input placeholder='Фамилия' sx={styles.input} />
                    </HStack>
                    <Input placeholder='логин' sx={styles.input} />
                    <Input placeholder='email' sx={styles.input} />
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
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='подтвердите пароль'
                            sx={styles.input}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Text fontSize={11} my={2} fontFamily={'"Tilt Neon", sans-serif;'}>
                        By selecting Create personal account, you agree to our <Link> User Agreement </Link>
                        and acknowledge reading our <Link> User Privacy Notice </Link>.
                    </Text>
                    <Button bg='brand.blue' color={'white'} mr={3} rounded={'2xl'}>
                        Создать учетную запись
                    </Button>
                </VStack>
            </ModalBody>
            <OAuthBlock/>
        </>
    )
}

export default RegForm