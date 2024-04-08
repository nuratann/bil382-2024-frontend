import React, {useState} from 'react'
import styles from './ProductCard.module.scss'
import { Box, Image, Button, Text, Flex, Center, Icon} from '@chakra-ui/react'
import { StarIcon, ChatIcon } from '@chakra-ui/icons'
// import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


const ProductCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
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
            <Box m={2} maxWidth={'2xs'}>
            <Box 
                className={styles.main}
                _hover={{
                    color:"blue.400"
                }}
            >
                {/* картинка товара */}
                <Center boxSize='2xs' bg='gray.100' borderRadius='lg' position={'relative'}>
                    <Image 
                        src={props.imageUrl}
                        alt={props.imageAlt}          
                    />
                    <Icon 
                        as={(props.isFavorite||isHovered)?AiFillHeart:AiOutlineHeart} 
                        boxSize={6} 
                        position="absolute" top={4} right={4} zIndex={2} 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        color={(props.isFavorite||isHovered)?'red.500':'gray.500'}/>
                </Center>
                {/* блок с ценой */}
                <Flex mt={2}>
                    <Text fontSize='lg' fontWeight={'semibold'} color={'green.400'} ms={2}> {props.price}сом</Text>
                    <Text fontSize='sm' as='s' ms={2} color={'gray.400'}> {props.oldPrice}сом</Text>
                    <Text fontSize='sm' color='red' ms={2}> -{((parseFloat(props.oldPrice)-parseFloat(props.price))/(parseFloat(props.price)/100)).toFixed(1)}% </Text>
                </Flex>
                {/* продавец и краткое описание */}
                <Box>
                    <ChakraLink 
                        className={styles.seller}
                        color={'black'}
                        to='/' 
                        fontSize={'sm'}
                        _hover={{
                            color:'green.500',
                            textDecoration:'none'
                        }}>
                        {props.seller}
                    </ChakraLink><br/>
                    <ChakraLink 
                        className={styles.desc}
                        to='/' 
                        fontSize={'sm'}
                        _hover={{
                            color:'blue.400',
                            textDecoration:'none'
                        }}>
                        {props.description}
                    </ChakraLink>
                </Box>
                {/* рейтинг и отзывы */}
                <Flex alignItems={'center'} mb={4}>
                    <StarIcon color={'yellow.300'}/><Text mx={2} fontSize={'sm'} color={'gray.500'}>{props.rating}</Text>
                    <ChatIcon color={'gray.500'}/><Text mx={2} fontSize={'sm'} color={'gray.500'}>{props.reviews}</Text>
                    {/* так как это не компонент от chakra ui используем var чтобы получить цвета chakra-colors */}
                </Flex>
                {/* кнопка купить с датой доставки */}
                </Box>
                <Button w={'100%'} bg={'blue.400'} color={'white'}>{props.date}</Button>
            </Box>
        </>
    )
}

export default ProductCard