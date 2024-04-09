import React from 'react'
import IconBuyers from '../../assets/icon.png'
import flag from "../../assets/rus-flag.png"
import SearchLine from '../SearchLine/SearchLine';
import { Flex, Icon, Text } from '@chakra-ui/react'
import IconWithTitle from './IconWithTitle';
import { BsBoxSeam, BsBasket3, BsHeart, BsEmojiSmile } from "react-icons/bs";
import Catalog from './Catalog';
import IconTitleDropMenu from './IconTitleDropMenu';

function Header() {
    const isAuthentificated = true;
    return (
        <>
            <Flex justifyContent={'center'} w={'100%'}>
                <Flex px={4} py={2} alignItems={'center'} w={'80%'}>
                    <Text fontFamily={'"Tilt Neon", sans-serif;'} fontSize={36} mx={4}>Buyers</Text>
                    <Catalog />
                    <SearchLine />
                    <Flex>
                        <IconTitleDropMenu
                            icon={BsEmojiSmile}
                            text={'Nuratan'}
                            count={6}
                            isAuthentificated={isAuthentificated}
                        />
                        <IconWithTitle icon={BsBoxSeam} text={'Заказы'} count={3} isAuthentificated={isAuthentificated}/>
                        <IconWithTitle icon={BsHeart} text={'Избранное'} count={2} isAuthentificated={isAuthentificated}/>
                        <IconWithTitle icon={BsBasket3} text={'Корзина'} count={1} isAuthentificated={isAuthentificated}/>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default Header