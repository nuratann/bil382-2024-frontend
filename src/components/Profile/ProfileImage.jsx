import { Avatar, Flex, Box, Heading, Container, Text, Image, Input, IconButton, Center, Link } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { useState } from 'react';


function ProfileImage() {

    const [profilePicture, setProfilePicture] = useState('https://media.istockphoto.com/id/1289221022/photo/beauty-natural-woman-covering-her-face-with-tropical-leaf.jpg?s=612x612&w=0&k=20&c=2ba7RFBhq5tVWoj6moHVC4k4SfKi_5naTiBoYi3wzJ8=');
    const [showInput, setShowInput] = useState(false);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setProfilePicture(reader.result);
                setShowInput(false);
            };
        }
    };

    const handleAddIconClick = () => {
        setShowInput(true);
    };
    return (
        <Box>
            <Center flexDirection="column" alignContent="center" position="relative">
                <Avatar src={profilePicture} size="xl" mb={4}
                    ml="-10px"
                    mt="30px" />
                <IconButton
                    icon={<AddIcon />}
                    aria-label="Add profile picture"
                    onClick={handleAddIconClick}
                    position="absolute"
                    top={0}
                    mt="60px"
                    ml="-10px"
                    bgColor={"transparent"}
                    color="gray.400"

                    zIndex={1}
                    style={{
                        visibility: showInput ? 'hidden' : 'visible',
                        transition: 'visibility 0.3s',
                        ':hover': {
                            visibility: 'visible',
                        },
                    }}
                />
                {showInput && (
                    <input
                        type="file"
                        accept="image/*"
                        ml="20px"
                        onChange={handleFileInputChange}
                        style={{ display: 'block', margin: 'auto' }}
                    />
                )}
            </Center>
            <Box ml="60px">
                <Link _hover={{ textDecoration: 'none' }}
                    textDecoration="none"
                    color="brand.blue"
                    to='Моя учетная запись'>
                    <Text color="brand.blue">Изменить профиль</Text>
                    {/* Add link destination here */}
                </Link>
            </Box>
        </Box >




    )
}

export default ProfileImage;

