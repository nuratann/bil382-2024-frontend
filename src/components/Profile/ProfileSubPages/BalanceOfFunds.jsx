
import React from 'react';
import { useState } from 'react';
import { Flex, Box, Input, Heading, Container, List, ListItem, Text, Link, LinkBox, Button } from '@chakra-ui/react'
import { BonusIcon } from '../ProfileMainData';

function BalanceF() {

    return (
        <Box height="1000px"
            flexDirection={"column"}
            width="1160px"
            bgColor="white"
            display="flex"
            ml="30px"
            mt="30px"
            mb="50px"
            borderRadius="28px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
            <Text>Balance of funds</Text>
        </Box>
    )
}

export default BalanceF;