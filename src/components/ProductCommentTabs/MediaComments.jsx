import React, { useState } from 'react';
import { Box, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import MediaCommentsModal from './MediaCommentsModal';

const MediaComments = ({ mediaList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const openModal = (index) => {
    setSelectedMediaIndex(index);
    onOpen();
  };

  // Не нужно отображать заблюренное изображение, если медиа менее 8
  const displayBlur = mediaList.length > 7;
  const lastMediaIndex = 7; // Индекс для последнего изображения, которое будет заблюрено

  const handlePrevious = () => {
    setSelectedMediaIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : mediaList.length - 1));
    console.log(prevIndex);
  };

  const handleNext = () => {
    setSelectedMediaIndex(prevIndex => (prevIndex < mediaList.length - 1 ? prevIndex + 1 : 0));
  };
  
  return (
    <>
      <SimpleGrid columns={8} spacing="5px" maxW="760px">
        {/* Отображение медиа до предпоследнего элемента */}
        {mediaList.slice(0, lastMediaIndex).map((media, index) => (
          <Box
            key={index}
            boxSize="90px"
            borderRadius="md"
            overflow="hidden"
            onClick={() => openModal(index)}
            cursor="pointer"
            position="relative"
          >
            <Image src={media.src} alt={`Media ${index}`} width="90px" height="90px" objectFit="cover" />
          </Box>
        ))}
        {/* Заблюренное изображение с информацией о количестве оставшихся медиа */}
        {displayBlur && (
          <Box
            boxSize="90px"
            borderRadius="md"
            overflow="hidden"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => openModal(lastMediaIndex)}
          >
            <Image src={mediaList[lastMediaIndex]?.src} alt="Additional media" width="90px" height="90px" objectFit="cover" filter="blur(2px)" />
            <Text position="absolute" color="white" fontSize="lg" fontWeight="bold">
              +{mediaList.length - lastMediaIndex}
            </Text>
          </Box>
        )}
      </SimpleGrid>

      {/* Модальное окно для просмотра медиа и комментариев */}
      {isOpen && (
        <MediaCommentsModal
          isOpen={isOpen}
          onClose={onClose}
          media={mediaList[selectedMediaIndex]}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
    </>
  );
};

export default MediaComments;
