import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import IconBuyers from '../../assets/icon.png'
import flag from "../../assets/rus-flag.png"
import Search from '../SearchLine/Search';
import { Flex, Icon, Text, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import IconWithTitle from './IconWithTitle';
import { BsBoxSeam, BsBasket3, BsHeart, BsEmojiSmile } from "react-icons/bs";
import Catalog from './Catalog';
import IconTitleDropMenu from './IconTitleDropMenu';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Catalog.module.scss';
import { FiGlobe } from 'react-icons/fi';




function Header() {
    const isAuthentificated = true;
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('nextlocal', language)
    }
    return (
        <Flex justifyContent={'center'} w={'100%'}>
            <Flex px={4} py={2} alignItems={'center'} w={'80%'}>
                <Link to='/'>
                    <Text color={'brand.blue'} fontFamily={'"Tilt Neon", sans-serif;'} fontSize={36} me={4}>Buyers</Text>
                </Link>
                <Catalog />
                <Search />
                <Flex alignItems="center">
                    <IconTitleDropMenu icon={BsEmojiSmile}/>
                    <Link to='/profile?init=Мои заказы'>
                        <IconWithTitle icon={BsBoxSeam} text={t("headerlist.list2")} index={1} />
                    </Link>
                    <Link to='/favorites'>
                        <IconWithTitle icon={BsHeart} text={t("headerlist.list3")} index={2} />
                    </Link>
                    <Link to='/basket_page'>
                        <IconWithTitle icon={BsBasket3} text={t("headerlist.list4")} index={3} />
                    </Link>


                    <Menu placement="bottom">
                        <MenuButton as={Flex} alignItems="center" ml={4} mt="5px">
                            <FiGlobe size={25} color="gray.400" style={{ opacity: 0.7 }} />
                        </MenuButton>

                        <MenuList>
                            <MenuItem onClick={() => changeLanguage("ru")}>Русский</MenuItem>
                            <MenuItem onClick={() => changeLanguage("kg")}>Кыргызча</MenuItem>
                            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>

                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Header