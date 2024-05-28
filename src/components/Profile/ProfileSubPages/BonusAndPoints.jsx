
import React from 'react';
import { useState } from 'react';
import { Flex, Box, Input, Heading, Container, List, ListItem, Text, Link, LinkBox, Button, Tab, TabList, TabIndicator, TabPanels, TabPanel, Tabs } from '@chakra-ui/react'
import { BonusIcon } from '../ProfileMainData';

function Bonuses() {

    return (
        <>
            <Text mt="20px" ml="40px" fontSize={"24px"} fontWeight="700">Баллы и бонусы
            </Text>


            <Box display={"flex"}>
                <Box height="100px" width="560px" ml="40px" mt="20px" bg="white" borderRadius={"20px"} boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
                    <Link >
                        <Flex direction="column" ml="30px" mt="25px" >
                            <Text fontSize={"15px"} fontWeight={"600"} textDecoration={"none"}>Баллы от Buyers </Text>
                            <Text fontSize={"25px"} fontWeight={"600"} ml="40px">0</Text>

                        </Flex>
                    </Link>
                </Box>


            </Box >

            <Box height="120px" width="560px" ml="40px" mt="40px" bg="white" borderRadius={"20px"} boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
                <Link >
                    <Flex direction="column" ml="20px" mt="25px" >
                        <Text fontSize={"15px"} fontWeight={"600"} textDecoration={"none"}>Бонусы продавцов </Text>
                        <Text fontSize={"25px"} fontWeight={"600"} ml="50px">0</Text>
                    </Flex>
                </Link>
            </Box>

            <Text mt="20px" ml="40px" fontSize={"24px"} fontWeight="700">История</Text>
            <Box ml="40px" mt="40px" mb="120px">
                <Tabs size='md' variant='enclosed'>
                    <TabList>
                        <Tab>Бонусы</Tab>
                        <Tab>Баллы</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>У вас пока нет истории с бонусами
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <p>У вас пока нет истории с баллами
                            </p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </>
    )
}

export default Bonuses;