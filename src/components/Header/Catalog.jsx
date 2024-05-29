import React, { useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
    Box,
    VStack,
    Text,
    Icon,
    Grid,
    GridItem
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { MdPhonelink } from "react-icons/md";
import { HamburgerIcon } from '@chakra-ui/icons';
import MainCatalog from '../../components/Catalog_category_list/Main_catalog.jsx'
import Hamburger from 'hamburger-react'
import categories from "../../api/MockData/categories.json"
import { useDisclosure } from '@chakra-ui/react';
import IconWithTitle from './IconWithTitle.jsx';
import { color } from 'framer-motion';
import { useNavigate } from 'react-router-dom';




const Catalog = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [active, setActive] = useState('Электроника');
    const navigate = useNavigate();

    return (
        <>
            <Menu isLazy onClose={toggleMenu}>
                <MenuButton
                    as={Button}
                    pe={8}
                    ms={4}
                    me={2}
                    height={'48px'}
                    display={'flex'}
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    _active={{
                        bg: '#458af7',
                        transform: 'scale(0.97)',
                        borderColor: '#bec3c9',
                    }}
                    alignItems={'center'}
                    bg={'brand.blue'}
                    color={'white'}
                    _hover={{ bg: 'brand.hoverblue' }}
                    onClick={toggleMenu}
                >
                    <Flex align={'center'}>
                        Каталог
                        <Box>
                            <Hamburger toggled={isMenuOpen} size={18} />
                        </Box>
                    </Flex>
                </MenuButton>
                <MenuList
                    m={5}
                    position={'absolute'}
                    top="-20px"
                    left="-220px"
                    w={'1380px'}
                >
                    <Flex>
                        <VStack
                            minW={'430px'}
                            maxH={'730px'}
                            overflow={'auto'}
                            p={2}
                            sx={{
                                '::-webkit-scrollbar': {
                                    width: '5px',
                                },
                                '::-webkit-scrollbar-track': {
                                    background: '#f1f1f1',
                                    borderRadius: '5px',
                                },
                                '::-webkit-scrollbar-thumb': {
                                    background: '#888',
                                    borderRadius: '5px',
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
                                    borderRadius={'5px'}
                                    minW={'400px'}
                                    onClick={() => navigate(`/categories/${key}`)}
                                >
                                    <Flex align={'start'} justify={'center'}>
                                        <Icon as={MdPhonelink} boxSize={6} mr={2} />
                                        {key}
                                    </Flex>
                                </MenuItem>
                            ))}
                        </VStack>
                        <Box
                            w={'100%'}
                            mx={4}
                            maxH={'730px'}
                            overflow={'auto'}
                            sx={{
                                '::-webkit-scrollbar': {
                                    width: '5px',
                                },
                                '::-webkit-scrollbar-track': {
                                    background: '#f1f1f1',
                                    borderRadius: '5px',
                                },
                                '::-webkit-scrollbar-thumb': {
                                    background: '#777',
                                    borderRadius: '5px',
                                },
                                '::-webkit-scrollbar-thumb:hover': {
                                    background: '#555',
                                },
                            }}
                        >
                            <Text fontSize={28} fontWeight={"500"} ml="10px">{active}</Text>
                            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={8}>
                                {Object.keys(categories[active]).map((key) => (
                                    <GridItem w='100%' key={key}>
                                        <ChakraLink textDecoration={"none"} as={Link} to={`/categories/${key}`} key={key}><Text fontWeight={'600'} ml="10px">{key}</Text></ChakraLink>
                                        {categories[active][key].map((item) => (
                                            <ChakraLink as={Link} to={`/categories/${item}`} key={item}><Text ms={2}>{item}</Text></ChakraLink>
                                        ))}
                                    </GridItem>
                                ))}
                            </Grid>

                            {/* {console.log(categories[active])} */}
                        </Box>
                    </Flex>
                    {/* <MainCatalog /> */}

                </MenuList>
            </Menu>
        </>
    )
}



export default Catalog;
