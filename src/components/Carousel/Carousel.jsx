import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Flex, HStack, VStack, Box, Image } from '@chakra-ui/react'
import styles from './Carousel.module.scss'


function MainBlock() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <>
            <Flex w={'100%'} justify={'center'} mt={8}>
                <VStack w={'90%'} h={'100%'} spacing={8}>
                    <Box w={'100%'} borderRadius={10}>
                         <Image borderRadius={10} src='https://ir.ozone.ru/s3/cms/be/t08/wc2900/kyrgyz_desk.jpg' />
                    </Box>
                <HStack w={'100%'} spacing={8}>
                    <div className={styles.adBlock}>
                        <img src='https://ir.ozone.ru/s3/cms/8d/t3b/wc800/336_398.png' />
                    </div>
                    <Slider className={styles.slider} {...settings}>
                        <div className={styles.slide}>
                            <img src='https://cdn.vox-cdn.com/thumbor/_T9VGloBPDNa_7WXs5QCyWA6d3c=/0x0:1100x630/1200x800/filters:focal(465x196:641x372)/cdn.vox-cdn.com/uploads/chorus_image/image/58744353/Screen_Shot_2018_02_19_at_11.56.59_AM.0.png' alt='Реклама' />
                        </div>
                        <div className={styles.slide}>
                            <img src='https://payload.cargocollective.com/1/14/471930/7126391/puma_03_1400.jpg' alt='Реклама' />
                        </div>
                        <div className={styles.slide}>
                            <img src='https://bugaga.ru/uploads/posts/2018-09/1537803466_fotomanipulyacii-22.jpg' alt='Реклама' />
                        </div>
                        <div className={styles.slide}>
                            <img src='https://storage.googleapis.com/webdesignledger.pub.network/WDL/51e90cb9-45226_7085069_1387723_4143ec63_image-970x653.jpg' alt='Реклама' />
                        </div>
                    </Slider>
                    <div className={styles.adBlock}>
                        <img src='https://ir.ozone.ru/s3/blackfriday-widgets-api-images/img/wc800/396_counter_desktop_backgroundLastDay_68532617-2246-4a2b-9dd4-0709008b546d.png' />
                    </div>
                </HStack>
                    <Box>
                        <Image borderRadius={10} src='https://ir.ozone.ru/s3/cms/46/t87/wc2900/imidge_1416x100_1_1.png'/>
                    </Box>
                      
                </VStack>
            </Flex>
        </>
    );

}

export default MainBlock