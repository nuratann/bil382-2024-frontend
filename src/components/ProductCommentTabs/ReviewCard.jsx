import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Stack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

// Пропсы могут включать изображение профиля, имя, дату, комментарий, рейтинг и лайки
const ReviewCard = ({ profileImg, name, date, comment, rating, likes }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Функция для генерации звезд рейтинга
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon key={i} color={i < rating ? 'orange.400' : 'gray.300'} />
      );
    }
    return stars;
  };

  const onLike = () => {
    console.log('Лайк добавлен');
    // Тут можно добавить логику для увеличения количества лайков
  };
  
  const onDislike = () => {
    console.log('Дизлайк добавлен');
    // Тут можно добавить логику для увеличения количества дизлайков
  };

  return (
    <Box w={"820px"} alignContent={"flex-start"} mb={"30px"}>
        <Flex align="center" justify="space-between" w="full">
            <Flex align="center">
            <Image
                borderRadius="full"
                boxSize="50px"
                src={profileImg}
                alt={`Профиль ${name}`}
                mr={4}
            />
            <Text fontWeight="bold">{name}</Text>
            </Flex>
            <Flex align="center">
            <Text fontSize="sm" mr={4}>{date}</Text>
            <Stack direction="row" spacing={1}>
                {renderStars()}
            </Stack>
            </Flex>
        </Flex>


        <Text mt={2} ml={"66px"}>{comment}</Text>
        <Flex align="center" mt={4} ml={"64px"}>

            <IconButton
                aria-label="Лайк"
                icon={<FaThumbsUp />}
                onClick={onLike}
                variant="ghost"
                colorScheme="blue"
                size="sm"
            />
            <Text mr={"20px"}>{likes}</Text>
            <IconButton
            aria-label="Дизлайк"
            icon={<FaThumbsDown />}
            onClick={onDislike}
            variant="ghost"
            colorScheme="blue"
            size="sm"
        />
        </Flex>
    </Box>
  );
};

export default ReviewCard;
