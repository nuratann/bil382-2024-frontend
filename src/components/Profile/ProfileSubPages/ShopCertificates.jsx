
import React from 'react';
import { useState } from 'react';
import { Flex, Box, Input, Heading, Container, List, ListItem, Text, Link, LinkBox, Button, Tab, TabList, TabIndicator, TabPanels, TabPanel, Tabs } from '@chakra-ui/react'
import { BonusIcon } from '../ProfileMainData';

function ShopCertificates() {

    return (
        <Box height="max-content"
            flexDirection={"column"}
            width="1160px"
            bgColor="white"
            display="flex"
            ml="30px"
            mt="30px"
            mb="50px"
            borderRadius="28px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
            <Box w="1080px"
                h="150px"
                backgroundImage="url('https://images.pexels.com/photos/11405712/pexels-photo-11405712.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
                backgroundSize="cover"
                backgroundPosition="center"
                borderRadius={"20px"}
                opacity="0.9"
                ml="40px"
                mt="20px">
                <Flex direction="column" ml="200px">
                    <Text color="white" fontSize={"30px"} fontWeight="500">Приобретите подарочный сертификат</Text>
                </Flex>
                <Button
                    ml="400px"
                    mt="20px"
                    bgColor="white"
                    color="gray.800"
                >Выбрать</Button>
                {/* Her add actula link to that page */}
            </Box>


            <Text mt="20px" ml="40px" fontSize={"24px"} fontWeight="700">Введите кодовое слово или сертификат</Text>

            <Flex direction="row" ml="60px" mt="30px" >
                <Input
                    value={"Введите кодовое слово"}
                    // onChange={handleChange}
                    placeholder="Enter your code"
                    mt="10px"
                    width="350px"
                    opacity="0.6"
                />
                <Button ml="20px" mt="10px" width="150px" height="40px" >Применить</Button>
            </Flex>

            <Box ml='60px' mt='80px' mb="150px">
                <Tabs position='relative' variant='unstyled'>
                    <TabList>
                        <Tab>Ваши купоны
                        </Tab>
                        <Tab>Сертификаты</Tab>
                        <Tab>Кодовые слова</Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                    <TabPanels mt='130px' ml='210px' fontSize={"30px"}>
                        <TabPanel>
                            <p>У вас нет активированных купонов</p>
                        </TabPanel>
                        <TabPanel>
                            <p>У вас нет активированных сертификатов</p>
                        </TabPanel>
                        <TabPanel>
                            <p>У вас нет активированных кодовых слов</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Box>



    )
}

export default ShopCertificates;