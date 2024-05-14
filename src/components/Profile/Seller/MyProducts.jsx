import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading, Flex, Select, Button
} from '@chakra-ui/react';
import ProductCardForSeller from '../../ProductCard/ProductCardForSeller';
import { CiSquarePlus } from "react-icons/ci";

const MyProducts = () => {
  return (
    <Box p={5} shadow="md" 
            height="max-content"
            flexDirection={"column"}
            width="1160px"
            bgColor="white"
            display="flex"
            ml="30px"
            mt="30px"
            mb="50px"
            borderRadius="28px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)">
        <Heading  fontWeight="550" fontSize="20px" ml="20px" mb="20px">Мои товары</Heading>
        <Flex justify="space-between">
            <Select w={'300px'} mb={4}>
                <option value="date">Сортировать по дате</option>
                <option value="price">Сортировать по цене</option>
            </Select>
            <Button mr={4} colorScheme="green">
                <CiSquarePlus style={{ fontSize: '30px', color: "white", margin: "0 8px 0 0" }} />
                Добавить товар
            </Button>
        </Flex>
        <Flex flexWrap={'wrap'}
              justify={'space-between'}>
            <ProductCardForSeller
                key = {1} 
                imageUrl = 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1711535077/lmcode/pqAx59XDzkmBgWH_oBNxcg/86858614_01.png'
                imageAlt = 'KUDO image'
                price = {360.99}
                oldPrice = {399.99}
                rating = {4.8}
                reviews = {118}
                seller = 'KUDO bishkek'
                description = 'Грунт-эмаль 3 в 1 по ржавчине KUDO высокопрочная ...'
                date = '11 апреля'
                isFavorite = {false}
            />
            <ProductCardForSeller
                key = {1} 
                imageUrl = 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1711535077/lmcode/pqAx59XDzkmBgWH_oBNxcg/86858614_01.png'
                imageAlt = 'KUDO image'
                price = {360.99}
                oldPrice = {399.99}
                rating = {4.8}
                reviews = {118}
                seller = 'KUDO bishkek'
                description = 'Грунт-эмаль 3 в 1 по ржавчине KUDO высокопрочная ...'
                date = '11 апреля'
                isFavorite = {false}
            />
            <ProductCardForSeller
                key = {1} 
                imageUrl = 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1711535077/lmcode/pqAx59XDzkmBgWH_oBNxcg/86858614_01.png'
                imageAlt = 'KUDO image'
                price = {360.99}
                oldPrice = {399.99}
                rating = {4.8}
                reviews = {118}
                seller = 'KUDO bishkek'
                description = 'Грунт-эмаль 3 в 1 по ржавчине KUDO высокопрочная ...'
                date = '11 апреля'
                isFavorite = {false}
            />
            <ProductCardForSeller
                key = {1} 
                imageUrl = 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1711535077/lmcode/pqAx59XDzkmBgWH_oBNxcg/86858614_01.png'
                imageAlt = 'KUDO image'
                price = {360.99}
                oldPrice = {399.99}
                rating = {4.8}
                reviews = {118}
                seller = 'KUDO bishkek'
                description = 'Грунт-эмаль 3 в 1 по ржавчине KUDO высокопрочная ...'
                date = '11 апреля'
                isFavorite = {false}
            />
            <ProductCardForSeller
                key = {1} 
                imageUrl = 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1711535077/lmcode/pqAx59XDzkmBgWH_oBNxcg/86858614_01.png'
                imageAlt = 'KUDO image'
                price = {360.99}
                oldPrice = {399.99}
                rating = {4.8}
                reviews = {118}
                seller = 'KUDO bishkek'
                description = 'Грунт-эмаль 3 в 1 по ржавчине KUDO высокопрочная ...'
                date = '11 апреля'
                isFavorite = {false}
            />
            
        </Flex>
        
    </Box>
  );
};

export default MyProducts;