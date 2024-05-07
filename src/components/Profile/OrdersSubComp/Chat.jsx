import React, { useState } from 'react';
import {
    Flex, Box, Input, Heading, Container, List, ListItem, Text, Link, LinkBox, Card,
    CardBody,
    Image,
    Stack,
    Divider,
    CardFooter,
    ButtonGroup,
    Button
} from '@chakra-ui/react';
import { ChatIcon } from '../ProfileMainData';

function Chat() {
    const [activeChat, setActiveChat] = useState(null);

    const handleChatClick = (chatId) => {
        setActiveChat(chatId);
    };

    return (
        <Box height="max-content" flexDirection="row" width="1160px" bgColor="white" display="flex" ml="30px" mt="30px" mb="50px" borderRadius="28px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">

            <Box h="600px" width="340px" bgColor="white" mt="20px" ml="20px">
                <Text fontWeight="550" fontSize="20px" ml="30px" mt="20px">Сообщения</Text>

                <List>
                    <ListItem onClick={() => handleChatClick('chat1')} >
                        <Box h="70px" width="310px" bgColor={"white"} mt="20px" ml="10px" borderRadius="20px"
                            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                        >
                            <Flex flexDirection={"row"}>
                                <Text fontWeight="500" fontSize={"16px"} ml="20px" mt="10px" color={"gray.700"} >Служба поддержки</Text>
                                <Text fontWeight="500" fontSize={"13px"} ml="70px" mt="10px" color={"gray.700"} >14:28</Text>
                            </Flex>

                            <Flex ml="20px" mt="5px">
                                <ChatIcon />
                                <Text fontWeight="500" fontSize={"14px"} color={"gray.500"} >Сообщение</Text>
                            </Flex>
                        </Box>

                    </ListItem>

                    <ListItem onClick={() => handleChatClick('chat2')}>
                        <Box h="70px" width="310px" bgColor={"white"} mt="20px" ml="10px" borderRadius="20px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
                            <Flex flexDirection={"row"}>
                                <Text fontWeight="500" fontSize={"16px"} ml="20px" mt="10px" color={"gray.700"} >Продавец Buyers</Text>
                                <Text fontWeight="500" fontSize={"13px"} ml="90px" mt="10px" color={"gray.700"} >14:38</Text>
                            </Flex>
                            <Flex ml="20px" mt="5px">
                                <ChatIcon />
                                <Text fontWeight="500" fontSize={"14px"} color={"gray.500"} >Сообщение</Text>
                            </Flex>
                        </Box>
                    </ListItem>
                </List>
                {/* </Box> */}
            </Box>

            <Box>
                {activeChat === 'chat1' && <Chat1 />}
                {activeChat === 'chat2' && <Chat2 />}
                {activeChat === null && <DefaultComponent />}
            </Box>
        </Box>
    );
}

export default Chat;



function DefaultComponent() {

    return (
        <Box h="600px" width="750px" bgColor="gray.100" borderRadius="28px" ml="30px" mt="10px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" alignContent={"center"} >
            <Box h="30px" width="max-content" bgColor="white" opacity="0.7" borderRadius="28px" ml="250px" mr="10px" mt="10px" p="10px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" alignContent={"center"}
            >
                <Text ml="10px">Выберите чат для общения</Text>
            </Box>

        </Box>

    )
}



function Chat1() {

    return (
        <Box h="600px" width="750px" bgColor="gray.100" borderRadius="28px" ml="30px" mt="10px" mb="30px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" overflowY="auto"

            css={{
                "&::-webkit-scrollbar": {
                    width: "6px",
                    borderRadius: "20px",

                },
                "&::-webkit-scrollbar-track": {
                    background: "gray.300"
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "#707070"
                }
            }}
        >

            <Box h="max-content" ml="30px" mb="30px"
            >
                <Card maxW='sm' mt="20px">
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Living room Sofa</Heading>
                            <Text>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Купить
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>


                <Box h="50px" width="max-content" bgColor="white" borderRadius="28px" ml="10px" mt="10px" p="10px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" alignContent={"center"}>
                    <Text ml="10px">Добрый день! Отправили товар</Text>
                </Box>

                <Box h="50px" width="250px" bgColor="white" borderRadius="28px" ml="450px" mt="10px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" alignContent={"center"}>
                    <Text ml="30px">Здравствуйте, спасибо</Text>
                </Box>


            </Box>
        </Box>

    )
}


function Chat2() {

    return (
        <Box h="600px" width="750px" bgColor="gray.100" borderRadius="28px" ml="30px" mt="10px" mb="30px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" overflowY="auto"
            css={{
                "&::-webkit-scrollbar": {
                    width: "6px",
                    borderRadius: "20px",

                },
                "&::-webkit-scrollbar-track": {
                    background: "gray.300"
                },
                "&::-webkit-scrollbar-thumb": {
                    background: "#707070"
                }
            }}
        >

            <Box h="max-content" ml="30px" mb="30px">
                <Card maxW='sm' mt="20px">
                    <CardBody>
                        <Image
                            src='https://media.decorateme.com/article2images/87f1a/miagkaia-mebel-kriterii-vybora.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Living room Sofa</Heading>
                            <Text>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Купить
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>


                <Box h="50px" width="max-content" bgColor="white" borderRadius="28px" ml="10px" mt="10px" p="10px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" alignContent={"center"}>
                    <Text ml="10px">Добрый день! Отправили товар</Text>
                </Box>

                <Box h="50px" width="250px" bgColor="white" borderRadius="28px" ml="450px" mt="10px" boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)" alignContent={"center"}>
                    <Text ml="30px">Здравствуйте, спасибо</Text>
                </Box>


            </Box>
        </Box>

    )
}
