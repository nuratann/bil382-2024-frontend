import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import IconBuyers from '../../assets/icon.png'
import flag from "../../assets/rus-flag.png"
import Search from '../SearchLine/Search';
import { Flex, Icon, Text } from '@chakra-ui/react'
import IconWithTitle from './IconWithTitle';
import { BsBoxSeam, BsBasket3, BsHeart, BsEmojiSmile } from "react-icons/bs";
import Catalog from './Catalog';
import IconTitleDropMenu from './IconTitleDropMenu';
import { Link } from 'react-router-dom';

function Header() {
    const isAuthentificated = true;
    return (
        <>
            <Flex justifyContent={'center'} w={'100%'}>
                <Flex px={4} py={2} alignItems={'center'} w={'80%'}>
                    <Link to='/'><Text color={'brand.blue'} fontFamily={'"Tilt Neon", sans-serif;'} fontSize={36} me={4}>Buyers</Text></Link>
                    <Catalog />
                    <Search />
                    <Flex>
                        <IconTitleDropMenu
                            icon={BsEmojiSmile}
                            text={'Nuratan'}
                        />
                        <Link to='/profile?init=Мои заказы'>
                        <IconWithTitle icon={BsBoxSeam} text={'Заказы'} index={1} />
                        </Link>
                        <Link to='/favorites'>
                            <IconWithTitle icon={BsHeart} text={'Избранное'} index={2} />
                        </Link>
                        <Link to='/basket_page'>
                        <IconWithTitle icon={BsBasket3} text={'Корзина'} index={3} />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default Header