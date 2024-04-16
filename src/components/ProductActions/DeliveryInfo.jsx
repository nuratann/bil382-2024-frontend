import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaRegCircle } from 'react-icons/fa';

const DeliveryInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deliveryAddress, setDeliveryAddress] = useState('Кыргызстан Бишкек');
  const [deliveryDetails, setDeliveryDetails] = useState({
    method: 'Курьером',
    date: '18 апреля',
    cost: '1500 сом'
  });

  // Здесь могут быть запросы к API для получения информации о доставке в зависимости от адреса
  useEffect(() => {
    // Пример изменения информации о доставке
    setDeliveryDetails({
      method: 'Курьером',
      date: '18 апреля',
      cost: '1500 сом'
    });
  }, [deliveryAddress]);

  const handleSelectDelivery = () => {
    // Логика выбора адреса доставки
    // После выбора адреса:
    setDeliveryAddress('Кыргызстан Бишкек Тыналиева 52');
    onClose();
  };

  return (
    <>
      <Box p={4} >
        <Flex alignItems="center" justifyContent="space-between" mb={2} as="button" onClick={onOpen}>
            <FaMapMarkerAlt />
          <Text fontWeight="bold">{deliveryAddress}</Text>
        </Flex>
        <Box borderTopWidth={1} py={2}>
          <Flex justify="space-between">
            <Text>{deliveryDetails.method}</Text>
            <Text>{deliveryDetails.cost}</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Пункты выдачи</Text>
            <Text>Бесплатно</Text>
          </Flex>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent minH={"400px"} alignItems={"center"}>
          <ModalHeader>Выберите адрес доставки</ModalHeader>
          <ModalCloseButton />
          <ModalBody alignContent={"center"}>
            <Button  colorScheme="blue" mr={3} onClick={handleSelectDelivery}>
                Выбрать на карте
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeliveryInfo;