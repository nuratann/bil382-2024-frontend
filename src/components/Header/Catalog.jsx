import React, { useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import styles from './Catalog.module.scss'
import Hamburger from 'hamburger-react'


const Catalog = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const handleToggle = () => {
          setIsOpen(!isOpen);
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
                    onClick={handleToggle}
                >
                    <Flex align={'center'}>
                    Каталог
                    <Box>
                        <Hamburger toggled={isOpen} size={18} />
                    </Box>
                    </Flex>
                </MenuButton>
                <MenuList>
                    <MenuItem>New Window</MenuItem>
                    <MenuItem>Open Closed Tab</MenuItem>
                    <MenuItem>Open File</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default Catalog