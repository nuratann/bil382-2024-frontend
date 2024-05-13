import React, { useState } from 'react';
import {
    Box, Input, Button, Select, Text, Divider,
    Flex
} from '@chakra-ui/react';
import ProfileImage from './ProfileImage';
import useUserStore from '../../stores/useUserStore';
import { Link } from 'react-router-dom';

function PersonalAccount() {
    const userState = useUserStore((state) => state.user);

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
        <Box height="800px" width="1160px" bgColor="white" display="flex" flexDirection="column" ml="30px" mt="30px" mb="50px" borderRadius="28px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
            <Flex justifyContent={"space-between"}>
                <Text fontWeight="550" fontSize="18px" ml="30px" mt="20px">Личные данные</Text>
                <Link to='/profile?init=Мои заказы'>Стать продавцом</Link>
            </Flex>
            
            
            <Divider />


            <Box width="800px" h="max-content" ml="50px">
                <ProfileImage />
                <Box display="flex" flexDirection="row" ml="30px" mt="20px">
                    <Box flex="1" mr="10px">
                        <Input
                            placeholder="Имя"
                            value={userState.firstName}
                            onChange={(e) => setName(e.target.value)}
                            mb={4}
                            width="300px"
                        />
                    </Box>
                    <Box flex="1" ml="10px">
                        <Input
                            placeholder="Фамилия"
                            value={userState.lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            mb={4}
                            width="300px"
                        />
                    </Box>
                </Box>

                <Box display="flex" flexDirection="row" ml="30px" mt="20px">
                    
                    <Box flex="1" ml="10px">
                        <Input
                            type="date"
                            placeholder="Дата рождения"
                            value={userState.birthDay}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            mb={4}
                            width="300px"
                        />
                    </Box>
                </Box>

                <Box display="flex" flexDirection="row" ml="30px" mt="20px">
                    <Box flex="1" mr="10px">
                        <Select
                            placeholder="Пол"
                            value={userState.gender}
                            onChange={(e) => setGender(e.target.value)}
                            mb={4}
                            width="300px"
                        >
                            <option value="male">Мужчина</option>
                            <option value="female">Женщина</option>
                            <option value="female">Military Apache Helicopter</option>
                        </Select>
                    </Box>
                    <Box flex="1" ml="10px">
                        <Button colorScheme="blue" onClick={handleSubmit}>Сохранить</Button>
                    </Box>
                </Box>
            </Box>
            <Divider mt="50px" />


            <Text fontWeight="550" fontSize="18px" ml="30px" mt="20px">Учеттные данные</Text>
            <Box flexDirection={"row"} display={"flex"} ml="40px">
                <Box mt="30px" >
                    <Box ml="10px" >
                        <Input
                            placeholder="Email"
                            value={userState.email}
                            onChange={(e) => setEmail(e.target.value)}
                            mb={4}
                            width="250px"
                        />
                    </Box>
                </Box>

                <Box display="flex" flexDirection="row" ml="30px" mt="30px">
                    <Box mr="10px">
                        <Input
                            placeholder="Phone"
                            value={userState.phone}
                            onChange={(e) => setPhone(e.target.value)}
                            mb={4}
                            width="250px"
                        />
                    </Box>
                    <Box ml="10px">
                        <Button colorScheme="blue" onClick={handleSubmit}>Сохранить</Button>
                    </Box>
                </Box>
            </Box>
            
        </Box>

    )
}

export default PersonalAccount;
