import React, { useState } from 'react';
import {
    Menu,
    MenuList,
    MenuItem,
    Flex,
    Box,
    VStack,
    Text,
    Icon,
    Grid,
    GridItem,
    HStack,
    Button,
    Input,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react';
import { MdPhonelink, MdDelete, MdEdit, MdAdd } from "react-icons/md";
import categoriesData from "../../../api/MockData/categories.json";

const CategoryChangeRequests = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [categories, setCategories] = useState(categoriesData);
    const [active, setActive] = useState('Электроника');
    const [newCategory, setNewCategory] = useState('');
    const [newSubcategory, setNewSubcategory] = useState('');

    const handleDeleteCategory = (categoryName) => {
        const updatedCategories = { ...categories };
        delete updatedCategories[categoryName];
        setCategories(updatedCategories);
    };

    const handleEditCategory = (categoryName) => {
        console.log(`Изменить категорию: ${categoryName}`);
        onOpen();
    };

    const handleAddCategory = () => {
        if (newCategory) {
            setCategories({
                ...categories,
                [newCategory]: {}
            });
            setNewCategory('');
            onClose();
        }
    };

    const handleAddSubcategory = (categoryName) => {
        if (newSubcategory) {
            const updatedCategories = { ...categories };
            if (!updatedCategories[categoryName]) {
                updatedCategories[categoryName] = {};
            }
            updatedCategories[categoryName][newSubcategory] = [];
            setCategories(updatedCategories);
            setNewSubcategory('');
            onClose();
        }
    };

    return (
        <Flex m={2} position={'relative'} height="100%">
            <Menu isLazy isOpen={isMenuOpen}>
                <MenuList
                    m={2}
                    w="100%"
                >
                    <Flex>
                        <VStack
                            minW={'215px'}
                            maxH={'calc(100vh - 100px)'}
                            overflow={'auto'}
                            p={1}
                            sx={{
                                '::-webkit-scrollbar': {
                                    width: '3px',
                                },
                                '::-webkit-scrollbar-track': {
                                    background: '#f1f1f1',
                                    borderRadius: '3px',
                                },
                                '::-webkit-scrollbar-thumb': {
                                    background: '#888',
                                    borderRadius: '3px',
                                },
                                '::-webkit-scrollbar-thumb:hover': {
                                    background: '#555',
                                },
                            }}
                        >
                            {Object.keys(categories).map((key) => (
                                <MenuItem
                                    key={key}
                                    onMouseEnter={() => { setActive(key) }}
                                    color={active === key ? 'brand.blue' : 'black'}
                                    bg={active === key ? 'gray.200' : 'white'}
                                    fontWeight={'500'}
                                    borderRadius={'3px'}
                                    minW={'200px'}
                                >
                                    <Flex align={'center'} justify={'space-between'} w="100%">
                                        <HStack>
                                            <Icon as={MdPhonelink} boxSize={4} mr={1} />
                                            <Text fontSize={'sm'}>{key}</Text>
                                        </HStack>
                                        <HStack>
                                            <Icon as={MdEdit} boxSize={4} mr={1} onClick={() => handleEditCategory(key)} />
                                            <Icon as={MdDelete} boxSize={4} onClick={() => handleDeleteCategory(key)} />
                                        </HStack>
                                    </Flex>
                                </MenuItem>
                            ))}
                            <Button size="sm" leftIcon={<MdAdd />} onClick={onOpen}>Добавить категорию</Button>
                        </VStack>
                        <Box
                            w={'100%'}
                            mx={2}
                            maxH={'calc(100vh - 100px)'}
                            overflow={'auto'}
                            sx={{
                                '::-webkit-scrollbar': {
                                    width: '3px',
                                },
                                '::-webkit-scrollbar-track': {
                                    background: '#f1f1f1',
                                    borderRadius: '3px',
                                },
                                '::-webkit-scrollbar-thumb': {
                                    background: '#777',
                                    borderRadius: '3px',
                                },
                                '::-webkit-scrollbar-thumb:hover': {
                                    background: '#555',
                                },
                            }}
                        >
                            <Text fontSize={14} fontWeight={"500"} ml="5px">{active}</Text>
                            <Grid templateColumns='repeat(3, 1fr)' gap={3} mt={4}>
                                {Object.keys(categories[active]).map((key) => (
                                    <GridItem w='100%' key={key}>
                                        <HStack justify="space-between">
                                            <Text fontSize={'sm'} fontWeight={'600'} ml="5px">{key}</Text>
                                            <Button size="xs" leftIcon={<MdAdd />} onClick={() => handleAddSubcategory(active)}>
                                                Добавить подкатегорию
                                            </Button>
                                        </HStack>
                                        {categories[active][key].map((item, index) => (
                                            <Text fontSize={'sm'} ms={1} key={index}>{item}</Text>
                                        ))}
                                    </GridItem>
                                ))}
                            </Grid>
                        </Box>
                    </Flex>
                </MenuList>
            </Menu>

            {/* Modal for adding category */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Добавить новую категорию</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            placeholder="Название категории"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            mb={3}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={handleAddCategory}>Добавить</Button>
                        <Button variant="ghost" onClick={onClose}>Отмена</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Modal for adding subcategory */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Добавить новую подкатегорию</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            placeholder="Название подкатегории"
                            value={newSubcategory}
                            onChange={(e) => setNewSubcategory(e.target.value)}
                            mb={3}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={() => handleAddSubcategory(active)}>Добавить</Button>
                        <Button variant="ghost" onClick={onClose}>Отмена</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
}

export default CategoryChangeRequests;
