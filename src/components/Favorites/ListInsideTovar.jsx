import React, { useState } from 'react';
import { Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem, IconButton, Input, useDisclosure, List, ListItem, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import RecommendationBlock from "../../components/RecommendationBlock/RecommendationBlock"
import { ListIconCustom } from './FavoritesData';
import { ListIconCustomCreated } from './FavoritesData';
import { menuItems } from './FavoritesData';
import ProductCard from '../ProductCard/ProductCard';
import useFavoritesStore from '../../stores/useFavoritesStore';
import useProductStore from '../../stores/useProductStore';


function ListInsideTovar({ bgColor }) {
    const favorites = useFavoritesStore((state)=>state.favorites)
    // const getProductById = useProductStore((state)=>state.getProductById)
    const { isOpen: isMainModalOpen, onOpen: onMainModalOpen, onClose: onMainModalClose } = useDisclosure();
    const [buttons, setButtons] = useState([]);
    const [modalStates, setModalStates] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSave = (value) => {
        const newButton = {
            label: value,
        };
        setButtons(currentButtons => [...currentButtons, newButton]);
        setModalStates(currentStates => [...currentStates, false]);
        onMainModalClose();
    };

    const handleButtonClick = (index) => {
        const updatedModalStates = modalStates.map((state, i) => (i === index ? true : state));
        setModalStates(updatedModalStates);
    };

    const [selectedItemMenu, setSelectedItemMenu] = useState(menuItems[0]);
    const handleItemClick = (item) => {
        setSelectedItemMenu(item);
    };

    return (
        <Box width="1100px" ml="50px" mr="50px" bgColor={bgColor}>
            <Box width="1100px">
                <Text fontSize="24px" fontWeight="600">Избранное</Text>
                <Box>
                    <Box display="flex" flexDirection="row" alignItems="flex-start">
                        <Button onClick={onMainModalOpen} height="100px" width="100px" borderRadius="14px" borderColor="gray.400" borderWidth="1px" backgroundColor={"white"}>
                            <Flex flexDirection="column" alignItems="center">
                                <Text fontSize="13px" color="gray.600" mb={4}>Список</Text>
                                <Box p="5px" bg="gray.200" borderRadius="15%">
                                    <ListIconCustom borderWidth="30px" borderColor="gray.500" />
                                </Box>
                            </Flex>
                        </Button>

                        <Modal isOpen={isMainModalOpen} onClose={onMainModalClose}>
                            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(240, 250, 250, 0.4)' }} onClick={onMainModalClose}></div>
                            <ModalContent style={{ height: "400px", width: "500px", borderRadius: "15px", position: 'absolute', top: '20%', left: '35%', transform: 'translate(-20%, -20%)' }}>
                                <ModalHeader>Новый список</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Input placeholder="Название списка" fontSize="16px" color="gray.500" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                    <List gap={4} p={5}>
                                        <ListItem mb="20px">
                                            <Text fontSize="20px" fontWeight="600">Предлагаемые названия</Text>
                                        </ListItem>
                                        <ListItem mb="20px">
                                            <Text>Книги</Text>
                                        </ListItem>
                                        <ListItem mb="20px">
                                            <Text>Мой список</Text>
                                        </ListItem>
                                        <ListItem mb="20px">
                                            <Text>Продукты на неделю</Text>
                                        </ListItem>
                                    </List>
                                    <Button mb="60px" colorScheme='blue' onClick={() => handleSave(inputValue)} marginRight="280px">
                                        Сохранить
                                    </Button>
                                </ModalBody>
                            </ModalContent>
                        </Modal>

                        <Box p={4} display="flex" flexDirection="row" marginTop="-15px" >
                            {buttons.map((button, index) => (
                                <Button
                                    gap={"10px"}
                                    ml="10px"
                                    key={index}
                                    onClick={() => handleButtonClick(index)}
                                    height="100px"
                                    borderRadius="14px"
                                    borderColor="gray.400"
                                    borderWidth="1px"
                                    width="max-content"
                                    bgColor={"white"}
                                >
                                    <Flex flexDirection="column" alignItems="center" >
                                        <Text fontSize="13px" color="gray.600" mb={4}>Список Новый</Text>
                                        <Box p="5px" bg="gray.200" borderRadius="15%">
                                            <ListIconCustomCreated borderWidth="30px" borderColor="gray.500" />
                                        </Box>
                                    </Flex>
                                </Button>
                            ))}

                            {modalStates.map((isOpen, index) => (
                                <Modal isOpen={isOpen} onClose={() => setModalStates(currentStates => currentStates.map((state, i) => (i === index ? false : state)))}>
                                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(240, 250, 250, 0.4)' }} onClick={onMainModalClose}></div>
                                    <ModalContent style={{ height: "400px", width: "500px", borderRadius: "15px", position: 'absolute', top: '20%', left: '35%', transform: 'translate(-20%, -20%)' }}>
                                        <ModalHeader>{buttons[index]?.label}</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <Text> Here new lists should be page?</Text>
                                        </ModalBody>
                                    </ModalContent>
                                </Modal>
                            ))}
                        </Box>
                    </Box>


                    <Box width="1100px" mt="50px" mb="30px" >
                        <Box display="flex">
                            <Input shadow={'xs'} type="text" value={selectedItemMenu} width="220px" backgroundColor="white" borderWidth="0.1px" borderColor={"darkgray"} _hover={{ borderColor: "brand.blue" }} />
                            <Menu>
                                <MenuButton shadow={'xs'} mr="40px" backgroundColor="white" as={IconButton} icon={<ChevronDownIcon />} borderWidth="0.1px" borderColor={"darkgray"} _hover={{ borderColor: "brand.blue" }} />
                                <MenuList rounded={14}>
                                    {menuItems.map((item, index) => (
                                        <MenuItem _hover={{ bg: 'blue.50', color: 'blue.950' }} key={index} onClick={() => handleItemClick(item)}>{item}</MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                    <>

                        {favorites && <Flex
                            flexWrap={'wrap'}
                            justify={'space-between'}
                            borderBottomWidth={"0.01px"} 
                            borderBottomColor={"#36454F"}
                            pb={8}
                            mb={8}
                        >
                            {favorites.map((productId, index) => {
                                // const product = getProductById(productId)
                                // product.isFavorite = true
                                return(
                                    <ProductCard
                                    key={index}
                                    index={index}
                                    productId={productId}
                                    isFavorite={true}
                                />
                                )
                            })}
                        </Flex>}
                    </>
                    <RecommendationBlock />
                </Box>

            </Box>
        </Box>
    );
}

export default ListInsideTovar;
