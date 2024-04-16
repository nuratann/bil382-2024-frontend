import React from 'react';
import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";

function CategoryListInside({ categoryName, items }) {
    return (
        <Box color="#001a34" fontFamily="GTEestiPro, arial, sans-serif" width="600px" p="20px">
            <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
                <Text fontSize="28px" fontWeight="600" color="black" mb="8px" marginLeft="30px">
                    {categoryName}
                </Text>
                <Text fontSize="14px" fontWeight="400" color="rgba(0, 26, 52, 0.6)" mb="20px">
                    {items.reduce((total, item) => total + item.subcategories.length, 0)} items
                </Text>
            </div>
            <Flex flexDirection="row" gap="20px" width="100%">
                {items.map((item, index) => (
                    <Flex key={index} flexDirection="column" gap="15px" marginLeft="50px" display="grid" gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="repeat(3, auto)" >
                        {item.subcategories.map((subcategory, subIndex) => (
                            <Flex key={subIndex} flexDirection="column" alignItems="start" p="15px" width="250px">
                                <Link fontSize="16px" fontWeight="700" href={subcategory.link} isExternal>
                                    {subcategory.name}
                                </Link>
                                {subcategory.links.map((link, linkIndex) => (
                                    <Link fontSize="14px" href={subcategory.subLink} isExternal p="5px 0">
                                        {link.text}
                                    </Link>
                                ))
                                }
                                <Button fontSize="14px" variant="link" color="blue.400" _hover={{ color: "black" }} bg="transparent" p="5px 0">
                                    Learn More
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
