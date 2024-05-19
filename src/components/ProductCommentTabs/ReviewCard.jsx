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
const ReviewCard = ({ review }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Функция для генерации звезд рейтинга
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon key={i} color={i < review.grade ? 'orange.400' : 'gray.300'} />
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
                //TODO: get reviewer avatar
                src={'https://illustrators.ru/uploads/illustration/image/1650800/B55E28DB-D499-4C69-B637-C8CFDA993B5C.png'}
                alt={`Профиль ${review.userId}`}
                mr={4}
            />
            <Text fontWeight="bold">{review.userId}</Text>
            </Flex>
            <Flex align="center">
            <Text fontSize="sm" mr={4}>{review.updatedDate}</Text>
            <Stack direction="row" spacing={1}>
                {review.type==='review' ? renderStars() : <></>}
            </Stack>
            </Flex>
        </Flex>


        <Text mt={2} ml={"66px"}>{review.text}</Text>
        <Flex align="center" mt={4} ml={"64px"}>

            <IconButton
                aria-label="Лайк"
                icon={<FaThumbsUp />}
                onClick={onLike}
                variant="ghost"
                colorScheme="blue"
                size="sm"
            />
            <Text mr={"20px"}>{review.likes}</Text>
            <IconButton
            aria-label="Дизлайк"
            icon={<FaThumbsDown />}
            onClick={onDislike}
            variant="ghost"
            colorScheme="blue"
            size="sm"
        />
        <Text mr={"20px"}>{review.dislikes}</Text>
        </Flex>
        <Box ms={"48px"} mt={2}>
          {review.comments.map((comment, index)=>{
            return <ReviewCard key={index} review={comment}/>
          })}
        </Box>
    </Box>
  );
};

export default ReviewCard;
