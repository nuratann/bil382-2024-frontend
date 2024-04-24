
import React from 'react';
import { useState } from 'react';
import { Flex, Box, Input, Heading, Container, List, ListItem, Text, Link, LinkBox, Button } from '@chakra-ui/react'
import { BonusIcon } from '../ProfileMainData';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink from react-router-dom


function PayMethods() {

    return (
        <Box height="200px"
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
                <Button ml="30px" color="brand.blue" mt="40px" width="400px" h="60px"> Добавить карту</Button>
            </RouterLink>

            {/* write a redirect back to the profile subpage PayMethods,  also read from the input that was made her */}
        </Box>
    )
}

export default PayMethods;