import React, { useState } from 'react'
import styles from './ProductCard.module.scss'
import { Box, Image, Button, Text, Flex, Center, Icon, Card } from '@chakra-ui/react'
import { StarIcon, ChatIcon } from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {dateFormat} from '../../helpers/dateFormat.js'


const ProductCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    let isFavorite = props.isFavorite
    // const property = {
    //     imageUrl: 'https://cdn.leroymerlin.ru/lmru/image/upload/f_auto/q_auto/dpr_1.0/c_pad/w_1000/h_1000/v1711535077/lmcode/pqAx59XDzkmBgWH_oBNxcg/86858614_01.png',
    //     imageAlt: 'KUDO image',
    //     price: 360.99,
    //     oldPrice: 399.99,
    //     rating: 4.8,
    //     reviews: 118,
    //     seller: 'KUDO bishkek',
    //     description: 'Грунт-эмаль 3 в 1 по ржавчине KUDO высокопрочная ...',
    //     date: '11 апреля',
    //     isFavorite:{false}
    // }
    return (
        <>
            <Box me={2} pb={2} maxWidth={'3xs'}>
                <Box
                    className={styles.main}
                    _hover={{
                        color: "blue.400"
                    }}
                >
                    {/* картинка товара */}
                    <Center boxSize='3xs' bg='gray.100' borderRadius='lg' position={'relative'}>
                        <Image
                            src={props.imageUrl}
                            alt={props.imageAlt}
                            maxH={'3xs'}
                        />
                        <Icon
                            as={(isFavorite || isHovered) ? AiFillHeart : AiOutlineHeart}
                            boxSize={6}
                            position="absolute" top={4} right={4} zIndex={0} //here removed z index from 2 =>0 because was overlapping with my caatalog
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={()=>isFavorite=true}
                            color={(isFavorite || isHovered) ? 'red.500' : 'gray.500'} />
                    </Center>
                    {/* блок с ценой */}
                    <Flex mt={2}>
                        <Text fontSize='lg' fontWeight={'semibold'} color={'green.400'} ms={2}> {props.price}сом</Text>
                        <Text fontSize='xs' as='s' ms={2} color={'gray.400'}> {props.oldPrice}сом</Text>
                        <Text fontSize='xs' color='red' ms={2}> -{((parseFloat(props.oldPrice) - parseFloat(props.price)) / (parseFloat(props.price) / 100)).toFixed(1)}% </Text>
                    </Flex>
                    {/* продавец и краткое описание */}
                    <Box overflow={'hidden'} h={'6rem'}>
                        <ChakraLink
                            className={styles.seller}
                            color={'black'}
                            to='/'
                            fontSize={'sm'}
                            _hover={{
                                color: 'green.500',
                                textDecoration: 'none'
                            }}>
                            {props.seller}
                        </ChakraLink><br />
                        <ChakraLink 
                            className={styles.desc}
                            as={ReactRouterLink} to={`/product/${props.index}`}
                            fontSize={'sm'}
                            _hover={{
                                color: 'blue.400',
                                textDecoration: 'none'
                            }}>
                            {props.description}
                        </ChakraLink>
                    </Box>
                    {/* рейтинг и отзывы */}
                    <Flex alignItems={'center'} mb={4}>
                        <StarIcon color={'yellow.300'} /><Text mx={2} fontSize={'sm'} color={'gray.500'}>{props.rating}</Text>
                        <ChatIcon color={'gray.500'} /><Text mx={2} fontSize={'sm'} color={'gray.500'}>{props.reviews}</Text>
                        {/* так как это не компонент от chakra ui используем var чтобы получить цвета chakra-colors */}
                    </Flex>
                    {/* кнопка купить с датой доставки */}
                </Box>
                <Button w={'100%'} bg={'brand.blue'} color={'white'}>{dateFormat(props.date)}</Button>
            </Box>
        </>
    )
}

export default ProductCard