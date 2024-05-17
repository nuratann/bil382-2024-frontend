import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Flex, Box, Heading, Container, List, ListItem, Text, Link, LinkBox } from '@chakra-ui/react'
import ProfileImage from './ProfileImage';
import ProfileMainSub from './ProfileSubPages/ProfileMainSub';
import ShopCertificates from './ProfileSubPages/ShopCertificates';
import Bonuses from './ProfileSubPages/BonusAndPoints';
import PayMethods from './ProfileSubPages/PayMethods';
import Chat from './OrdersSubComp/Chat';
import PersonalAccount from './PersonalAccount';
import OrdersComponent from './ProfileSubPages/OrdersComponent';
import ReturnsComponents from './ProfileSubPages/ReturnsComponent';
import ElectronicReceipts from './ProfileSubPages/ElectronicReceipts';
import ReviewsComponent from './ProfileSubPages/ReviewsComponent';
import FavoritesFunction from '../Favorites/Favorites';
import { Link as RouterLink } from 'react-router-dom';
import SellerProfile from './ProfileSubPages/SellerProfile';
import MyProducts from './Seller/MyProducts';
import AddProduct from './Seller/AddProduct';



function ProfileMain() {



    // const [activeLink, setActiveLink] = useState(null);

    // const handleClick = (link) => {
    //     setActiveLink(link);
    // };

    // const isActive = (link) => {
    //     return activeLink === link;
    // };

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initValue = searchParams.get('init');

    const [activeComponent, setActiveComponent] = useState("Главная");

    const handleLinkClick = (componentName) => {
        setActiveComponent(componentName);

    };
    useEffect(() => {
        handleLinkClick(initValue || "Главная");
    }, [])



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

                    <Text fontWeight="750" fontSize={"14px"} mt="20px">Мои товары</Text>
                    <List fontSize="14px"
                        fontWeight={500}
                        mt="5px"
                        spacing={1}>
                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Товары")}
                                cursor="pointer"
                                mb="5px">Товары</ListItem>
                        </Link>

                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Добавить товар")}
                                cursor="pointer"
                                mb="5px">Добавить товар</ListItem>
                        </Link>

                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Заявки на товар")}
                                cursor="pointer"
                                mb="5px">Заявки на товар</ListItem>
                        </Link>
                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Проданные товары")}
                                cursor="pointer"
                                mb="5px">Проданные товары</ListItem>
                        </Link>
                    </List>

                    <Text fontWeight="750" fontSize={"14px"} mt="20px">Заказы</Text>
                    <List fontSize="14px" fontWeight={500} mt="5px" spacing={2}>
                        <RouterLink to='/basket_page'>
                            <ListItem mb="5px">Моя корзина</ListItem>
                        </RouterLink >
                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Мои заказы")}
                                mb="5px">Мои заказы</ListItem>
                        </Link>
                        <Link>
                            <ListItem
                                mb="5px"
                                onClick={() => handleLinkClick("Мои возвраты")}>Мои возвраты</ListItem>
                        </Link>
                        <Link>
                            <ListItem
                                onClick={() => handleLinkClick("Сообщения")}
                                cursor="pointer" mb="5px">Сообщения</ListItem>
                        </Link>
                        <Link>
                            <ListItem
                                mb="5px"
                                onClick={() => handleLinkClick("Электронные чеки")}
                            >Электронные чеки</ListItem>
                        </Link>
                    </List>



                    <Text fontWeight="750" fontSize={"14px"} mt="20px">Отзывы</Text>
                    <List fontSize="14px" fontWeight={500} mt="5px" spacing={1} >
                        <RouterLink>
                            <ListItem mb="5px" onClick={() => handleLinkClick("Мои отзывы")}>Мои отзывы</ListItem>
                        </RouterLink >
                        <RouterLink to="/questions-and-answers">
                            <ListItem mb="5px">Мои вопросы и ответы</ListItem>
                        </RouterLink >
                        <RouterLink to="/pending-questions">
                            <ListItem mb="5px">Вопросы, ожидающие ответа</ListItem>
                        </RouterLink >
                    </List>


                    <Text fontWeight="750" fontSize={"14px"} mt="20px">Подписки</Text>
                    <List fontSize="14px" fontWeight={500} mt="5px" spacing={4}>
                        <RouterLink to="/favorites">
                            <ListItem
                                mb="5px">Избранное</ListItem>
                        </RouterLink>
                        <RouterLink to="/notification-settings">
                            <ListItem mb="5px">Настройки уведомлений</ListItem>
                        </RouterLink >
                    </List>


                    <Text fontWeight="750" fontSize={"14px"} mt="20px" >Настройки аккаунта</Text>
                    <List fontSize="14px" fontWeight={500} mt="5px" spacing={1} mb="50px" >
                        <Link to="/account">
                            <ListItem
                                onClick={() => handleLinkClick("Моя учётная запись")}
                                cursor="pointer"
                                mb="5px">Моя учётная запись</ListItem>
                        </Link >
                        <Link to="/account">
                            <ListItem
                                onClick={() => handleLinkClick("Стать продавцом")}
                                cursor="pointer"
                                mb="5px">Стать продавцом</ListItem>
                        </Link >
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
                {activeComponent === "Мои заказы" && <OrdersComponent />}
                {activeComponent === "Мои возвраты" && <ReturnsComponents />}
                {activeComponent === "Электронные чеки" && <ElectronicReceipts />}
                {activeComponent === "Мои отзывы" && <ReviewsComponent />}
                {activeComponent === "Стать продавцом" && <SellerProfile />}
                {activeComponent === "Товары" && <MyProducts />}
                {activeComponent === "Добавить товар" && <AddProduct />}
                {/* {activeComponent === "Избранное" && <FavoritesFunction />} */}
            </Box>
        </Box>



    )
}


export default ProfileMain;