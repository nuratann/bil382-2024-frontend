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
import { Input } from '@chakra-ui/react'
import OAuthBlock from './OAuthBlock';

const RegForm = () => {
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
                        <Input placeholder='First name' sx={styles.input} />
                        <Input placeholder='Last name' sx={styles.input} />
                    </HStack>
                    <Input placeholder='login' sx={styles.input} />
                    <Input placeholder='email' sx={styles.input} />
                    <Input placeholder='password' sx={styles.input} />
                    <Text fontSize={11} my={2} fontFamily={'"Tilt Neon", sans-serif;'}>
                        By selecting Create personal account, you agree to our <Link> User Agreement </Link>
                        and acknowledge reading our <Link> User Privacy Notice </Link>.
                    </Text>
                    <Button bg='brand.blue' color={'white'} mr={3} rounded={'2xl'}>
                        Create personal account
                    </Button>
                </VStack>
            </ModalBody>
            <OAuthBlock/>
        </>
    )
}

export default RegForm