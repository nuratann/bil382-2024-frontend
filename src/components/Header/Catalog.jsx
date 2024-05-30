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



const Catalog = ({type, title, setFunc}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const [active, setActive] = useState('Электроника');
    const navigate = useNavigate();

    return (
        <>
            <Menu isLazy onClose={toggleMenu} isOpen={isMenuOpen}>
                <MenuButton
                    as={Button}
                    pe={type==='catalog' ? 8 : 4}
                    ms={type==='catalog' ? 4 : 0}
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
                        {type === 'catalog' ?
                            <>
                                Каталог
                                <Box>
                                    <Hamburger toggled={isMenuOpen} size={18} />
                                </Box>
                            </>
                            :
                            <><Text>{title}</Text></>
                        }
                    </Flex>
                </MenuButton>
                <MenuList 
                    m={5} 
                    position={'absolute'} 
                    top="-20px" 
                    left="-220px"
                    w={type==='catalog' ? '1380px' : '800px'}
                >
                    <Flex>
                    <VStack
                        minW={type==='catalog' ? '430px' : '300px'}
                        maxH={type==='catalog' ? '730px' : '600px'}
                        overflow={'auto'}
                        p={2}
                        sx={{
                            '::-webkit-scrollbar': {
                              width: '10px',
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
                        <Text>Основные категории</Text>
                        {Object.keys(categories).map((key) => (
                            <MenuItem 
                                key={key} 
                                onMouseEnter={() => {setActive(key)}}
                                color={active === key ? 'brand.blue' : 'black'}
                                bg={active === key ? 'gray.200' : 'white'}
                                fontWeight={'500'}
                                borderRadius={'5px'}
                                minW={type==='catalog' ? '400px' : '270px'}
                                onClick={() => type==='catalog' ? navigate(`/categories/${key}`) : setFunc(key)}
                            >
                                <Flex align={'start'} justify={'center'}>
                                    {type==='catalog' && <Icon as={MdPhonelink} boxSize={6} mr={2} />}
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
                              width: '10px',
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
                            <Text fontSize={type==='catalog' ? 42 : 24}>{active}</Text>
                            <Grid templateColumns={type==='catalog' ? 'repeat(3, 1fr)':'repeat(2, 1fr)'} gap={6} mt={8}>
                                {Object.keys(categories[active]).map((key) => (
                                    <GridItem w='100%' key={key}>
                                        <Text 
                                            pl={3}
                                            fontWeight={'500'} 
                                            key={key} 
                                            cursor={'pointer'} 
                                            _hover={{bg: 'gray.100'}} 
                                            borderRadius={'5px'}
                                            onClick={() => {
                                                if(type==='catalog'){
                                                    navigate(`/categories/${key}`)
                                                 }else{
                                                    setFunc(active+" / "+key)
                                                    toggleMenu()
                                                 }}}
                                        >
                                            {key}
                                        </Text>
                                        {categories[active][key].map((item) => (
                                            <Text 
                                                pl={5} 
                                                key={item} 
                                                cursor={'pointer'} 
                                                _hover={{bg: 'gray.100'}} 
                                                borderRadius={'5px'}
                                                onClick={() => {
                                                    if(type==='catalog'){
                                                        navigate(`/categories/${item}`)
                                                     }else{
                                                        setFunc(active+" / "+key+" / "+item)
                                                        toggleMenu()
                                                     }}}
                                            >
                                                {item}
                                            </Text>
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
