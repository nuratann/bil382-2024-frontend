
import React from 'react';
import { useState } from 'react';
import { Flex, Box, Input, Heading, Container, List, ListItem, Text, Link, LinkBox, Button } from '@chakra-ui/react'
import { BonusIcon } from '../ProfileMainData';

function ProfileMainSub() {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <Box 
                maxW={'90%'} // Set width of the box
                h="170px" // Set height of the box
                backgroundImage="url('https://images.pexels.com/photos/4391607/pexels-photo-4391607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" // Set the background image
                backgroundSize="cover" // Make sure the image covers the entire box
                backgroundPosition="center" // Center the image
                borderRadius={"20px"}
                opacity="0.7"
                ml="5%"
                mt="5%">
                <Flex direction="column" ml="200px">
                    <Text color="navy" fontSize={"40px"} fontWeight="600">Радуйте близких</Text>
                    <Text color="navy" fontSize={"28px"} fontWeight="500"> Подарите сертификат на покупку</Text>
                </Flex>
                <Button
                    ml="200px"
                    mt="10px"
                    bgColor="brand.blue"
                    color="white"
                >Выбрать</Button>
                {/* Her add actula link to that page */}
            </Box>

            <Text mt="20px" ml="40px" fontSize={"20px"} fontWeight="600">Мои данные</Text>
            <Box flexDirection={'row'} mb="50px">
                <Box flexDirection={"row"} display={"flex"}>
                    <Box height="120px" width="240px" ml="40px" mt="20px" bg="white" borderRadius={"20px"} boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)">
                        <Link >
                            <Flex direction="column" ml="50px" mt="30px" >
                                <Text fontSize={"15px"} fontWeight={"600"} textDecoration={"none"}>Баллы и бонусы </Text>
                                <BonusIcon />
                            </Flex>
                        </Link>
                    </Box>

                    <Box flexDirection={"row"} display={"flex"}>
                        <Box height="120px" width="240px" ml="40px" mt="20px" bg="white" borderRadius={"20px"} boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)">
                            <Link >
                                <Flex direction="column" ml="50px" mt="30px" >
                                    <Text fontSize={"15px"} fontWeight={"600"} textDecoration={"none"}>Баланс средств </Text>
                                    <BonusIcon />
                                </Flex>
                            </Link>
                        </Box>
                    </Box>
                </Box>


                <Text mt="80px" ml="40px" fontSize={"20px"} fontWeight="600">Сертификаты</Text>
                <Box height="140px" width="530px" ml="40px" mt="20px" bg="white" borderRadius={"20px"} boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" flexDirection={"column"}>
                    <Flex direction="column" ml="60px" mt="30px" >
                        <Text fontSize={"15px"} fontWeight={"600"} textDecoration={"none"}>Использовать промокод </Text>
                        <Input
                            value={"Введите промокод"}
                            onChange={handleChange}
                            placeholder="Enter your code"
                            mt="10px"
                            width="350px"
                            opacity="0.6"
                        />
                        <Button mt="10px" width="350px" height="35px" >Применить</Button>
                    </Flex>
                </Box>

                {/* ADD HERE  link to the pages  */}
                <Text mt="50px" ml="40px" fontSize={"20px"} fontWeight="600">Сервис и помощь</Text>
                <Box flexDirection={'row'}>
                    <Box display={"flex"}>
                        <Box height="70px" width="260px" ml="40px" mt="20px" bg="white" borderRadius={"20px"} boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)">
                            <Link >
                                <Flex direction="column" ml="30px" mt="25px" >
                                    <Text fontSize={"15px"} fontWeight={"600"} textDecoration={"none"}>Условия оплаты </Text>
                                </Flex>
                            </Link>
                        </Box>

                        <Box display={"flex"}>
                            <Box height="70px" width="260px" ml="40px" mt="20px" bg="white" borderRadius={"20px"} boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)">
                                <Link >
                                    <Flex direction="column" ml="20px" mt="25px" >
                                        <Text fontSize={"15px"} fontWeight={"600"} textDecoration={"none"}>Условия возврата </Text>
                                    </Flex>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box >




            </Box >

        </>

    )
}

export default ProfileMainSub;