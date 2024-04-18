import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  HStack,
  Box,
  Image,
  Text,
  VStack
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';

const MediaCommentsModal = ({ isOpen, onClose, media, handlePrevious, handleNext }) => {
  return (

    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent minWidth="1176px"> {/* Ширина фото + ширина блока комментариев */}
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing={0}>
            {/* Левая часть для изображения */}
            <Box w="816px" h="612px" position="relative">
              {/* Кнопка для переключения на предыдущее изображение */}
              <IconButton
                aria-label="Previous image"
                icon={<FaChevronLeft />}
                position="absolute"
                left="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex="2" // Убедитесь, что zIndex достаточно высокий, чтобы быть поверх изображения
                onClick={handlePrevious}
                // Добавьте любой стиль или свойства, необходимые для кнопки
              />

              <Image src={media.src} alt="Selected media" objectFit="cover" w="100%" h="100%" borderRadius={"15px 0 0 15px"}/>

              {/* Кнопка для переключения на следующее изображение */}
              <IconButton
                aria-label="Next image"
                icon={<FaChevronRight />}
                position="absolute"
                right="0"
                top="50%"
                transform="translateY(-50%)"
                zIndex="2"
                onClick={handleNext}
                // Добавьте любой стиль или свойства, необходимые для кнопки
              />
            </Box>
            {/* Правая часть для комментариев */}
            <VStack
              width="360px"
              height="612px"
              padding={4}
              spacing={4}
              align="start"
              overflowY="auto"
              bg="gray.100" /* фоновый цвет блока комментариев, можно настроить по вкусу */
              borderRadius={"0 15px 15px 0"}
              mr={"20px"}
            >
              <Text fontWeight="bold">{media.user}</Text>
              <Text color="gray.500">{media.date}</Text>
              <Text>{media.comment}</Text>
            </VStack>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MediaCommentsModal;
