import React from 'react';
import { Box, Flex, Text, Icon, Link, Spacer, Divider } from '@chakra-ui/react';
import { FaStar, FaRegPlayCircle, FaRegQuestionCircle } from 'react-icons/fa'; // Убедитесь, что используете правильные иконки

const ProductHeader = () => {
  // Фиктивные функции для демонстрации
  const handleReviewClick = () => console.log('Переход к отзывам');
  const handleVideoClick = () => console.log('Переход к видео');
  const handleQuestionClick = () => console.log('Переход к вопросам');

  // Примерные данные для товара
  const productName = "Кофе жареный зерновой JAMADJI 1 кг";
  const rating = 4; // 4 из 5 звезд
  const reviewCount = 3807;
  const videoCount = 7;
  const questionCount = 15;
  const productCode = "265648848";

  return (
    <Box as="header" p={5}>
      <Text fontSize="2xl" fontWeight="semibold" mb={2}>{productName}</Text>
      <Flex align="center">
        <Link fontWeight={'medium'} fontSize="sm" color="blue" onClick={handleReviewClick} display="flex" alignItems="center">
            <Box>
            {/* Звезды рейтинга */}
            {[...Array(5)].map((_, i) => (
                <Icon as={FaStar} key={i} color={i < rating ? "yellow.400" : "gray.300"} />
            ))}
            </Box>
            <Text as="span" ml={2} mr={6}>{reviewCount} отзывов</Text>
        </Link>
        <Link fontWeight={'medium'} onClick={handleVideoClick} color="blue">
          <Icon as={FaRegPlayCircle} mr={1} />
          <Text as="span" fontSize="sm">{videoCount} видео</Text>
        </Link>
        <Link fontWeight={'medium'} onClick={handleQuestionClick} color="blue">
          <Icon as={FaRegQuestionCircle} ml={2} mr={1} />
          <Text as="span" fontSize="sm">{questionCount} вопросов</Text>
        </Link>
        <Spacer />
        <Text fontSize="sm" color="gray.400" textAlign="right">Код товара: {productCode}</Text>
      </Flex>
      <Divider my={"10px"}/>
    </Box>
  );
};

export default ProductHeader;
