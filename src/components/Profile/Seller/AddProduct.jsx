import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading, Flex, Select, Button, Text, Image, Input, Textarea,
  Checkbox,
} from '@chakra-ui/react';
import { CiSquarePlus } from "react-icons/ci";
import { MdAddAPhoto } from "react-icons/md";
import { FaTrash } from 'react-icons/fa';
import ProductService from '../../../api/ProductService';
import useUserStore from '../../../stores/useUserStore';
import { uploadFile } from '../../../api/MediaService';
import Catalog from '../../Header/Catalog';
import useProductStore from '../../../stores/useProductStore';
import { Grid, GridItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import AnimatedCheckMark from '../../AnimatedCheckMark/AnimatedCheckMark';

const AddProduct = () => {
    const navigate = useNavigate();
    const seller = useUserStore(state=>state.user)
    const product = useProductStore(state=>state.product)
    product.sellerId = seller.id
    const setProduct = useProductStore(state=>state.setProduct)
    const resetProduct = useProductStore(state=>state.resetProduct)
    const [categoryObject, setCategoryObject] = useState(null);
    const [filters, setFilters] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log('Product1:', product);
                const productData = await ProductService.createProduct(seller.id, seller.authData.access_token);
                console.log('Product data:', productData);
                setProduct({
                    ...productData, 
                    options: JSON.parse(productData.options), 
                    specs: JSON.parse(productData.specs),
                    mediaLinks: JSON.parse(productData.mediaLinks)
                });
            } catch (error) {
                console.error('Failed to fetch product', error);
            }
        };

        fetchProduct();
    }, []);
    // useEffect(() => {
    //     const fetchCategory = async () => {
    //         try {
    //             const categoryName = product.category.split(' / ')[product.category.split(' / ').length - 1];
    //             console.log('Category name:', categoryName);
    //             const categoryData = await ProductService.getCategory(categoryName, seller.authData.access_token);
    //             console.log('Category data:', categoryData);
    //             setCategoryObject(categoryData);
    //             setFilters(JSON.parse(JSON.parse(categoryData.filters)));
    //             set
    //         } catch (error) {
    //             console.error('Failed to fetch category', error);
    //         }
    //     };

    //     if(product.category!=='Категории') fetchCategory();
    // }, [product.category]);
    // console.log('Product:', product)
    useEffect(() => {
        console.log('Product(effect):', product)
    }, [product])

    const setCategory = async (category) => {
        const fetchCategory = async () => {
            try {
                const categoryName =category.split(' / ')[category.split(' / ').length - 1];
                const categoryData = await ProductService.getCategory(categoryName, seller.authData.access_token);
                setCategoryObject(categoryData);
                setFilters(JSON.parse(JSON.parse(categoryData.filters)));
                setProduct({ ...product, category: categoryData });
            } catch (error) {
                console.error('Failed to fetch category', error);
            }
        };
        fetchCategory();
    }
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const url = await uploadFile(file, product.id);
        setProduct({ ...product, mediaLinks: [...product.mediaLinks, { type: "img", url }] });
    };
    const handleInputChange = (index, event, type) => {
        setProduct({ ...product, options: [...product.options.slice(0, index), {...product.options[index], [type]: event.target.value}, ...product.options.slice(index + 1)] });
    };
    const handleRemoveOption = (index) => {
        setProduct({ ...product, options: [...product.options.slice(0, index), ...product.options.slice(index + 1)] });
    }
    const [submitting, setSubmitting] = useState(true);
    const handleAddProduct = async () => {
        const productData = await ProductService.updateProduct(product, seller.authData.access_token);
        window.scrollTo(0, 0);
        setSubmitting(false);
        setTimeout(() => {
            console.log(productData)
            resetProduct();
            navigate('/product/' + productData.id)
            }, 2000);
    }

    const handleAddOption = () => {
        setProduct({ ...product, options: [...product.options, { title: "", count: "", price: "" }] });
    }

    const RedText = ({children}) => {
        return (
            <span style={{ color: "red" }}>{children}</span>
        )
    }


    return (
        <>
            {submitting ?
                <>
                    <Box p={4}>
                        <Heading fontWeight="550" fontSize="20px" ml="20px" mb="20px">Добавить товар</Heading>

                        <Text fontWeight={"bold"} mb={4}>Добавьте фото вашего товара <RedText>*</RedText></Text>
                        <Flex>
                            {product.mediaLinks.map((media, index) => (

                                <Box
                                    position="relative"
                                    width={index === 0 ? 200 : 150}
                                    height={index === 0 ? 200 : 150}
                                    key={index}
                                    mr={'10px'}
                                    borderRadius={"6px"}
                                    role='group'
                                >
                                    <Image
                                        src={media.url}
                                        alt={`Uploaded ${index + 1}`}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        borderRadius={"6px"}
                                    />
                                    <Button
                                        bg={index === 0 ? "brand.green" : "blue.400"}
                                        _hover={{ bg: index === 0 ? "brand.green" : "blue.300" }}
                                        position="absolute"
                                        width={index === 0 ? "185px" : "140px"}
                                        h={"30px"}
                                        top={index === 0 ? '90%' : '85%'}
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        opacity={index === 0 ? 1 : 0}
                                        transition="opacity 0.3s"
                                        _groupHover={{ opacity: 1 }}
                                        fontSize={11}
                                        color={'white'}
                                        onClick={() => setProduct({ ...product, mediaLinks: [media, ...product.mediaLinks.slice(0, index), ...product.mediaLinks.slice(index + 1)] })}
                                    >
                                        {
                                            index === 0 ? "Главное изображение" : "Сделать главным"
                                        }
                                    </Button>


                                </Box>

                            ))}
                            <Input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" style={{ cursor: 'pointer', width: '150px', height: '150px' }}>
                                <Button
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    w={'150px'}
                                    h={'150px'}
                                    as="span"
                                >
                                    <MdAddAPhoto />
                                    <Text>Добавить фото</Text>
                                </Button>
                            </label>
                        </Flex>

                        <Text fontWeight={"bold"} mb={2} mt={5}>Добавьте краткое описание вашего товара <RedText>*</RedText></Text>
                        <Textarea value={product.title} w={"700px"} h={"auto"} resize={"none"} onChange={(e) => setProduct({ ...product, title: e.target.value })}></Textarea>

                        <Text fontWeight={"bold"} mb={2} mt={5}>Добавьте полное описание вашего товара <RedText>*</RedText></Text>
                        <Textarea value={product.description} w={"700px"} h={"auto"} resize={"none"} onChange={(e) => setProduct({ ...product, description: e.target.value })}></Textarea>

                        <Text fontWeight={"bold"} mb={2} mt={5}>Выберите категорию вашего товара <RedText>*</RedText></Text>
                        <Catalog type={'select'} title={product.category.name} setFunc={setCategory} />

                        {product.category.name !== 'Общая' &&
                            <>
                                <Text fontWeight={"bold"} mb={4} mt={5}>Добавьте характеристики вашего товара <RedText>*</RedText></Text>
                                <Grid templateColumns='repeat(2, 1fr)' gap={4}>
                                    {filters.map((filter, index) => (
                                        //specs:[spec:{title:"Емкость аккумулятора",value:"5000Mah"}]
                                        <GridItem w='100%' key={index}>
                                            <Text fontWeight={"bold"}>{filter.title}</Text>
                                            <Select mb={4} onChange={(e) => setProduct({ ...product, specs: { ...product.specs, [filter.title]: e.target.value } })}>
                                                <option>Выберите значение</option>
                                                {filter.options.map((option, i) => (
                                                    <option key={i}>{option}</option>
                                                ))}
                                            </Select>
                                        </GridItem>
                                    ))}
                                </Grid>
                            </>
                        }

                        <Text fontWeight={"bold"} mb={4} mt={5}>Добавьте опции вашего товара <RedText>*</RedText></Text>
                        {product.options.map((option, index) => (
                            <Flex key={index} flexDirection={"column"} mb={4}>
                                <Flex align={'center'}>
                                    <Text>{index + 1}: </Text>
                                    <Input
                                        value={option.title}
                                        onChange={(event) => handleInputChange(index, event, 'title')}
                                        placeholder={`Название опции`}
                                        ms={4}
                                    />
                                    <Input
                                        value={option.count}
                                        onChange={(event) => handleInputChange(index, event, 'count')}
                                        placeholder={`количество на складе`}
                                        ms={4}
                                    />
                                    <Input
                                        value={option.price}
                                        onChange={(event) => handleInputChange(index, event, 'price')}
                                        placeholder={`цена`}
                                        ms={4}
                                    />
                                    <Select maxW={'70px'} ml={2}>
                                        <option value="SOM">⃀</option>
                                        <option value="TNG">₸</option>
                                        <option value="RUB">₽</option>
                                        <option value="USD">$</option>
                                    </Select>

                                    <Button visibility={index === 0 ? "hidden" : "visible"} onClick={() => handleRemoveOption(index)} ml={4} _hover={{ color: "red" }}>
                                        <FaTrash />
                                    </Button>
                                </Flex>
                                {index === product.options.length - 1 && (
                                    <Button w={"200px"} onClick={handleAddOption} mt={4}>
                                        <CiSquarePlus style={{ fontSize: '30px', margin: "0 8px 0 0" }} />
                                        Добавить еще
                                    </Button>
                                )}
                            </Flex>
                        ))}


                        <Text fontWeight={"bold"} mb={4} mt={8}>Добавьте цену вашего товара(эта цена котрая отображаеться на карточке товара) <RedText>*</RedText></Text>
                        <Flex>
                            <Input
                                value={product.price}
                                onChange={(event) => setProduct({ ...product, price: event.target.value, oldPrice: event.target.value })}
                                placeholder={`12999.99`}
                                maxW={'400px'}
                            />
                            <Select maxW={'70px'} ml={2}>
                                <option value="SOM">⃀</option>
                                <option value="TNG">₸</option>
                                <option value="RUB">₽</option>
                                <option value="USD">$</option>
                            </Select>
                        </Flex>

                        <Text fontWeight={"bold"} mb={4} mt={8}>Доставка вашего товара до нашего склада(в рабочих днях) <RedText>*</RedText></Text>
                        <Input
                            value={product.deliveryDays}
                            onChange={(event) => setProduct({ ...product, deliveryDays: Number(event.target.value) })}
                            placeholder={`12999.99`}
                            maxW={'400px'}
                        />

                        <Text fontWeight={"bold"} mb={4} mt={8}>Укажите вес товара(в килограммах) <RedText>*</RedText></Text>
                        <Input
                            value={product.weight}
                            onChange={(event) => setProduct({ ...product, weight: Number(event.target.value) })}
                            placeholder={`12999.99`}
                            maxW={'400px'}
                        />

                        <Flex justifyContent={"center"}>
                            <Button bg={"brand.green"} color="white" _hover={{ bg: "brand.hovergreen" }} mt={8} w={"300px"} onClick={handleAddProduct}>Добавить товар</Button>
                        </Flex>
                    </Box>
                </>
                :
                <>
                <Flex w={'100%'} justifyContent={'center'} align={'center'}>
                        <Box boxSize={32} my={10}>
                            <AnimatedCheckMark type='success' />
                        </Box>
                </Flex>
                </>
            }
        </>
    );
};

export default AddProduct;