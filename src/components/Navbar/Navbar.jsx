import React from 'react'
import { Flex, Button, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { BsAirplane, BsPhone } from "react-icons/bs";
import { PiTShirt, PiFlowerLotusLight } from "react-icons/pi";
import { TbHorseToy } from "react-icons/tb";
import { CgCrown } from "react-icons/cg";
import { SlPresent } from "react-icons/sl";
import { LuBanana, LuMicrowave } from "react-icons/lu";
import { BsHeart } from 'react-icons/bs';
import NavbarRu from './NavbarDataRu.json';
import NavbarEn from './NavbaerDataEn.json';
import NavbarKg from './NavbarDataKg.json';





const Navbar = () => {

    const { i18n } = useTranslation();
    const navs = i18n.language === 'en' ? NavbarEn :
        i18n.language === 'ru' ? NavbarRu :
            NavbarKg;

    const routes = ['/categories/Красота и здоровье', '/categories/Одежда', '/categories/Электроника', '/categories/Дом и Сад', '/categories/Детские товары', '/categories/Детские товары', '/categories/Продукты питания', '/categories/Бытовая техника'];


    return (
        <div className="navbar" style={{ gap: '1px', display: 'flex', marginLeft: "90px", padding: '0px' }}>
            {Object.keys(navs).map((key, index) => (
                <Flex key={index} gap="0px" m='0px' padding={'0px'} alignItems={'stretch'}>
                    <Link  href={routes[index]} >
                        <Button
                            bg={'white'}
                            textAlign={'left'}
                            fontSize={13}
                            justifyContent={'flex-start'}
                            _hover={{ color: 'brand.hoverblue', bg: 'white' }}
                            leftIcon={getIcon(key, '22px')}
                            m="0px"
                            p="0px"
                            gap="0px"

                        >
                            {navs[key].text}
                        </Button>
                    </Link>
                </Flex>
            ))}
        </div>
    );
}
export default Navbar;

const getIcon = (key, size) => {
    switch (key) {
        case 'beautyAndHealth':
            return <BsHeart fontSize={size} />;
        case 'electronics':
            return <BsPhone fontSize={size} />;
        case 'clothingAndFootwear':
            return <PiTShirt fontSize={size} />;
        case 'homeAndGarden':
            return <PiFlowerLotusLight fontSize={size} />;
        case 'babyProducts':
            return <TbHorseToy fontSize={size} />;
        case 'premium':
            return <CgCrown fontSize={size} />;
        case 'groceries':
            return <LuBanana fontSize={size} />;
        case 'homeAppliances':
            return <LuMicrowave fontSize={size} />;
        default:
            return null;
    }
};
