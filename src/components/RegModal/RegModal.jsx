import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Flex,
    VStack,
    HStack
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import styles from './RegModal.module.scss'

const RegModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent rounded={'3xl'}>
                    <ModalHeader>Регистрация</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <HStack spacing={2}>
                                <Input placeholder='First name' className={styles.input} />
                                <Input placeholder='Last name' className={styles.input}  />
                            </HStack>

                            <Input placeholder='email' className={styles.input}  />
                            <Input placeholder='password' className={styles.input}  />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default RegModal