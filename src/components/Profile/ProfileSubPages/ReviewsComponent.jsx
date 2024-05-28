import React, { useState } from 'react';
import {
    Box,
    Heading
} from '@chakra-ui/react';
import UserReviews from '../../ProductCommentTabs/UserReviews';

const ReviewsComponent = () => {

  return (
    <>
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

    </>
  );
};

export default ReviewsComponent;