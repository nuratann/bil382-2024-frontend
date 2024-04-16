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
    Box
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import MainCatalog from '../../components/Catalog_category_list/Main_catalog.jsx'
//import Main_catalog_html from "../Catalog_category_list/Main_catalog_html.jsx";
//import styles from './Catalog.module.scss'
import Hamburger from 'hamburger-react'


const Catalog = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <Menu isLazy>
                <MenuButton
                    as={Button}
                    pe={8}
                    ms={4}
                    me={2}
                    height={'48px'}
                    display={'flex'}
                    alignItems={'center'}
                    bg={'brand.blue'}
                    color={'white'}
                    _hover={{ bg: 'brand.hoverblue' }}
                    leftIcon={<HamburgerIcon me={1} boxSize={6} />}
                    onClick={toggleMenu}
                >
                    <Flex align={'center'}>
                    Каталог
                    <Box>
                        <Hamburger toggled={isOpen} size={18} />
                    </Box>
                    </Flex>
                </MenuButton>
                <MenuList>
                    {isMenuOpen ? <MainCatalog /> : null}
                </MenuList>
            </Menu>
        </>
    )
}

export default Catalog;
