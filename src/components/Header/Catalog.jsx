import React, { useState } from 'react';

import {
    Menu,
    MenuButton,
    MenuList,
    Button
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Main_catalog from '../../components/Catalog_category_list/Main_catalog.jsx'
import Main_catalog_html from "../Catalog_category_list/Main_catalog_html.jsx";

const Catalog = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Menu isLazy>
            <MenuButton
                as={Button}
                pe={8}
                ms={4}
                me={2}
                height={'48px'}
                width={'250px'}
                display={'flex'}
                alignItems={'center'}
                bg={'brand.blue'}
                color={'white'}
                _hover={{ bg: 'brand.hoverblue' }}
                leftIcon={<HamburgerIcon me={1} boxSize={6} />}
                onClick={toggleMenu}
            >
                Каталог
            </MenuButton>
            <MenuList>
                {isMenuOpen ? <Main_catalog /> : null}
            </MenuList>
        </Menu>
    );
};

export default Catalog;
