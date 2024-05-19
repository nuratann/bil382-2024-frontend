// ReviewsList.js
import React, { useState } from 'react';
import {
  Box,
  Button,
} from '@chakra-ui/react';
import ReviewCard from './ReviewCard'; // Импортируем компонент ReviewCard

const ReviewsList = ({ reviews }) => {
  const [visibleReviews, setVisibleReviews] = useState(10); // Начальное количество видимых отзывов
  const showMoreReviews = () => {
    setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 10); // Показать больше отзывов
  };

  return (
    <Box>
      {reviews.slice(0, visibleReviews).map((review, index) => (
        <ReviewCard key={index} review={review} /> // Распространяем все свойства отзыва на ReviewCard
      ))}
      {visibleReviews < reviews.length && (
        <Button onClick={showMoreReviews} mt="4">
          Показать еще
        </Button>
      )}
    </Box>
  );
};

export default ReviewsList;
