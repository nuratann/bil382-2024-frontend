import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Stack,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const UserReviews = ({ productImage,
  productName,
  reviewDate,
  rating,
  advantages,
  disadvantages,
  comment,
  userPhotos}) => {

    productImage,
    productName,
    reviewDate,
    rating,
    advantages,
    disadvantages,
    comment,
    userPhotos


  // Функция для генерации звезд рейтинга
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} color={i <= rating ? 'orange.400' : 'gray.300'} />);
    }
    return stars;
  };

  return (
    <Box  overflow="hidden" p={4} bg={useColorModeValue('white', 'gray.700')} mb={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Image boxSize="60px" src={productImage} alt={productName} mr={4} />
          <Text fontWeight="bold" fontSize="lg">{productName}</Text>
        </Flex>
        <Button colorScheme="red" size="sm">Отказать в публикации</Button>
      </Flex>

      <Flex mt={2} alignItems="center" justifyContent="space-between">
        <Text ml={"76px"} fontSize="sm" color="gray.500">{reviewDate}</Text>
        <Stack direction="row">{renderStars(rating)}</Stack>
      </Flex>

      <Text mt={4} ml={"76px"} fontWeight="bold">Комментарий:</Text>
      <Text ml={"76px"} mb={4}>{comment}</Text>

      {userPhotos && userPhotos.length > 0 && (
        <Flex ml={"76px"}>
          {userPhotos.map((photo, index) => (
            <Image key={index} src={photo} boxSize="100px" mr={2} alt={`Фото ${index + 1}`} />
          ))}
        </Flex>
      )}

      <Flex mt={4} ml={"76px"}>
        <IconButton
          aria-label="Лайк"
          icon={<FaThumbsUp />}
          variant="ghost"
          colorScheme="teal"
          size="sm"
        />
        <IconButton
          aria-label="Дизлайк"
          icon={<FaThumbsDown />}
          variant="ghost"
          colorScheme="red"
          size="sm"
          ml={2}
        />
      </Flex>
    </Box>
  );
};

export default UserReviews;
