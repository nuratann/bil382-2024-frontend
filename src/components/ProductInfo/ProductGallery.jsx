import React, { useState } from 'react';
import { Box, Image, VStack, HStack, useDisclosure } from '@chakra-ui/react';
import ImageModal from './ImageModal';

const ProductGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box p={"20px"}>
      <HStack spacing={4}>
        <VStack spacing={2} width="56px" height="500px" overflowY="auto">
          {images.map((image, index) => (
            <Box
              m={"6px auto"}
              key={index}
              width="56px"
              height="56px"
              onClick={() => handleThumbnailClick(index)}
              cursor="pointer"
              border={selectedIndex === index ? '2px' : '1px'}
              borderColor={selectedIndex === index ? 'blue.500' : 'transparent'}
              _hover={{
                opacity: '0.8',
              }}
            >
              <Image
                m={"auto"}
                width={"48px"}
                height={"48px"}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                objectFit="cover"
              />
            </Box>
          ))}
        </VStack>
        <Box width="500px" height="500px" onClick={onOpen}>
          <Image
            src={images[selectedIndex]}
            alt={`Selected product image ${selectedIndex + 1}`}
            objectFit="contain"
            boxSize="100%"
          />
        </Box>
      </HStack>

      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        image={images[selectedIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Box> 
  );
};

export default ProductGallery;
