import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Box, Input, Icon, Flex, Button, HStack, SimpleGrid, IconButton} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai";
import { ChevronDownIcon, SmallCloseIcon } from "@chakra-ui/icons"

const SearchLine = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [choosenCat, setChoosen] = useState('Везде')
    const [isChoosen, setIsChoosen] = useState(false)
    const categories = ["Электроника", "Обувь", "Детские товары", "Бытовая техника", "Строительство и ремонт", "Аптека", "Книги", "Автотовары",
        "Хобби и творчество", "Ювелирные украшения", "Канцелярские товары", "Антиквариат и коллекционирование", "Бытовая химия и гигиена",
        "Товары для курения и акссесуары", "Билеты, отели, туры", "Одежда", "Дом и сад", "Красота и здоровье", "Спорт и отдых", "Продукты питания",
        "Товары для животных", "Туризм, рыбалка, охота", "Мебель", "Аксессуары", "Музыка и видео", "Товары для взрослых", "Цифровые товары",
        "Игры и консоли", "Автомобили"]
    return (
        <>
            <Flex bg={'brand.blue'} mx={2} rounded={10} p={0.5} alignItems={'center'}>
                <HStack w={'100%'} bg={'white'} rounded={8} p={0.5}>
                    <Flex
                        rounded={'lg'}
                        bg={isChoosen ? 'brand.blue' : 'gray.400'}
                        _hover={isChoosen ? { bg: 'brand.blue' } : {}}
                    >
                        <Button
                            onClick={onOpen}
                            rightIcon={isChoosen ? <></> : <ChevronDownIcon />}
                            bg={isChoosen ? 'brand.blue' : 'brand.gray'}
                            _hover={isChoosen ? { bg: 'brand.blue' } : {}}
                            _focus={isChoosen ? { bg: 'brand.blue' } : {}}
                        >
                            {choosenCat}
                        </Button>
                        <Flex alignItems={'center'}>

                            {isChoosen ?
                                <SmallCloseIcon
                                    color={'gray.500'}
                                    rounded={'full'}
                                    bg={'white'}
                                    me={2}
                                    _hover={{ bg: 'gray.300' }}
                                    onClick={() => { setChoosen("Везде"); setIsChoosen(false) }}
                                />
                                :
                                <></>
                            }
                        </Flex>
                    </Flex>

                    <Input placeholder='Искать на Buyers' variant='unstyled' />
                </HStack>

                <Icon as={AiOutlineSearch} boxSize={6} mx={6} color={'white'} _hover={{cursor: 'pointer'}}/>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxWidth={'2xl'} rounded={'2xl'}>
                    <ModalHeader>
                        <Button
                            leftIcon={<ChevronDownIcon />}
                            bg={'white'}
                            textAlign={'left'}
                            justifyContent={'flex-start'}
                            onClick={() => { setChoosen("Везде"); setIsChoosen(false); onClose() }}
                        >
                            Везде
                        </Button>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid columns={2}>
                            {categories.map((category, index) => (
                                <Button
                                    leftIcon={<ChevronDownIcon />}
                                    key={index}
                                    bg={'white'}
                                    textAlign={'left'}
                                    justifyContent={'flex-start'}
                                    onClick={() => { setChoosen(category); setIsChoosen(true); onClose() }}
                                >
                                    {category}
                                </Button>
                            ))}
                        </SimpleGrid>

                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SearchLine