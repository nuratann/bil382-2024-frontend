// import React from 'react';
import { Box, Input, Menu, MenuButton, IconButton, MenuList, MenuItem, Flex, Divider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import RecommendationBlock from '../../components/RecommendationBlock/RecommendationBlock'
import LinkSequence from './LinkSequencePage';
import React, { useState } from 'react';
import { menuItems } from './MainSearchData';
import ProductCard from '../../components/ProductCard/ProductCard';
import useSearchStore from '../../stores/useSearchStore'


function SearchProductComponent() {
    const results = useSearchStore(state => state.results)

    const [selectedItemMenu, setSelectedItemMenu] = useState(menuItems[0]);
    const handleItemClick = (item) => {
        setSelectedItemMenu(item);
    };

    return (
        <Box width="1100px" height='360vh' marginLeft='30px'>
            <Box  width="1100px" mb="10px" height='10vh'>
                <Box display="flex" ml="40px">
                    <Input shadow={'xs'} type="text" value={selectedItemMenu} width="220px" backgroundColor="white" borderWidth="0.1px" borderColor={"darkgray"} _hover={{ borderColor: "brand.blue" }} />
                    <Menu>
                        <MenuButton shadow={'xs'} mr="40px" backgroundColor="white" as={IconButton} icon={<ChevronDownIcon />} borderWidth="0.1px" borderColor={"darkgray"} _hover={{ borderColor: "brand.blue" }} />
                        <MenuList rounded={14}>
                            {menuItems.map((item, index) => (
                                <MenuItem _hover={{ bg: 'blue.50', color: 'blue.950' }} key={index} onClick={() => handleItemClick(item)}>{item}</MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            <Flex my={8} justify={'center'} w={'100%'} >
                {results && <Flex 
                    w={'80%'} 
                    flexWrap={'wrap'}
                >
                    {results.map((product, index) => (
                        <ProductCard
                            key={index}
                            imageUrl={product.img}
                            imageAlt='KUDO image'
                            price={product.price}
                            oldPrice={product.old_price}
                            rating={product.rating}
                            reviews={product.reviews}
                            seller={product.seller}
                            description={product.description}
                            date={product.delivery_date}
                            isFavorite={false}
                        />
                    ))}
                </Flex>}
            </Flex>
                    <Divider my={4} borderColor={'gray.500'}/>
            <Flex borderColor={"darkslategray"}>
                <RecommendationBlock gridColumns={3} count={20} />
            </Flex>

            <Box borderTopWidth={"0.02px"} borderTopColor={"#36454F"} width="1100px" mt="20px" height='10vh'>
                <LinkSequence />
            </Box>
        </Box >
    );
};

export default SearchProductComponent;
