import React, { useState, useRef } from 'react';
import {
    Box,
    Heading,
    Input,
    Text,
    Flex,
    CheckboxGroup,
    Checkbox,
    Button
} from '@chakra-ui/react';
import UserReviews from '../../ProductCommentTabs/UserReviews';

const SellerProfile = ({/*categories*/}) => {
  const categories = [
    "Смартфоны",
    "Аксессуары для смартфонов и телефонов",
    "Фитнес-браслеты",
    "Ремешки для смарт-часов и фитнес-браслетов",
    "Аксессуары для смарт-часов и фитнес барслетов",
    "Мобильные телефоны",
    "Компьютеры",
    "Мониторы",
    "Системные блоки",
    "Моноблоки",
    "Аксессуары",
    "Периферия",
    "Сетевое оборудование",
    "Неттопы и Мини ПК"
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const inputRef = useRef(null);

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Здесь вы можете выполнить какую-то логику с загруженным файлом
    console.log('Загружен файл:', file);
  };
  return (
    
    <Box    p={5} shadow="md" 
            height="max-content"
            flexDirection={"column"}
            width="1160px"
            bgColor="white"
            display="flex"
            ml="30px"
            mt="30px"
            mb="50px"
            borderRadius="28px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
        <Heading  fontWeight="550" fontSize="20px" ml="20px" mb="20px">Информация продавца</Heading>
        <Box ml={"20px"}>
          <Text>ФИО(Укажите как на паспорте)</Text>
          <Input placeholder='Фамилия Имя Отчество' mt={2} w="400px"></Input>

          <Text mt={4}>ИНН</Text>
          <Input placeholder='01 01 01 010 010' mt={2} w="400px"></Input>

          <Text mt={4}>Название вашего магазина</Text>
          <Input placeholder='Ромашка' mb={2} w="400px"></Input>

          <Text mt={4}>Выберите категории товаров в вашем магазине</Text>
          <Button onClick={toggleDropdown} colorScheme='none'color={'blue'} h={'auto'} w={'auto'} mt={2} mb={2} >Показать категории</Button>
          {isOpen && (
          <CheckboxGroup colorScheme="blue" value={selectedCategories} onChange={handleCategoryChange}>
            <Flex maxH={"300px"} flexDirection="column" overflowY={"auto"}>
              {categories.map((category) => (
              <Checkbox key={category} value={category} >{category}</Checkbox>
              ))}
            </Flex>
          </CheckboxGroup>
          )}

          <Text mt={4}>Лого или фото вашего бренда или магазина</Text>
          <Button onClick={handleUploadClick} mt={4}>Загрузить фото</Button>
          <Input
            mt={2}
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <Flex justifyContent="center">
            <Button colorScheme='green' >Отправить данные на проверку</Button>
          </Flex>  
        </Box>

    </Box>
  );
};

export default SellerProfile;