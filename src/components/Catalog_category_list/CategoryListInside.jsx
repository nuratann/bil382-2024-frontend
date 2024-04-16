// import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";

// function CategoryListInside({ categoryName, items }) {


//     return (
//         <Box color="#001a34" fontFamily="GTEestiPro, arial, sans-serif" width="100%" p="20px">
//             <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
//                 <Text fontSize="30px" fontWeight="700" color="black" mb="8px">
//                     {categoryName}
//                 </Text>
//                 <Text fontSize="14px" fontWeight="400" color="rgba(0, 26, 52, 0.6)" mb="20px">
//                     {items.reduce((total, item) => total + item.subcategories.length, 0)} items
//                 </Text>
//             </div>
//             {items.map((item, index) => (
//                 <Flex key={index} flexDirection="column" gap="10px">
//                     {item.subcategories.map((subcategory, subIndex) => (
//                         <Flex key={subIndex} flexDirection="row" justifyContent="space-between" alignItems="center" p="10px" bg="gray.100" borderRadius="md">
//                             <Link fontSize="16px" fontWeight="700" href={subcategory.link} isExternal>
//                                 {subcategory.name}
//                             </Link>
//                             <Link fontSize="14px" href={subcategory.subLink} isExternal>
//                                 Explore More
//                             </Link>
//                             <Button fontSize="14px" variant="link" color="blue.400" _hover={{ color: "black" }} bg="transparent">
//                                 Learn More
//                             </Button>
//                         </Flex>
//                     ))}
//                 </Flex>
//             ))}
//         </Box>
//     );
// }

// export default CategoryListInside;



import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";

function CategoryListInside({ categoryName, items }) {
    return (
        <Box color="#001a34" fontFamily="GTEestiPro, arial, sans-serif" width="100%" p="20px">
            <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
                <Text fontSize="30px" fontWeight="700" color="black" mb="8px" >
                    {categoryName}
                </Text>
                <Text fontSize="14px" fontWeight="400" color="rgba(0, 26, 52, 0.6)" mb="20px">
                    {items.reduce((total, item) => total + item.subcategories.length, 0)} items
                </Text>
            </div>
            <Flex flexDirection="row" gap="30px" >
                {items.map((item, index) => (
                    <Flex key={index} flexDirection="column" gap="15px" margin="auto" width="calc(33%-1px)" display="flex">
                        {item.subcategories.map((subcategory, subIndex) => (
                            <Flex key={subIndex} flexDirection="column" alignItems="start" p="20px" >
                                <Link fontSize="16px" fontWeight="700" href={subcategory.link} isExternal>
                                    {subcategory.name}
                                </Link>
                                <Link fontSize="14px" href={subcategory.subLink} isExternal>
                                    Explore More
                                </Link>
                                <Button fontSize="14px" variant="link" color="blue.400" _hover={{ color: "black" }} bg="transparent">
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

