import React from 'react';
// import React, { useState } from 'react';

import { Box, Flex, Text, List, ListItem, Card, CardHeader, CardBody, CardFooter, Heading, IconButton, Image, Avatar } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs'; // For the menu icon
import { BiLike, BiChat, BiShare } from 'react-icons/bi'; // For social media icons

import { useState } from 'react';

function ListInsideStores({ bgColor }) {

    return (
        <Box
            width="1100px"
            ml="50px"
            height="200vh"
            mr="50px"
            bgColor={bgColor}

        >
            <Box width="1100px" height="80vh" display="flex">

                <Card width="280px" height="300px">
                    <CardHeader>
                        <Text>Название магазина</Text>
                    </CardHeader>
                    <CardBody>
                        <Text>Redirect to sellers page</Text>

                        <Image src='https://ir-2.ozone.ru/s3/multimedia-w/wc200/6851094152.jpg' />
                    </CardBody>


                    <CardFooter
                        justify='space-between'
                        flexWrap='wrap'
                        sx={{
                            '& > button': {
                                minW: '1px',
                            },
                        }}
                    >

                    </CardFooter>
                </Card>

            </Box>

        </Box>
    );
}

export default ListInsideStores;