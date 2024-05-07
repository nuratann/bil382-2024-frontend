import React, { useState } from 'react';
import {
    Box,
    Heading
} from '@chakra-ui/react';
import ReviewCard from '../../ProductCommentTabs/ReviewCard';
import UserReviews from '../../ProductCommentTabs/UserReviews';


const ReviewsComponent = () => {

  return (
    <Box    p={5} shadow="md" 
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
        <Heading  fontWeight="550" fontSize="20px" ml="20px" mb="20px">Мои отзывы</Heading>
        <UserReviews productImage= "https://via.placeholder.com/60"
                     productName = "Dolce&Gabbana Pour Femme Intense Парфюмерная вода 50 мл"
                     reviewDate = "3 января 2021"
                     rating = {4}
                     advantages = "Отличный аромат, долговечность."
                     disadvantages = "Высокая цена."
                     comment = "Очень довольна покупкой, рекомендую!"
                     userPhotos = {[
                     "https://ir.ozone.ru/s3/multimedia-1-5/wc250/6938263121.jpg",
                     "https://ir.ozone.ru/s3/multimedia-1-5/wc250/6938263121.jpg"
          ]}/>
          <UserReviews productImage= "https://via.placeholder.com/60"
                     productName = "Dolce&Gabbana Pour Femme Intense Парфюмерная вода 50 мл"
                     reviewDate = "3 января 2021"
                     rating = {4}
                     advantages = "Отличный аромат, долговечность."
                     disadvantages = "Высокая цена."
                     comment = "Очень довольна покупкой, рекомендую!"
                     userPhotos = {[
                     "https://ir.ozone.ru/s3/multimedia-1-5/wc250/6938263121.jpg",
                     "https://ir.ozone.ru/s3/multimedia-1-5/wc250/6938263121.jpg"
          ]}/>
          <UserReviews productImage= "https://via.placeholder.com/60"
                     productName = "Dolce&Gabbana Pour Femme Intense Парфюмерная вода 50 мл"
                     reviewDate = "3 января 2021"
                     rating = {4}
                     advantages = "Отличный аромат, долговечность."
                     disadvantages = "Высокая цена."
                     comment = "Очень довольна покупкой, рекомендую!"
                     userPhotos = {[
                     "https://ir.ozone.ru/s3/multimedia-1-5/wc250/6938263121.jpg",
                     "https://ir.ozone.ru/s3/multimedia-1-5/wc250/6938263121.jpg"
          ]}/>

    </Box>
  );
};

export default ReviewsComponent;