import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageModal = ({ isOpen, onClose, image, onNext, onPrevious }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex justify="center" align="center" position="relative">
            <IconButton
              icon={<FiChevronLeft />}
              onClick={onPrevious}
              position="absolute"
              left="0"
              top="50%"
              transform="translateY(-50%)"
              zIndex="2"
            />
            <Image src={image} alt="Enlarged product" maxW="100%" maxH="100%" />
            <IconButton
              icon={<FiChevronRight />}
              onClick={onNext}
              position="absolute"
              right="0"
              top="50%"
              transform="translateY(-50%)"
              zIndex="2"
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
