import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading, Flex, Select, Button, Text, Image, Input, Textarea,
  Checkbox,
} from '@chakra-ui/react';
import { CiSquarePlus } from "react-icons/ci";
import { MdAddAPhoto } from "react-icons/md";
import { FaTrash } from 'react-icons/fa';

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