import React from 'react';
import { Flex, Box, Heading, Container, List, ListItem, Text, Link as ChakraLink, LinkBox } from '@chakra-ui/react'
import ProfileImage from './ProfileImage';
import { Link } from 'react-router-dom';


function ProfileMenu({active}) {
    
    const menuList = {
        "Личная информация":{
            "Главная":"/profile/main",
            "Подарочные сертификаты":"/profile/certs",
            "Баллы и бонусы":"/profile/bonuses",
            "Способы оплаты":"/profile/pay-methods",
        },
        "Товары":{
            "Мои товары":"/profile/my-products",
            "Добавить товар":"/profile/add-product",
            "Заявки":"/profile/my-requests",
            "Проданные":"/profile/sold-products",
        },
        "Заказы":{
            "Моя корзина":"/cart",
            "Мои заказы":"/profile/my-orders",            
            "Мои возвраты":"/profile/my-returns",
            "Собщения":"/profile/chat",
            "Электронные чеки":"/profile/electronic-receipts",
        },
        "Отзывы и вопросы о товарах":{
            "Мои отзывы":"/profile/my-reviews",
            "Мои вопросы и ответы":"/profile/my-questions",
            "Вопросы ожидающие ответа":"/profile/unanswered-questions",   
        },
        "Подписки":{
            "Избранное":"/favorites",
            "Настройки уведомлений":"/profile/notification-settings",     
        },
        "Настройки":{
            "Моя учетная запись":"/profile/personal-account",
            "Стать продавцом":"/profile/seller-profile",            
        },
    }

    return (

            <Box 
                height="max-content"
                minW={'280px'}
                display="flex"
                m={6}
                borderRadius="18px"
                bgColor="white"
                flexDirection="column"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" 
            >

                <ProfileImage />
                <Box textAlign={'center'}>
                <ChakraLink
                    _hover={{ textDecoration: 'none' }}
                    as={Link}
                    textDecoration="none"
                    color="brand.blue"
                    to='/profile/personal-account'
                >
                    Изменить профиль
                </ChakraLink>
                </Box>

                <Box m={'30px'} >
                    {Object.keys(menuList).map((key) => (
                        <Box key={key}>
                            <Text fontWeight="750" fontSize={"14px"}>{key}</Text>
                            <List
                                fontSize="14px"
                                fontWeight={500}
                                mt="5px"
                                mb={4}
                            >
                                {Object.keys(menuList[key]).map((item) => (
                                    <ListItem mb={'5px'} key={item} bg={active === menuList[key][item] ? 'gray.200' : 'white'} px={2} py={1} borderRadius={5}>
                                        <ChakraLink as={Link} to={menuList[key][item]}>{item}</ChakraLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ))}
                </Box>

            </Box>




    )
}


export default ProfileMenu;