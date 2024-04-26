import React from 'react';
import { useState } from 'react';
import { Flex, Box, Heading, Container, List, ListItem, Text, Link, LinkBox } from '@chakra-ui/react'
import ProfileImage from './ProfileImage';
import ProfileMainSub from './ProfileSubPages/ProfileMainSub';
import ShopCertificates from './ProfileSubPages/ShopCertificates';
import Bonuses from './ProfileSubPages/BonusAndPoints';
import PayMethods from './ProfileSubPages/PayMethods';
import Chat from './OrdersSubComp/Chat';
import PersonalAccount from './PersonalAccount';


function ProfileMain() {

    // const [activeLink, setActiveLink] = useState(null);

    // const handleClick = (link) => {
    //     setActiveLink(link);
    // };

    // const isActive = (link) => {
    //     return activeLink === link;
    // };


    const [activeComponent, setActiveComponent] = useState("Главная");

    const handleLinkClick = (componentName) => {
        setActiveComponent(componentName);

    };

    return (
        <Box height="max-content" width="100%" bgColor="gray.100" direction="row" display="flex" mt="20px">

            <Box height="max-content"
                width="250px"
                display="flex"
                ml="40px"
                mt="30px"
                mb="40px"
                borderRadius="28px"
                bgColor="white"
                flexDirection="column"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" >

                <ProfileImage />

                <Box ml="30px" mt="30px" width="200px" >
                    <Text fontWeight="750" fontSize={"14px"} mt="20px">Личная информация</Text>
                    <List fontSize="14px"
                        fontWeight={500}
                        mt="5px"
                        spacing={1}>
                        <Link
                        >
                            <ListItem
                                onClick={() => handleLinkClick("Главная")}
                                cursor="pointer"
                                mb="5px">Главная</ListItem>
                        </Link>

                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Подарочные сертификаты")}
                                cursor="pointer"
                                mb="5px">Подарочные сертификаты</ListItem>
                        </Link>
                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Баллы и бонусы")}
                                cursor="pointer"
                                mb="5px">Баллы и бонусы</ListItem>
                        </Link>
                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Способы оплаты")}
                                cursor="pointer"
                                mb="5px">Способы оплаты</ListItem>
                        </Link>
                    </List>



                    <Text fontWeight="750" fontSize={"14px"} mt="20px">Заказы</Text>
                    <List fontSize="14px" fontWeight={500} mt="5px" spacing={2}>
                        <Link>
                            <ListItem mb="5px">Моя корзина</ListItem>
                        </Link>
                        <Link>
                            <ListItem mb="5px">Мои заказы</ListItem>
                        </Link>
                        <Link>
                            <ListItem mb="5px">Мои возвраты</ListItem>
                        </Link>
                        <Link>
                            <ListItem mb="5px">Купленные товары</ListItem>
                        </Link>
                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Сообщения")}
                                cursor="pointer" mb="5px">Сообщения</ListItem>
                        </Link>
                        <Link>
                            <ListItem mb="5px">Электронные чеки</ListItem>
                        </Link>
                    </List>



                    <Text fontWeight="750" fontSize={"14px"} mt="20px">Отзывы</Text>
                    <List fontSize="14px" fontWeight={500} mt="5px" spacing={1} >
                        <Link to="/reviews">
                            <ListItem mb="5px">Мои отзывы</ListItem>
                        </Link>
                        <Link to="/questions-and-answers">
                            <ListItem mb="5px">Мои вопросы и ответы</ListItem>
                        </Link>
                        <Link to="/pending-questions">
                            <ListItem mb="5px">Вопросы, ожидающие ответа</ListItem>
                        </Link>
                    </List>


                    <Text fontWeight="750" fontSize={"14px"} mt="20px">Подписки</Text>
                    <List fontSize="14px" fontWeight={500} mt="5px" spacing={4}>
                        <Link to="/favorites">
                            <ListItem mb="5px">Избранное</ListItem>
                        </Link>
                        <Link to="/notification-settings">
                            <ListItem mb="5px">Настройки уведомлений</ListItem>
                        </Link>
                    </List>


                    <Text fontWeight="750" fontSize={"14px"} mt="20px" >Настройки аккаунта</Text>
                    <List fontSize="14px" fontWeight={500} mt="5px" spacing={1} mb="50px" >
                        <Link to="/account">
                            <ListItem
                                onClick={() => handleLinkClick("Моя учётная запись")}
                                cursor="pointer"
                                mb="5px">Моя учётная запись</ListItem>
                        </Link>
                    </List>
                </Box>

            </Box>

            <Box>
                {activeComponent === "Главная" && <ProfileMainSub />}
                {activeComponent === "Подарочные сертификаты" && <ShopCertificates />}
                {activeComponent === "Баллы и бонусы" && <Bonuses />}
                {activeComponent === "Способы оплаты" && <PayMethods />}
                {activeComponent === "Сообщения" && <Chat />}
                {activeComponent === "Моя учётная запись" && <PersonalAccount />}

            </Box>
        </Box>



    )
}


export default ProfileMain;