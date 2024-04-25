
import React from 'react';
import { useState } from 'react';
import { useContext, createContext } from 'react';
import { Flex, Box, Input, Heading, Container, List, ListItem, Text, Link, LinkBox, Button } from '@chakra-ui/react'
import { BonusIcon } from '../ProfileMainData';
import { Link as RouterLink } from 'react-router-dom';
// import { CardDataContext } from '../../../pages/ProfilePage/AddCardPage/CardDataContext';


function PayMethods() {

    // const { cardData } = useContext(CardDataContext);

    return (

        <Box flexDirection={"row"} display={"flex"}>
            <Box height="max-content"
                flexDirection={"column"}
                width="450px"
                bgColor="white"
                display="flex"
                ml="30px"
                mt="30px"
                mb="50px"
                borderRadius="28px"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">

                <Text mt="20px" ml="40px" fontSize={"24px"} fontWeight="700">У вас нет сохраненных карт
                </Text>

                <RouterLink to="/add_card" >
                    <Button ml="30px" color="brand.blue" mt="40px" mb="60px" width="400px" h="60px"> Добавить карту</Button>
                </RouterLink>

            </Box>


            {/* <Box height="210px"
                flexDirection={"column"}
                width="450px"
                bgColor="white"
                display="flex"
                ml="30px"
                mt="30px"
                mb="50px"
                borderRadius="28px"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">

                <Text mt="20px" ml="40px" fontSize={"24px"} fontWeight="700">У вас нет сохраненных карт
                </Text>

                <Text fontSize="lg">Card Information:</Text>
                <Text>Card Number: {cardData.cardNumber}</Text>
                <Text>Expiry Date: {cardData.expi}</Text>
                <Text>CVV: {cardData.cvv}</Text>



            </Box> */}
        </Box>


    )
}

export default PayMethods;