import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { BsAirplane, BsPhone } from "react-icons/bs";
import { PiTShirt,PiFlowerLotusLight} from "react-icons/pi";
import { TbHorseToy } from "react-icons/tb";
import { CgCrown } from "react-icons/cg";
import { SlPresent } from "react-icons/sl";
import { LuBanana, LuMicrowave } from "react-icons/lu";


const Navbar = () => {
    const navs = [
        { text: 'Билеты, отели, туры', icon: <BsAirplane/> },
        { text: 'Одежда и обувь', icon: <PiTShirt/>  },
        { text: 'Электроника', icon: <BsPhone/>  },
        { text: 'Дом и сад', icon: <PiFlowerLotusLight/>  },
        { text: 'Детские товары', icon: <TbHorseToy/>   },
        { text: 'Премиум', icon: <CgCrown/>   },
        { text: 'Подарочные сертификаты', icon: <SlPresent/>  },
        { text: 'Продукты питания', icon: <LuBanana/>   },
        { text: 'Бытовая техника', icon: <LuMicrowave/>   }
    ]
    return (
        <>
            <Flex w={'100%'} justifyContent={'center'}>
                <Flex maxW={'80%'}>
                    {navs.map((nav, index) => (
                        <Button
                            leftIcon={nav.icon}
                            key={index}
                            bg={'white'}
                            textAlign={'left'}
                            fontSize={14}
                            justifyContent={'flex-start'}
                            _hover={{ color: 'brand.hoverblue', bg: 'white' }}
                        >
                            {nav.text}
                        </Button>
                    ))}
                </Flex>
            </Flex>
        </>

    );
}
export default Navbar;
