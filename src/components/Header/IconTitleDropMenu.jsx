import React, { useState } from 'react'
import { Box, VStack, Icon, Text, Button } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'

const IconTitleDropMenu = ({ icon, text, count, username }) => {
    const [isOnTrigger, setOnTrigger] = useState(false);
    const [isOnMenu, setOnMenu] = useState(false);
    const menuItems = [
        { text: 'Личный кабинет' },
        { text: 'Баллы и бонусы' },
        { text: 'Premium' },
        { text: 'Сообщения' },
        { text: 'Сравнение товаров' },
        { text: 'Купоны и сертификаты' },
        { text: 'Выйти' }
    ]
    return (
        <>

            <Popover isLazy={true} isOpen={isOnTrigger||isOnMenu}>
                <PopoverTrigger>
                    <VStack
                        align={'center'}
                        maxH={'54px'}
                        spacing={0}
                        fontFamily={'Montserrat'}
                        position={'relative'}
                        m={2}
                        onMouseEnter={() => setOnTrigger(true)}
                        onMouseLeave={() => setOnTrigger(false)}
                        _hover={{ color: 'brand.hoverblue' }}>
                        <Icon as={icon} boxSize={5} mx={2} mt={3} />
                        <Text fontSize={11} fontWeight={'semibold'}>{text}</Text>
                        <Box
                            boxSize={4}
                            position="absolute" top={0.25} right={0.25} zIndex={2}
                            color={'white'}
                            bg={'red'}
                            textAlign={'center'}
                            rounded={'full'}
                            fontSize={9}
                            pt={'1.5px'}
                        >
                            <Text>{count}</Text>
                        </Box>
                    </VStack>
                </PopoverTrigger>
                <PopoverContent 
                    onMouseEnter={() => setOnMenu(true)}
                    onMouseLeave={() => setOnMenu(false)}
                >
                    <PopoverArrow />
                    <PopoverBody>
                        <VStack alignItems={'start'} spacing={1}>
                            {menuItems.map((item, index) => (
                                <Button
                                    key={index}
                                    bg={'white'}
                                    textAlign={'left'}
                                    justifyContent={'flex-start'}
                                    w={'100%'}
                                >
                                    {item.text}
                                </Button>
                            ))}
                        </VStack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>


        </>
    )
}

export default IconTitleDropMenu