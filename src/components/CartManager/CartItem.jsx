import React, { useEffect, useState } from 'react';
import ProductService from '../../api/ProductService';
import { Checkbox, Flex, Text, Image, Icon, IconButton, Box, Stack, Input } from '@chakra-ui/react';
import { DeleteIcon, MinusIcon, AddIcon } from '@chakra-ui/icons';
import { FaHeart } from 'react-icons/fa';


const CartItem = ({selectedItems, productId, setSelectedItems, isFavorite, handleRemove, handleIncrement, handleDecrement, quantity}) => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await ProductService.getProduct(productId);
                setProduct(productData);
            } catch (error) {
                console.error('Failed to fetch product', error);
            }
        }
        fetchProduct();
    },[])
    return (
        <>
        {product!==null?
            <Flex key={product.id} w="768px" h="auto" p="5px 0" align="center" m="10px 0">
                    <Checkbox size="lg" colorScheme="blue" mr={8} isChecked={selectedItems.has(product.id)} onChange={() => {
                      const newSelectedItems = new Set(selectedItems);
                      if (selectedItems.has(product.id)) {
                        newSelectedItems.delete(product.id);
                      } else {
                        newSelectedItems.add(product.id);
                      }
                      setSelectedItems(newSelectedItems);
                    }} />
                    <Image src={JSON.parse(product.mediaLinks)[0].url} alt={'img'} w="69px" h="92px" objectFit="cover" mr={10} />
                    <Box flex="1" mr={4} maxBlockSize="320px">
                      <Text fontWeight="medium" fontSize="sm" mb="8px">{product.title}</Text>
                      {product.isDiscounted && (
                        <Badge colorScheme="red" mb="8px">
                          <Icon as={FaFire} color="red" mr={1} /> Распродажа
                        </Badge>
                      )}
                      <Box>
                        <IconButton aria-label="Добавить в избранное" icon={<FaHeart />} onClick={() => console.log('Toggle like')} variant="ghost" colorScheme={isFavorite ? 'red' : 'gray'} size="sm" />
                        <IconButton aria-label="Удалить из корзины" icon={<DeleteIcon />} onClick={() => handleRemove(product.id)} variant="ghost" size="sm" />
                      </Box>
                    </Box>
                    <Box flex="1" mr={4} textAlign="right">
                      <Text color="red.500" fontWeight="bold" textDecoration={'line-through'}>{product.oldPrice * quantity} с</Text>
                      <Text color="green.500" fontWeight="bold">{product.price * quantity} с</Text>
                    </Box>
                    <Stack direction="row" alignItems="center" mr={4}>
                      <IconButton icon={<MinusIcon />} aria-label="Уменьшить количество" onClick={() => handleDecrement(product.id)} size="sm" />
                      <Input value={quantity} onChange={(e) => console.log('Change Quantity')} size="sm" maxWidth="50px" />
                      <IconButton icon={<AddIcon />} aria-label="Увеличить количество" onClick={() => handleIncrement(product.id)} size="sm" />
                    </Stack>
                  </Flex>
                  :
                  <>
                  Loading...
                  </>}
        </>
    );
};

export default CartItem;