import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Flex,
  Select,
} from '@chakra-ui/react';

function UserProfileEdit() {
  // Состояние для хранения данных пользователя
  const [profileData, setProfileData] = useState({
    name: 'Nurasil',
    birthDate: '1999-05-01',
    gender: 'male' ,
    phone: '+77471990501',
    email: 'nurasyl1999j@gmail.com',
    
    // Добавьте другие поля профиля по необходимости
  });

  // Обработчик изменений в полях ввода
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь код для отправки данных на сервер или обновления внутри приложения
    console.log(profileData);
  };

  return (
    <Box w="1150px" h={"520px"} mt={"30px"} p={5}  borderRadius={"20px"} boxShadow="0 2px 8px rgba(0, 0, 0, 0.08)" >
      <Heading as="h3" size="lg" textAlign="center" mb={14} >
        Редактирование профиля
      </Heading>
      <form onSubmit={handleSubmit}>
      <Flex mb={"100px"}>
      <Stack spacing={3} mr={"100px"}>
        <FormControl id="name-control">
          <FormLabel color="gray.400">ФИО</FormLabel>
          <Input
            w={"400px"} 
            type="text"
            placeholder="Введите ваше имя"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="birth-date-control">
          <FormLabel color="gray.400">Дата рождения</FormLabel>
          <Input
            w={"400px"} 
            type="date"
            name="birthDate"
            value={profileData.birthDate}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="gender-control">
          <FormLabel color="gray.400">Пол</FormLabel>
          <Select
            w={"400px"} 
            placeholder="Выберите пол"
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
          >
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </Select>
        </FormControl>
      </Stack>
      <Stack spacing={3}>
        <FormControl id="phone-control">
          <FormLabel color="gray.400">Телефон</FormLabel>
          <Input 
            w={"400px"} 
            type="tel" 
            placeholder="Введите ваш номер телефона"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email-control">
          <FormLabel color="gray.400">Электронная почта</FormLabel>
          <Input
            w={"400px"}  
            type="email" 
            placeholder="Введите ваш email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        </FormControl>
      </Stack>
    </Flex>
        
        <Button type="submit" colorScheme="blue">Сохранить изменения</Button>
       
      </form>
    </Box>
  );
}

export default UserProfileEdit;
