import { Avatar, Flex, Box, Heading, Container, Text, Icon, Input, IconButton, Center, Link as ChakraLink, Button, VStack } from '@chakra-ui/react'
import { MdAddAPhoto } from 'react-icons/md';
import { AddIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useUserStore from '../../stores/useUserStore';
import React from 'react';



function ProfileImage() {
    const userState = useUserStore(state => state)
    const fullName = userState.fullName()
    const image = userState.user.avatarImg
    const inputRef = React.useRef();
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            userState.updateUser({...userState.user,avatarImg:reader.result})
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleImageClick = () => {
      inputRef.current.click();
    };
    return (
        <VStack justify={'center'} mt={6}>
            <Box textAlign="center">
                <Box
                    as="button"
                    onClick={handleImageClick}
                    p={3}
                    borderRadius="full"
                    display="inline-block"
                    cursor="pointer"
                >
                    <Box position={'relative'}>
                        <Avatar
                            src={image}
                            objectFit="cover"
                            boxSize={24}
                        />
                        <Center
                            borderRadius={'full'}
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            opacity={0}
                            _hover={{
                                opacity: 1,
                            }}
                            backgroundColor="rgba(0, 0, 0, 0.2)"
                            color="white"
                        >
                            <Icon as={MdAddAPhoto} boxSize={10} />
                        </Center>
                    </Box>
                </Box>
                <Input
                    type="file"
                    ref={inputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    display="none"
                />
            </Box>
            <Box textAlign={'center'}>
                <Text fontSize={24}>{fullName}</Text>
            </Box>
        </VStack>




    )
}

export default ProfileImage;

