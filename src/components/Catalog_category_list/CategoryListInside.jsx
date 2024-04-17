import React from 'react';
import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";

function CategoryListInside({ categoryName, items }) {
    return (
        <Box color="#001a34" fontFamily="GTEestiPro, arial, sans-serif" width="600px" p="20px" height="max-content" marginLeft="80px">
            <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
                <Text fontSize="28px" fontWeight="550" color="black" mb="8px" marginLeft="60px">
                    {categoryName}
                </Text>
                <Text fontSize="14px" fontWeight="400" color="rgba(0, 26, 52, 0.6)" mb="15px">
                    {items.reduce((total, item) => total + item.subcategories.length, 0)} items
                </Text>
            </div>
            <Flex flexDirection="row" gap="20px" width="100%">
                {items.map((item, index) => (
                    <Flex key={index} flexDirection="column" gap="15px" marginLeft="50px" display="grid" gridTemplateColumns="repeat(4, auto)" gridTemplateRows="repeat(3, 1fr)" >
                        {item.subcategories.map((subcategory, subIndex) => (
                            <Flex key={subIndex} flexDirection="column" alignItems="start" p="15px" width="280px">

                                <Text
                                    fontSize="17px"
                                    display="flex"
                                    alignItems="center"
                                    fontWeight="700"
                                    letterSpacing=".3px"
                                    href={subcategory.link}
                                    varinat="link"

                                >
                                    {subcategory.name}
                                </Text>

                                {subcategory.links.map((link, linkIndex) => (
                                    <Link
                                        fontSize="14px"
                                        href={subcategory.subLink}
                                        isExternal
                                        fontStyle="500"
                                        p="4px 0"
                                        color="#708090"
                                        _hover={{
                                            color: "black",
                                            bg: "transparent"
                                        }}

                                    >
                                        {link.text}
                                    </Link>
                                ))
                                }
                                <Button fontSize="14px"
                                    variant="link"
                                    color="blue.400"
                                    _hover={{ color: "black" }}
                                    bg="transparent" p="2px 0"
                                    fontWeight="400"
                                    borderRadius="0"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent={"flex-start"}>
                                    Еще
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="cz5">
                                        <path fill="currentColor" d="M6.293 9.293a1 1 0 0 1 1.414 0L12 13.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414"></path>
                                    </svg>
                                </Button>
                            </Flex>
                        ))}
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
}

export default CategoryListInside;
