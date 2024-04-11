import React from 'react'
import {
    ModalFooter,
    Button,
    Flex,
    VStack,
    HStack,
    Text,
    Divider
} from '@chakra-ui/react'
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";

const OAuthBlock = () => {
    const styles = {
        divider: {
            margin: 2,
            borderWidth: '1.5px',
            borderRadius: 'full',
            borderColor: 'gray.300',
        }
    };
    return (
        <>
            <ModalFooter as={VStack}>
                <Flex alignItems={'center'} whiteSpace="nowrap" my={3} w={'100%'}>
                    <Divider sx={styles.divider} />
                    <Text pb={1}>или</Text>
                    <Divider sx={styles.divider} />
                </Flex>


                <HStack spacing={2}>
                    <Button rounded={'2xl'} border={'1px'} bg={'white'} leftIcon={<BsGoogle />}>
                        Google
                    </Button>
                    <Button rounded={'2xl'} border={'1px'} bg={'white'} leftIcon={<BsFacebook />}>
                        Facebook
                    </Button>
                    <Button rounded={'2xl'} border={'1px'} bg={'white'} leftIcon={<BsGithub />}>
                        Github
                    </Button>
                </HStack>
            </ModalFooter>
        </>
    )
}

export default OAuthBlock