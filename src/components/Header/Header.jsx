import IconBuyers from '../../assets/icon.png'
import flag from "../../assets/rus-flag.png"
import SearchLine from '../SearchLine/SearchLine';
import { Flex, Icon, Text } from '@chakra-ui/react'
import IconWithTitle from './IconWithTitle';
import { BsBoxSeam, BsBasket3, BsHeart, BsEmojiSmile } from "react-icons/bs";
import Catalog from './Catalog';

function Header() {
    return (
        <>
            <Flex justifyContent={'center'} w={'100%'}>
                <Flex px={4} py={2} alignItems={'center'} w={'80%'}>
                    {/* <img src={IconBuyers} alt="Website Logo" /> */}
                    <Text fontFamily={'"Tilt Neon", sans-serif;'} fontSize={36} mx={4}>Buyers</Text>
                    <Catalog />
                    <SearchLine />
                    <Flex>
                        <IconWithTitle icon={BsEmojiSmile} text={'Nuratan'} count={6} />
                        <IconWithTitle icon={BsBoxSeam} text={'Заказы'} count={3} />
                        <IconWithTitle icon={BsHeart} text={'Избранное'} count={2} />
                        <IconWithTitle icon={BsBasket3} text={'Корзина'} count={1} />
                    </Flex>
                    {/* <div className="language-switch">
                    <img src={flag} alt="image flag" />
                    <select className="select-language">
                        <option value="language1">Русский</option>
                        <option value="language2">Кыргызча</option>
                        <option value="language3">English</option>
                    </select>
                </div> */}
                </Flex>
            </Flex>
        </>
    );
}

export default Header