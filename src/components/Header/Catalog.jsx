import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'


const Catalog = () => {
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
                    _hover={{bg:'brand.hoverblue'}}
                    leftIcon={
                        <HamburgerIcon 
                            me={1} 
                            boxSize={6} 
                        />}
                >
                    Каталог
                </MenuButton>
                <MenuList>
                    {/* MenuItems are not rendered unless Menu is open */}
                    <MenuItem>New Window</MenuItem>
                    <MenuItem>Open Closed Tab</MenuItem>
                    <MenuItem>Open File</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default Catalog