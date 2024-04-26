import { Box, Flex, Image, Text, Link, Switch, Radio, RadioGroup, RangeSlider, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Input, VStack, Checkbox } from '@chakra-ui/react';
import { categories } from './MainSearchData';
import { radioOptions } from './MainSearchData';
import React, { useState } from 'react';
import { BrandIconImage } from './MainSearchData';
import { gender } from './MainSearchData';
import { russianSize } from './MainSearchData';
import CustomScrollableList from './CustomScrollableList';
import SearchProductComponent from './SearchProductComponent';
import { intSizes } from './MainSearchData';
import { colors } from './MainSearchData';
import { customScrollbarStyles } from './MainSearchData';
import { materials } from './MainSearchData';
import { seasons } from './MainSearchData';
import useSearchStore from '../../stores/useSearchStore';


function MainSearchBlock() {

    const query = useSearchStore((state) => state.query);
    const results = useSearchStore((state) => state.results);
    const [selectedRadioOption, setSelectedRadioOption] = useState(radioOptions[0]); // State for selected option

    const handleChange = (value) => {
        setSelectedRadioOption(value);
    };


    return (
        <Box height={'395vh'} >
            <Box width="1300" height="60px" marginBottom="40px"
                marginTop="20px" marginLeft="40px" marginRight="40px" p={4} borderRadius={4}>
                <Text fontSize="14px" fontWeight="500" letterSpacing='2' >По запросу <strong>{query}</strong> было найдено {results.length} товаров.</Text>
                {/* Here need to add, logic for query itself, and number of items on that searchquery */}
            </Box>
            <Box

                width="1478"
                backgroundColor="white"
                flexDirection={'row'}
                display='flex'
                marginBottom="40px"
                marginTop="40px"
                height="360vh"

            >
                {/* bgColor={'rgba(236, 240, 248, 5)'} */}
                <Box width="240px" marginLeft="40px"  >
                    <Text fontSize="16px" fontWeight="700" letterSpacing='3' marginLeft="2px" >
                        Категория
                    </Text>
                    <Box pb={1} marginTop="5px" justifyContent={"flex-start"}  >
                        {categories.map((category) => (
                            <Link key={category} href={`#${category}`} mb={5} textDecoration={'none'} color={'black'} _hover={{ color: "blue.500" }}>
                                <Text mb={1.4}>{category}</Text>
                            </Link>
                        ))}
                    </Box>

                    <Box marginBottom={"22px"} marginTop={"22px"}>
                        <Flex alignItems={'end'}>
                            <Text fontWeight={'650'} >Распродажа </Text>
                            <Switch ml="auto">
                                {/* Need to write a logic, how it sorts items, when switch is clicked */}
                            </Switch>
                        </Flex>
                    </Box>

                    <Box marginBottom={"22px"} marginTop={"22px"}>
                        <Text fontWeight={'650'}> Срочные доставки</Text>
                        <RadioGroup onChange={handleChange} value={selectedRadioOption}>
                            <Box display="flex" flexDirection="column">
                                <Radio key={0} value={radioOptions[0]}>
                                    <Text ml={2}>{radioOptions[0]}</Text>
                                </Radio>
                                <Radio key={1} value={radioOptions[1]}>
                                    <Text ml={2}> {radioOptions[1]}</Text>
                                </Radio>
                                {/* and here also need to handle sorting depending on radioButtons */}
                            </Box>
                        </RadioGroup>
                    </Box>

                    <Box>
                        <Text fontWeight={'650'}> Бренды</Text>
                        <Box>
                            {BrandIconImage.map((brand) => (
                                <Flex key={brand.brandText} alignItems="center">
                                    <Link >
                                        <Image
                                            paddingTop={1}
                                            loading="lazy"
                                            fetchpriority="low"
                                            src={brand.imageUrl}
                                            width={25}
                                            height={18}
                                            mr={2}
                                            _hover={{ filter: "hue-rotate(210deg)" }} />
                                    </Link>
                                    <Text letterSpacing={'1px'} fontWeight={500}>{brand.brandText}</Text>
                                </Flex>
                            ))}
                        </Box>
                    </Box>
                    {/* actually hre only limited brands, but it would be better to add more brands and make a special window */}

                    <Box marginBottom={"22px"} marginTop={"22px"}>
                        <Flex alignItems={'end'}>
                            <Text fontWeight={'650'} >Оригинальный товар </Text>
                            <Switch ml="auto">
                                {/* Need to write a logic, how it sorts items, when switch is clicked */}
                            </Switch>
                        </Flex>
                    </Box>

                    <CustomScrollableList title="Пол" height="120px" data={gender} />
                    <CustomScrollableList title="Российский размер" height="120px" data={russianSize} />

                    <Box marginBottom={"22px"} marginTop={"22px"}>
                        <Flex alignItems={'end'}>
                            <Text fontWeight={'650'} >Товары со скидкой </Text>
                            <Switch ml="auto">
                            </Switch>
                        </Flex>
                    </Box>

                    <Box>
                        <Text fontWeight={'650'} >Диапазон цены </Text>
                        <Slider mb="15px" mt="15px" colorScheme="blue" defaultValue={80}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                        <Flex gap="30px">
                            <Input rounded={7} width="100px" height="30px" mr="2" defaultValue="от 150" _hover={{ borderColor: "brand.blue" }} fontSize="sm" />
                            <Input rounded={7} width="100px" height="30px" ml="3" defaultValue="до 8000" _hover={{ borderColor: "brand.blue" }} fontSize="sm" />
                        </Flex>
                    </Box>

                    <CustomScrollableList title="Международные размеры" height="140px" data={intSizes} />

                    <Box mt={"40px"}>
                        <Text fontWeight="650">Цвет</Text>
                        <Box marginBottom="25px" marginTop="12px" height="220px" overflow="hidden">
                            <Box height="100%" overflow="auto" css={customScrollbarStyles}>
                                <VStack alignItems="flex-start">
                                    {colors.map((color, index) => (
                                        <Box key={index} display="flex" alignItems="center">
                                            <Checkbox mr="2" rounded={10} _hover={{ borderColor: "brand.blue" }} colorScheme="blue" />
                                            <Text _hover={{ color: color.value }}>{color.name}</Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>
                        </Box>
                    </Box>

                    <CustomScrollableList title="Материал" height="350px" data={materials} />
                    <CustomScrollableList title="Сезон" height="160px" data={seasons} />


                    {/* will do this pop up page later */}
                    <Link>
                        <Input readOnly rounded={7} width="140px" height="30px" mr="3opx" mt="10px" value="Все филтры" _hover={{ borderColor: "brand.blue", bg: 'blue.50', color: 'blue.950' }} fontWeight="600" fontSize="16px" color="brand.blue" bgColor={"gray.100"} />
                    </Link>

                </Box>

                <SearchProductComponent />

            </Box >
        </Box>

    );
}


export default MainSearchBlock;

