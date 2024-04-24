import React from 'react';
// import React, { useState } from 'react';
import { Box, Flex, Text, List, ListItem, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import ListInsideTovar from './ListInsideTovar';
import ListInsideCollections from './ListInsideCollections';
import ListInsideStores from './ListInsideStores';
import { TovarsIcon } from './FavoritesData';
import { MagazineIcon } from './FavoritesData';
import { CollectionIcon } from './FavoritesData';



function FavoritesFunction() {


    const [selectedLine, setSelectedLine] = useState("Товары и списки");

    const handleLineClick = (line) => {
        setSelectedLine(line);
    };

    return (
        <Box height={'330vh'} display="flex" >
            {/* adjust height so every componenet will have max-content height dynamically */}
            <Box
                width="240px"
                flexDirection={'row'}
                display='flex'
                ml='50px'
                marginBottom="40px"
                marginTop="40px"
                height="360vh">

                <Box display="flex" justifyContent="space-between">
                    <Box
                        height="max-content"
                        width="230px"
                        flexDirection={'row'}
                        display='flex'

                    >
                        <List spacing={3}>
                            <ListItem
                                cursor="pointer"
                                onClick={() => handleLineClick("Товары и списки")}
                                style={{ backgroundColor: selectedLine === "Товары и списки" ? "rgb(245,245,245)" : "transparent", borderRadius: "13px", padding: "8px" }}

                            >        <Flex align="center" justify="start" cursor="pointer" gap="4" _hover={{ color: "blue.500" }}>
                                    <Icon as={TovarsIcon} boxSize={6} color="blue.500" mr={2} />
                                    <Text >Товары и списки</Text>
                                </Flex>
                            </ListItem>
                            <ListItem
                                cursor="pointer"
                                onClick={() => handleLineClick("Магазины")}
                                style={{ backgroundColor: selectedLine === "Магазины" ? "rgb(245,245,245)" : "transparent", borderRadius: "13px", padding: "8px" }}
                            >
                                <Flex align="center" justify="start" cursor="pointer" gap="4" _hover={{ color: "blue.500" }}>
                                    <Icon as={MagazineIcon} boxSize={6} color="blue.500" mr={2} />
                                    <Text >Магазины</Text>
                                </Flex>

                            </ListItem>
                            <ListItem
                                cursor="pointer"
                                onClick={() => handleLineClick("Коллекция")}
                                style={{ backgroundColor: selectedLine === "Коллекция" ? "rgb(245,245,245)" : "transparent", borderRadius: "13px", padding: "8px" }}

                            >
                                <Flex align="center" justify="start" cursor="pointer" gap="4" _hover={{ color: "blue.500" }}>
                                    <Icon as={CollectionIcon} boxSize={6} color="blue.500" mr={2} />
                                    <Text >Коллекция</Text>
                                </Flex>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box>
                    {selectedLine === "Товары и списки" && <ListInsideTovar bgColor="white" />}
                    {selectedLine === "Магазины" && <ListInsideStores bgColor="white" />}
                    {selectedLine === "Коллекция" && <ListInsideCollections bgColor="white" />}
                </Box>
            </Box>

        </Box>
    );
}

export default FavoritesFunction;