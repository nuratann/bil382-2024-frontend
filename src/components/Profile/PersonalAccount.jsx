import React, { useState } from 'react';
import {
    Box, Input, Button, Select, Text, Divider,
    Flex
} from '@chakra-ui/react';
import ProfileImage from './ProfileImage';
import useUserStore from '../../stores/useUserStore';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import RegForm from '../RegAndAuthModal/RegForm';

function PersonalAccount() {
    const userState = useUserStore((state) => state.user);
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!firstName || !lastName || !dateOfBirth || !gender || !email || !phone) {
            alert('Please fill out all required fields');
            return;
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            gender: gender,
            email: email,
            phone: phone
        };
    };

    return (
        <>
            <Flex justifyContent={"space-between"} p={4}>
                <Text fontWeight="550" fontSize="18px" ml="30px">Личные данные</Text>
                <Button onClick={() => navigate('/profile/seller-profile')} bg={"brand.blue"} color="white" _hover={{ bg: "brand.hoverblue" }}>Стать продавцом</Button>
            </Flex>
            
            
            <Divider />

            <Flex justify={"center"}>
            <Box w={'80%'} h="max-content" mb={6}>
                <Box mb={8}>
                    <ProfileImage />
                </Box>
                
                <RegForm type='update'/>
            </Box>
            </Flex>
            </>

    )
}

export default PersonalAccount;
