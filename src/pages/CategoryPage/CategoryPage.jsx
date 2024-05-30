import React from 'react'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MainSearchBlock from '../../components/SearchPageComponents/MainSearchBlock';
import { Flex, Text, Box, Image, Center, VStack, Slider, HStack, Button, Link, SimpleGrid } from '@chakra-ui/react';
import ProductCard from '../../components/ProductCard/ProductCard';
import useSearchStore from '../../stores/useSearchStore'
import { ElectronicsData, ShoesData, TourismData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { ClothingData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { HousingData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { ChildData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { BeatyData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { HygienData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { SportData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { RemontData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { ProductyData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { AptekaData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { ZooData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { BooksData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { MebelData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { AccessouarsData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { SuppliesData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { ChemData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { GameData } from '../../components/CategoriesCatalog/CatgegoriesData';
import { AutoData } from '../../components/CategoriesCatalog/CatgegoriesData';





function CategoryPage() {
    const { name } = useParams();
    let category;

    if (name === 'Электроника' || 'Electronics') {
        category = ElectronicsData;
    } else if (name === 'Одежда' || 'Clothing') {
        category = ClothingData;
    } else if (name === 'Обувь' || 'Housing') {
        category = ShoesData;
    }
    else if (name === 'Дом и Сад' || 'Child Items') {
        category = HousingData;
    }
    else if (name === 'Детские товары' || 'Beauty and Health') {
        category = ChildData;
    }
    else if (name === 'Красота и здоровье' || 'Houshold Appliences') {
        category = BeatyData;
    }
    else if (name === 'Бытовая техника' || 'Sport and Outdoor') {
        category = HygienData;
    }
    else if (name === 'Спорт и отдых' || 'Construction and Repair') {
        category = SportData;
    }
    else if (name === 'Ремонт и строительство' || 'Groceries and Food') {
        category = RemontData;
    }
    else if (name === 'Продукты питания' || 'Pharmacy') {
        category = ProductyData;
    }
    else if (name === 'Аптека' || 'Zoo items') {
        category = AptekaData;
    }
    else if (name === 'Товары для животных' || 'Books') {
        category = ZooData;
    }

    else if (name === 'Туризм, Рыбалка' || 'Tourism and finshidng') {
        category = TourismData;
    }
    else if (name === 'Мебель' || 'Furniture') {
        category = MebelData;
    }
    else if (name === 'Аксессуары' || 'Accessories') {
        category = AccessouarsData;
    }
    else if (name === 'Канцелярия' || 'School Supplies') {
        category = SuppliesData;
    }
    else if (name === 'Книги' || 'Books') {
        category = BooksData;
    }
    else if (name === 'Бытовая химия и гигиена' || 'Houshold chemicals and Hygiene') {
        category = ChemData;
    }
    else if (name === 'Игры и консоли' || 'Game and Console') {
        category = GameData;
    }
    else if (name === 'Автомобили' || 'Auto') {
        category = AutoData;
    }
    else {
        category = null;
    }



    return (
        <>
            <Header />
            <Navbar />
            {category ? (


                <Box h="max-content" width="1478" paddingY="10px" marginBottom="20px" >
                    <Box width="1370" marginBottom="10px" padding="10px">
                        <Box color="#001a34" fontFamily="GTEestiPro, arial, sans-serif" width="600px" p="20px" height="max-content" marginLeft="30px">
                            <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
                                <Text fontSize="28px" fontWeight="550" color="black" mb="8px" >
                                    {category.name}
                                </Text>
                                <Text fontSize="14px" fontWeight="400" color="rgba(0, 26, 52, 0.6)" mb="15px">
                                    12000  items
                                </Text>
                            </div>
                        </Box>

                        <Box w="1400px"
                            backgroundImage={category.img}
                            backgroundSize="cover"
                            backgroundPosition="center"
                            borderRadius={"20px"}
                            opacity="0.9"
                            height={"400px"}
                            mt="10px"
                            ml="50px"
                        >
                            <Image width="120px" height="130px" ml="1290px"
                                src="https://cdn-icons-png.flaticon.com/512/3658/3658550.png" />
                            <Image width="130px" height="150px" mr="740px"
                                src="https://cdn-icons-png.flaticon.com/512/3658/3658550.png" />
                        </Box>

                        <Box color="#001a34" fontFamily="GTEestiPro, arial, sans-serif" width="600px" p="20px" height="max-content" marginLeft="30px">
                            <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
                                <Text fontSize="28px" fontWeight="550" color="black" mb="8px" >
                                    Популярные категории
                                </Text>
                            </div>
                        </Box>


                        <Box h='max-content' width="1400px" ml="50px">
                            <SimpleGrid columns={6} spacing={4}>
                                {renderCategoryItems(category)}
                            </SimpleGrid>
                        </Box>

                        <Box color="#001a34" fontFamily="GTEestiPro, arial, sans-serif" width="600px" p="20px" height="max-content" marginLeft="30px">
                            <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
                                <Text fontSize="28px" fontWeight="550" color="black" mb="8px" >
                                    Популярные Бренды
                                </Text>
                            </div>
                        </Box>

                        <Box h='max-content' width="1400px" ml="50px" flexWrap="wrap" overflowX="auto">
                            <Flex justifyContent="center" alignItems="center">
                                {renderBrands(category)}
                            </Flex>
                        </Box>

                    </Box>

                </Box>

            ) : (
                <Box>
                    <Text>Category not found</Text>
                </Box>
            )}
            <MainSearchBlock height="max-content" />
            <Footer />
        </>
    );
}

export default CategoryPage;

function renderCategoryItems(category) {
    if (!category || !category.items) return null;

    return (
        <React.Fragment>
            {category.items.map((subcategory, idx) => (
                <React.Fragment key={idx}>
                    {subcategory.subcategories.map((subcategory, idx) => (
                        <React.Fragment key={idx}>
                            {subcategory && subcategory.items && subcategory.items.map((item, i) => (
                                <Box
                                    key={i}
                                    textAlign="center"
                                    borderRadius="lg"
                                    margin="auto"
                                    marginBottom="20px"
                                    width="fit-content"
                                    p="10px"
                                    bg="white"
                                >
                                    <Image src={item.img} alt="item image" borderRadius="lg" />
                                    <Link href={item.url} color="gray.800" mt={2} display="block" textDecoration="none">
                                        <Text mt={4}>{item.text}</Text>
                                    </Link>
                                </Box>
                            ))}
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}


function renderBrands(category) {
    if (!category || !category.items) return null;

    return (
        <React.Fragment>
            {category.items.map((subcategory, idx) => (
                <React.Fragment key={idx}>
                    {subcategory.subcategories.map((subcategory, idx) => (
                        <React.Fragment key={idx}>
                            {subcategory && subcategory.brands && subcategory.brands.map((brand, i) => (
                                <Box
                                    key={i}
                                    textAlign="center"
                                    borderRadius="lg"
                                    margin="auto"
                                    marginBottom="20px"
                                    width="fit-content"
                                    h="160px"
                                    p="10px"
                                    bg="white"
                                    marginRight="10px"
                                >
                                    <Image src={brand.img} alt="brand image" borderRadius="lg" />
                                    <Link href={brand.url} color="gray.800" mt={2} display="block" textDecoration="none">
                                        <Text mt={4}>{brand.text}</Text>
                                    </Link>
                                </Box>
                            ))}
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}