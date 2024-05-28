import React, { useEffect, useState } from 'react'
import { Box, VStack, Icon, Text, Button, Flex, Avatar} from '@chakra-ui/react'
import useUserStore from '../../stores/useUserStore'
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
import RegAndAuthModal from '../RegAndAuthModal/RegAndAuthModal'
import { useNavigate } from 'react-router-dom'
import { BsEmojiGrin } from "react-icons/bs";

const IconTitleDropMenu = ({ icon, text}) => {
    const user = useUserStore((state) => state.user)
    const reset = useUserStore((state) => state.reset)
    const notifications = user.notifications[0]
    const isAuth = user.isAuth
    const [isOnTrigger, setOnTrigger] = useState(false);
    const [isOnMenu, setOnMenu] = useState(false);
    const menuItems = [
        { text: 'Личный кабинет', link: '/profile/main' },
        { text: 'Баллы и бонусы', link: '/profile/bonuses' },
        { text: 'Premium', link: '/profile/premium' },
        { text: 'Сообщения', link: '/profile/chat' },
        { text: 'Сравнение товаров', link: '/profile/compare' },
        { text: 'Купоны и сертификаты', link: '/profile/certs' }
    ]
    const navigate = useNavigate();
    return (
        <>

            <Popover isLazy={true} isOpen={isOnTrigger || isOnMenu}>
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
                        _hover={{ color: 'brand.hoverblue' }}
                    >
                        
                        <Icon as={isAuth?BsEmojiGrin:icon} boxSize={5} mx={2} mt={3} />
                        <Text fontSize={11} fontWeight={'semibold'}>{isAuth?user.firstName:text}</Text>
                        {isAuth&&notifications!=0?
                        <Box
                            boxSize={4}
                            position="absolute" top={0.25} right={0.25} zIndex={2}
                            color={'white'}
                            bg={'brand.red'}
                            textAlign={'center'}
                            rounded={'full'}
                            fontSize={9}
                            pt={'1.5px'}
                        >
                            <Text>{notifications}</Text>
                        </Box>
                        :
                        <></>}
                        
                    </VStack>
                </PopoverTrigger>
                <PopoverContent
                    onMouseEnter={() => setOnMenu(true)}
                    onMouseLeave={() => setOnMenu(false)}
                >
                    <PopoverArrow />
                    <PopoverBody>
                        {isAuth?                            
                            <VStack alignItems={'start'} spacing={1}>
                                {menuItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        bg={'white'}
                                        textAlign={'left'}
                                        justifyContent={'flex-start'}
                                        w={'100%'}
                                        onClick={()=>{navigate(item.link)}}
                                    >
                                        {item.text}
                                    </Button>
                                ))}
                                <Button
                                        bg={'white'}
                                        textAlign={'left'}
                                        justifyContent={'flex-start'}
                                        w={'100%'}
                                        onClick={()=>{reset(); setOnMenu(false); setOnTrigger(false);}}
                                    >
                                        Выйти
                                    </Button>
                        </VStack>
                        :
                            <VStack spacing={2} textAlign={'center'}>
                                <Text fontSize={14} fontWeight={'semibold'} color={'brand.text'}>
                                    Войдите, чтобы делать покупки, отслеживать заказы и пользоваться персональными скидками и баллами.
                                    После входа вы сможете создать аккаунт юрлица.
                                </Text>
                                {/* <Button
                                        bg={'brand.blue'}
                                        w={'90%'}
                                        color={'white'}
                                        fontSize={14}
                                        onClick={(e) => fetchUser()}
                                >
                                        Войти или зарегистрироваться
                                </Button> */}
                                <RegAndAuthModal/>
                        </VStack>
                        }
                        
                    </PopoverBody>
                </PopoverContent>
            </Popover>

        </>
    )
}

export default IconTitleDropMenu