import React from 'react';
import { Box, Image, Text, VStack, Link } from '@chakra-ui/react';

const UserProfileSidebar = ({ onChangeComponent }) => {
  return (
    <Box width="220px" overflow="hidden" bg="white" borderRadius={"20px"} boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)" m={"30px 30px"}>
      <Box p="4" borderBottomWidth="1px">
        <Image borderRadius="full" boxSize="110px" src="https://avatars.mds.yandex.net/i?id=8b1dbb6ec025f00657433a26bd54c24544b5ebda-12609276-images-thumbs&n=13" alt="Profile" />
        <Text fontSize="lg" fontWeight="bold" mt="2" >Нурасыл Жумакан</Text>
        <Link fontSize="sm" color="brand.blue" textAlign="center" onClick={() => onChangeComponent('edit')}>Изменить профиль</Link>
      </Box>
      <VStack align="stretch" p="4" spacing="1">
        
        <Text fontWeight="bold" fontSize="sm" my="2">Личная информация</Text>
        <Link fontSize="sm">Главная</Link>
        <Link fontSize="sm">Баллы и бонусы</Link>
        <Link fontSize="sm">Способы оплаты</Link>
        <Link fontSize="sm">Баланс средств</Link>
        
        <Text fontWeight="bold" fontSize="sm" my="2">Заказы</Text>
        <Link fontSize="sm">Моя корзина</Link>
        <Link fontSize="sm">Мои заказы</Link>
        <Link fontSize="sm">Мои возвраты</Link>
        <Link fontSize="sm">Купленные товары</Link>
        <Link fontSize="sm">Сообщения</Link>

        <Text fontWeight="bold" fontSize="sm" my="2">Отзывы</Text>
        <Link fontSize="sm">Мои отзывы</Link>
        <Link fontSize="sm">Мои вопросы и ответы</Link>
        <Link fontSize="sm">Вопросы ожидающие ответа</Link>

        <Text fontWeight="bold" fontSize="sm" my="2">Подписки</Text>
        <Link fontSize="sm">Избранное</Link>
        <Link fontSize="sm">Настройки уведомлении</Link>

        <Text fontWeight="bold" fontSize="sm" my="2">Настройки акаунта</Text>
        <Link fontSize="sm">Моя учетная запись</Link>
      </VStack>
    </Box>
  );
};

export default UserProfileSidebar;
