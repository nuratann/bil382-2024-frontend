import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading, Flex, Select, Button, Text, Image, Input, Textarea,
  Checkbox,
} from '@chakra-ui/react';
import { CiSquarePlus } from "react-icons/ci";
import { MdAddAPhoto } from "react-icons/md";
import { FaTrash } from 'react-icons/fa';


const exampleProduct = {
    "id": "2f3e4d5c-6e7d-8c9b-0f1a",
    "category": {"id": "123", "name": "Electronics"},
    "isFavorite":false,
    "price":"1500",
    "oldPrice":"1900",
    "weight":0.3,
    "sellerId": "1d2e3f4g-5h6i-7j8k-9l0m",
    "mediaLinks": "[{\"type\":\"img\",\"url\":\"https://telefon.kg/image/cache/catalog/new/Phones/Apple/Iphone%2011%20Pro%20Max/green/1-500x400.jpg\"},{\"type\":\"img\",\"url\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2-ePAniFthAJaQQ4gn6hdPISgAS9MnDfeKAlYLIc6A&s\"},{\"type\":\"img\",\"url\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AjnePDTNwTvZ8Lzy9Y73DVIA-2qxBS2vP62p7LDG5w&s\"}]",
    "title": "Apple iPhone 11 Pro Max - 256GB, Серый космос",
    "description": "<p>Apple iPhone 11 Pro Max - один из самых мощных и технологически продвинутых смартфонов на рынке. С 6,5-дюймовым Super Retina XDR дисплеем, трехкамерной системой и процессором A13 Bionic, этот телефон идеально подходит как для профессионалов, так и для обычных пользователей. Особенности включают улучшенную систему Face ID, ночной режим фотографии и долгое время автономной работы.</p>",
    "rating": 4.8,
    "orders": 500,
    "reviews": [
        {
            "id": "rev1",
            "userId": "user123",
            "orderId": "ord1",
            "type":"review",
            "grade": 5,
            "options": "{\"color\":\"Серый космос\",\"storage\":\"256GB\"}",
            "text": "Превосходный телефон! Камера и экран просто великолепны.",
            "images": "[\"http://example.com/review_image1.jpg\"]",
            "reviewDate": "2024-05-01T12:00:00Z",
            "updatedDate": "2024-05-01T12:00:00Z",
            "likes": 10,
            "dislikes": 1,
            "comments": [
                {
                    "id": "com1",
                    "userId": "user234",
                    "productId": "2f3e4d5c-6e7d-8c9b-0f1a",
                    "type": "comment",
                    "text": "Полностью согласен!",
                    "likes": 5,
                    "dislikes": 0,
                    "commentDate": "2024-05-02T12:00:00Z",
                    "updatedDate": "2024-05-02T12:00:00Z",
                    "comments":[]
                }
            ]
        },
        {
            "id": "rev2",
            "userId": "user456",
            "orderId": "ord2",
            "type":"review",
            "grade": 4,
            "options": "{\"color\":\"Серый космос\",\"storage\":\"256GB\"}",
            "text": "Отличный телефон, но аккумулятор мог бы быть лучше.",
            "images": "[]",
            "reviewDate": "2024-05-03T12:00:00Z",
            "updatedDate": "2024-05-03T12:00:00Z",
            "likes": 7,
            "dislikes": 2,
            "comments": []
        }
    ],
    "options": "[{\"title\":\"цвет\",\"value\":[{\"title\":\"серый космос\",\"icon\":\"http://example.com/gray_icon.jpg\"},{\"title\":\"золотой\",\"icon\":\"http://example.com/gold_icon.jpg\"},{\"title\":\"зеленый\",\"icon\":\"http://example.com/green_icon.jpg\"}]},{\"title\":\"объем памяти\",\"value\":[{\"title\":\"64GB\",\"icon\":\"\"},{\"title\":\"256GB\",\"icon\":\"\"},{\"title\":\"512GB\",\"icon\":\"\"}]},{\"title\":\"план защиты\",\"value\":[{\"title\":\"1 год\",\"icon\":\"\"},{\"title\":\"2 года\",\"icon\":\"\"},{\"title\":\"3 года\",\"icon\":\"\"}]}]",
    "specs": "[{\"title\":\"Процессор\",\"value\":\"A13 Bionic\"},{\"title\":\"Дисплей\",\"value\":\"6.5 дюймов Super Retina XDR\"},{\"title\":\"Камера\",\"value\":\"Тройная камера 12 МП\"},{\"title\":\"Батарея\",\"value\":\"3969 мАч\"},{\"title\":\"Операционная система\",\"value\":\"iOS 14\"}]",
    "stock": 50,
    "promotions": "[{\"type\":\"points for review\",\"title\":\"баллы за отзыв\",\"value\":\"500\"}]",
    "deliveryDays": 3,
    "createdDate": "2024-05-18",
    "updatedDate": "2024-05-18"
}

const AddProduct = () => {
    const [photos, setPhotos] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotos([...photos, reader.result]);
        };
        reader.readAsDataURL(file);
    };
    const [inputFields, setInputFields] = useState([{ value: '' }]);

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ value: '' });
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index].value = event.target.value;
        setInputFields(values);
    };

    const handleRemoveFields = (indexToRemove) => {
        const newFields = inputFields.filter((_, index) => index !== indexToRemove);
        setInputFields(newFields);
    };

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
      
    return (
        <Box p={5} shadow="md" 
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
            <Heading  fontWeight="550" fontSize="20px" ml="20px" mb="20px">Добавить товар</Heading>
            
            <Text fontWeight={"bold"} mb={4}>Добавьте фото вашего товара *</Text>
            <Flex>
            {photos.map((photo, index) => (
                <Image
                    key={index}
                    src={photo}
                    alt={`Uploaded ${index + 1}`}
                    style={{ width: '150px', height: '150px', marginRight: '10px' }}
                    borderRadius={"6px"}
                />
            ))}
            <Input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                id="file-upload"
            />
            <label htmlFor="file-upload">
                <Button
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    w={'150px'}
                    h={'150px'}
                    as="span"
                >
                    <MdAddAPhoto />
                    <Text>Добавить фото</Text>
                </Button>
            </label>
            </Flex>

            <Text fontWeight={"bold"} mb={4} mt={5}>Добавтье описание вашего товара *</Text>
            <Textarea w={"700px"} h={"auto"} resize={"none"}></Textarea>

            <Text fontWeight={"bold"} mb={4} mt={5}>Добавьте характеристики вашего товара *</Text>
            
            {inputFields.map((inputField, index) => (
                <Flex key={index} flexDirection={"column"} mb={4}>
                    <Flex>
                        <Input
                            value={inputField.value}
                            onChange={(event) => handleInputChange(index, event)}
                            placeholder={`Название характеристики ${index + 1}:  характеристика`}
                            w={"700px"}
                        />
                        {index === inputFields.length - 1 && index !== 0 && (
                            <Button  onClick={() => handleRemoveFields(index)} ml={4} _hover={{color: "red"}}>
                                <FaTrash/>
                            </Button>
                        )}
                    </Flex>
                    {index === inputFields.length - 1 && (
                        <Button w={"200px"} onClick={handleAddFields} mt={4}>
                        <CiSquarePlus style={{ fontSize: '30px', margin: "0 8px 0 0" }}/>
                        Добавить еще
                    </Button>
                    )}
                </Flex>
            ))}

            <Text fontWeight={"bold"} mb={3}>Выберите категорию вашего товара *</Text>
            <Select
                placeholder="Выберите категорию"
                w={"500px"}
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </Select>
            
            <Text fontWeight={"bold"} mt={4} mb={3}>Укажите цену вашего товара</Text>
            <Flex>
                <Input type='number' w={"500px"} placeholder='59 999'></Input>
                <Select  w="auto" ml={2}>
                <option value="сом">сом</option>
                <option value="тенге">тенге</option>
                <option value="рубли">рубли</option>
                <option value="доллары">доллары</option>
            </Select>
            </Flex>
            <Flex justifyContent={"center"}>
                <Button colorScheme='green' mt={8} w={"300px"}>Добавить товар</Button>
            </Flex>
        </Box>
    );
};

export default AddProduct;