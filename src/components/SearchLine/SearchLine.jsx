import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Box, Input, Icon, Flex, Button, HStack, SimpleGrid, IconButton } from '@chakra-ui/react'
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
import useSearchStore from '../../stores/useSearchStrore'

const SearchLine = (props) => {
    const searchState = useSearchStore((state) => state)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const categories = ["Электроника", "Обувь", "Детские товары", "Бытовая техника", "Строительство и ремонт", "Аптека", "Книги", "Автотовары",
        "Хобби и творчество", "Ювелирные украшения", "Канцелярские товары", "Антиквариат и коллекционирование", "Бытовая химия и гигиена",
        "Товары для курения и акссесуары", "Билеты, отели, туры", "Одежда", "Дом и сад", "Красота и здоровье", "Спорт и отдых", "Продукты питания",
        "Товары для животных", "Туризм, рыбалка, охота", "Мебель", "Аксессуары", "Музыка и видео", "Товары для взрослых", "Цифровые товары",
        "Игры и консоли", "Автомобили"]

    const onSearch = (query) => {
        searchState.updateHistory(searchState.query)
    }
    return (
        <>
            <Flex
                bg={'brand.blue'}
                ms={4}
                me={8}
                rounded={10}
                p={0.5}
                alignItems={'center'}
                w={'70%'}
                maxH={'48px'}
                ref={props.searchRef}
                zIndex={props.zindex}
            >
                <HStack w={'100%'} bg={'white'} rounded={8} p={0.5}>
                    <Flex
                        rounded={'lg'}
                        bg={searchState.isChoosen ? 'brand.blue' : 'gray.400'}
                        _hover={searchState.isChoosen ? { bg: 'brand.blue' } : {}}
                    >
                        <Button
                            onClick={isOpen ? onClose : onOpen}
                            rightIcon={searchState.isChoosen ? <></> : <ChevronDownIcon />}
                            bg={searchState.isChoosen ? 'brand.blue' : 'brand.gray'}
                            color={searchState.isChoosen ? 'white' : 'brand.text'}
                            _hover={searchState.isChoosen ? { bg: 'brand.blue' } : { bg: 'brand.gray', color: 'brand.hovertext' }}
                            _focus={searchState.isChoosen ? { bg: 'brand.blue' } : { bg: 'brand.gray' }}

                        >
                            {searchState.choosenCat}
                        </Button>
                        <Flex alignItems={'center'}>

                            {searchState.isChoosen ?
                                <SmallCloseIcon
                                    color={'brand.text'}
                                    rounded={'full'}
                                    bg={'white'}
                                    me={2}
                                    _hover={{ bg: 'gray.300' }}
                                    onClick={() => { searchState.updateChoosen("Везде"); }}
                                />
                                :
                                <></>
                            }
                        </Flex>
                    </Flex>

                    <Input
                        rounded={0}
                        placeholder='Искать на Buyers'
                        variant='unstyled'
                        onClick={props.inputClick}
                        value={searchState.query}
                        onKeyDown={
                            (e) => {
                                if (e.key === 'Enter') {
                                    onSearch();
                                }
                            }
                        }
                        onChange={(e) => { searchState.updateQuery(e.target.value) }} />
                    {searchState.query !== '' ?
                        <SmallCloseIcon
                            color={'brand.text'}
                            rounded={'full'}
                            bg={'white'}
                            me={2}
                            _hover={{ bg: 'gray.300' }}
                            onClick={() => { searchState.updateQuery(""); }}
                        />
                        :
                        <></>
                    }

                </HStack>

                {/* here need to adjust the way how search 'query' is enetered and will icon work when line is empty? Also, try to route, by the element from searchresult in searchLine, so 2 way routing from icon, from */}

                <Icon
                    as={AiOutlineSearch}
                    boxSize={6}
                    mx={6}
                    color={'white'}
                    _hover={{ cursor: 'pointer' }}
                    onClick={onSearch}

                />
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay backdropFilter='blur(5px)' />
                <ModalContent maxWidth={'2xl'} rounded={'2xl'}>
                    <ModalHeader>
                        <Button
                            leftIcon={<ChevronDownIcon />}
                            bg={'white'}
                            textAlign={'left'}
                            justifyContent={'flex-start'}
                            onClick={() => { searchState.updateChoosen("Везде"); onClose() }}
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
                                    onClick={() => { searchState.updateChoosen(category); onClose() }}
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