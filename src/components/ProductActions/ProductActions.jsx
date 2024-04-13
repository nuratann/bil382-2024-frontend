import React, { useState } from 'react';
import {
  Flex,
  Button,
  IconButton,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMinus, FaPlus, FaShoppingBasket, FaHeart, FaRegHeart, FaRegPlayCircle } from 'react-icons/fa';
import DeliveryInfo from './DeliveryInfo';
import FAQLinks from './FAQLinks'

const ProductActions = () => {
    const [isFavorited, setIsFavorited] = useState(false);
    const handleAddToFavorites = () => {
        // Здесь может быть код для добавления в избранное
        setIsFavorited(!isFavorited);
    };
    
    // Обработчики событий будут добавлены позже
    const handleBuyNow = () => console.log('Купить в один клик');

    const [inCart, setInCart] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        setInCart(true);
        setQuantity(1); // Устанавливаем количество в 1 при добавлении в корзину
    };    
    
    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };
    
    const decreaseQuantity = () => {
        setQuantity((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            setInCart(false);
            return 0; // Это заставит компонент перерисоваться без элементов управления количеством
          }
        });
      };
    
    const goToCart = () => {
        // Логика перехода в корзину
        console.log('Переход в корзину');
    };

    // Стили для кнопок и ссылок
    const buttonBg = useColorModeValue('blue.100', 'blue.200');
    const buttonColor = useColorModeValue('brand.blue', 'gray.800');

    return (
        <VStack spacing={4} align="stretch" w={"320px"} h={"500px"} >
            <Flex
            direction="column"
            justifyContent="space-between" // Вертикально разделяет контент
            w="320px"
            h="160px"
            p="20px"
            bg="white"
            boxShadow="0 4px 16px 1px rgba(0,26,52,.16)"
            borderRadius="20px"
            >
                <Text fontSize="3xl" fontWeight="bold" alignSelf="flex-start" >
                    3 554 сом
                </Text>
                <Flex justifyContent={"flex-start"}>
                    {inCart ? (
                    <Flex justifyContent="flex-start" alignItems="center" >
                        
                        <IconButton
                            aria-label="Уменьшить количество"
                            icon={<FaMinus />}
                            onClick={decreaseQuantity}
                            isDisabled={quantity === 0}
                            h={"48px"}
                        />
                        <Text mx={2}>{quantity}</Text>
                        <IconButton
                            aria-label="Увеличить количество"
                            icon={<FaPlus />}
                            onClick={increaseQuantity}
                            h={"48px"}
                        />
                        <Button leftIcon={<FaShoppingBasket />} ml={1} onClick={goToCart } bg={"green.200"} h={"48px"}>
                            Перейти
                        </Button>
                    </Flex>
                ) : (
                    <Button leftIcon={<FaShoppingBasket />} onClick={handleAddToCart} h={"48px"} w={"220px"} bg={"brand.blue"} color="white">
                        Добавить в корзину
                    </Button>
                )}
                    <IconButton
                        aria-label="Добавить в избранное"
                        icon={isFavorited ? <FaHeart size="25px" color="red" /> : <FaRegHeart size="25px" color="blue" />}
                        onClick={handleAddToFavorites}
                        variant="ghost"
                        w="48px"
                        h="48px"
                        bg={isFavorited ? "blue.100" : "blue.100"}
                        ml="10px"
                        _hover={{
                            bg: isFavorited ? "blue.200" : "blue.200",
                        }}
                        _active={{
                            bg: isFavorited ? "blue.300" : "blue.300",
                        }}
                    />
                </Flex>
                <Text m={"0 auto"} fontSize={"small"}>Доставка 18 апреля</Text>
            </Flex>
                <Button
                    size="md"
                    height="48px"
                    width="320px"
                    bg={buttonBg}
                    color={buttonColor}
                    _hover={{ bg: 'blue.300' }}
                    onClick={handleBuyNow}
                >
                    Купить прямо сейчас
                </Button>
                <FAQLinks/>
                <DeliveryInfo/>
                
        </VStack>
    );
};

export default ProductActions;
