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
import Hamburger from 'hamburger-react'


const Catalog = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                <MenuList m={5}>
                    <MainCatalog />
                </MenuList>
            </Menu>
        </>
    )
}

export default Catalog;
