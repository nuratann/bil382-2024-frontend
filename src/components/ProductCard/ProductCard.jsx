import React, { useState } from 'react'
import styles from './ProductCard.module.scss'
import { Box, Image, Button, Text, Flex, Center, Icon, Card } from '@chakra-ui/react'
import { StarIcon, ChatIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {dateFormat} from '../../helpers/dateFormat.js'
import { motion } from 'framer-motion';
import useFavoritesStore from '../../stores/useFavoritesStore.js'
import { CiDeliveryTruck } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { IoChatbubble } from "react-icons/io5";
import useSellersStore from '../../stores/useSellersStore.js'
import {morph} from '../../helpers/morph.js'


// const MotionIcon = motion(Icon);



const ProductCard = (props) => {
    const favoritesStore = useFavoritesStore((state) => state)
    const [isHovered, setIsHovered] = useState(false);
    const getSellerById  = useSellersStore(state=>state.getSellerById)
    let isFavorite = props.product.isFavorite
    const today = new Date(); 
    const image = JSON.parse(props.product.mediaLinks)[0]
    
    const favoriteToggle=()=>{
        //TODO: addToFavorites
        props.product.isFavorite=! props.product.isFavorite
        isFavorite= props.product.isFavorite
        if(isFavorite){
            favoritesStore.addFavorite(props.product.id)
        }else{
            favoritesStore.removeFavorite(props.product.id)
        }
    }
    return (
        <>
            <Box me={2} mb={3} maxWidth={'3xs'} borderRadius={7}>
                <Box
                    className={styles.main}
                    _hover={{
                        color: "blue.400"
                    }}
                >
                    {/* картинка товара */}
                    <Center boxSize='3xs' bg='#f7f7f7' borderRadius='lg' position={'relative'}>
                        <ChakraLink
                            as={ReactRouterLink} to={`/product/${props.product.id}`}
                        >
                            <Image
                            borderRadius='lg'
                            src={image.url}
                            alt={image.type}
                            maxH={'3xs'}
                        />
                        </ChakraLink>
                        
                        <Box
                            as={motion.div}
                            m={0}
                            p={0}
                            position="absolute"
                            top={4}
                            right={4}
                            zIndex={0}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => favoriteToggle()}
                            whileTap={{ scale: 1.3, rotate: 9 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Icon 
                                as={(isFavorite || isHovered) ? AiFillHeart : AiOutlineHeart}
                                color={(isFavorite || isHovered) ? 'red.500' : 'gray.500'}
                                boxSize={6}
                            />
                        </Box>
                    </Center>
                    {/* блок с ценой */}
                    <Flex mt={2}>
                        <Text fontSize='lg' fontWeight={'semibold'} color={'#10C44C'} ms={2}> {props.product.price}сом</Text>
                        <Text fontSize='xs' as='s' ms={2} color={'gray.400'}> {props.product.oldPrice}сом</Text>
                        <Text fontSize='xs' color='red' ms={2}> -{((parseFloat(props.product.oldPrice) - parseFloat(props.product.price)) / (parseFloat(props.product.price) / 100)).toFixed(1)}% </Text>
                    </Flex>
                    {/* продавец и краткое описание */}
                    <Box overflow={'hidden'} mb={2}>
                        <ChakraLink
                            className={styles.seller}
                            color={'black'}
                            to={`/sellers/${props.product.sellerId}`}
                            fontSize={'sm'}
                            _hover={{
                                color: 'green.500',
                                textDecoration: 'none'
                            }}>
                            {getSellerById(props.product.sellerId).businessName}
                        </ChakraLink><br />
                        <ChakraLink 
                            className={styles.desc}
                            as={ReactRouterLink} to={`/product/${props.product.id}`}
                            fontSize={'sm'}
                            fontFamily={'Montserrat'}
                            fontWeight={600}
                            _hover={{
                                color: 'blue.400',
                                textDecoration: 'none'
                            }}>
                            {props.product.description.slice(3,45)+"..."}
                        </ChakraLink>
                    </Box>
                    {/* рейтинг и отзывы */}
                    <Flex alignItems={'center'} mb={4}>
                        <Icon as={TiStarFullOutline} boxSize={'19px'} color={'#FFA800'}/><Text ms={1} me={3} fontWeight={'bold'} fontSize={'12'} color={'#99A3AE'}>{props.product.rating}</Text>
                        <Icon as={ IoChatbubble} boxSize={'16px'} color={'#99A3AE'}/><Text mx={1} fontSize={'12'} fontWeight={'bold'} color={'#99A3AE'}>{props.product.reviews.length} {morph(props.product.reviews.length)}</Text>
                        {/* так как это не компонент от chakra ui используем var чтобы получить цвета chakra-colors */}
                    </Flex>
                    {/* кнопка купить с датой доставки */}
                </Box>
                <Button 
                    w={'100%'} 
                    bg={'brand.blue'} 
                    color={'white'} 
                    fontFamily={'Montserrat'}
                    fontWeight={'bold'} 
                    fontSize={14}
                    borderRadius={10} 
                    h={'32px'}
                    >
                    <Icon as={CiDeliveryTruck} boxSize={5} me={2}/>
                    {dateFormat(new Date(today.getTime()+1000*60*60*24*props.product.deliveryDays))}
                </Button>
            </Box>
        </>
    )
}

export default ProductCard