import React from 'react';
import { Flex, Box, Input, Heading, Container, List, ListItem, Text, Link, LinkBox, Button, Image } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink from react-router-dom


function AddCard() {

    return (
        <Box ml="300px" h="600px" w="1000px">
            <Text mt="20px" textAlign={"center"} fontSize={"33px"} fontWeight="700">Привязка банковской карты </Text>

            <Box flexDirection={"row"} display="flex" ml="270px" mt="30px">
                <Box bgColor={"white"} h="200px" w="320px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.4)">
                    <Image src='https://mbank.kg/media/about/image/Frame_851212544.png' ml="110px" maxWidth="100px" maxHeight="50px" />

                    <Text ml="25px" mt="10px" fontSize={"14px"} color={"gray.500"}>Номер карты</Text>
                    <Input
                        fontSize={"14px"}
                        placeholder='Введите номер карты'
                        mt="5px"
                        ml="20px"
                        width="280px"
                        opacity="0.6"
                    />

                    <Text ml="25px" mt="20px" fontSize={"12px"} color={"gray.500"}>
                        Действует до</Text>

                    <Flex flexDirection={"row"} gap="3" ml="20px" mt="10px">
                        <Input
                            fontSize={"13px"}
                            placeholder='MM'
                            width="60px"
                            h="30px"

                        />
                        <Text>/</Text>

                        <Input
                            fontSize={"13px"}
                            value='ГГ'
                            width="60px"
                            h="30px"


                        />
                    </Flex>
                </Box>

                <Box bgColor={"gray.100"} h="200px" w="160px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
                    <Box width="160px" h="40px" bgColor="gray.300"></Box>

                    <Text ml="25px" mt="15px" fontSize={"14px"} color={"gray.500"}>CVV/CVC</Text>

                    <Input
                        fontSize={"13px"}
                        placeholder='000'
                        width="60px"
                        h="30px"
                        bgColor="white"
                        ml="20px"
                        mt="20px"
                    />

                    <Text ml="25px" mt="15px" fontSize={"12px"} color={"gray.500"}>три цифры
                        с обратной стороны карты</Text>

                </Box>

            </Box>

            <Box ml="270px" mt="30px" w="460px" >
                <Text fontSize={"12px"} color={"gray.500"}>Нажимая на кнопку «Привязать», вы соглашаетесь с условиями привязки карты</Text>


                <RouterLink to="/add_card" >
                    <Button color="gray.600" mt="40px" width="485px" h="60px">Привязать</Button>
                </RouterLink>
            </Box>

        </Box>
    )
}
export default AddCard;