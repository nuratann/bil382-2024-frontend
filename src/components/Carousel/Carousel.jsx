import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Flex, HStack, VStack } from '@chakra-ui/react'
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
            <Flex w={'100%'} justify={'center'}>
                <HStack w={'80%'} spacing={8}>
                    <Slider className={styles.slider} {...settings}>
                        <div className={styles.slide}>
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c5cbd49579303.58b886a0487a0.jpg' alt='Реклама' />
                        </div>
                        <div className={styles.slide}>
                            <img src='https://i.pinimg.com/originals/43/05/eb/4305ebbe02c3eb550ff3d72b8e9d31c8.jpg' alt='Реклама' />
                        </div>
                        <div className={styles.slide}>
                            <img src='https://payload.cargocollective.com/1/14/471930/7126391/puma_03_1400.jpg' alt='Реклама' />
                        </div>
                        <div className={styles.slide}>
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/95b1fa51478567.58eec8c69df37.jpg' alt='Реклама' />
                        </div>
                        <div className={styles.slide}>
                            <img src='https://bugaga.ru/uploads/posts/2018-09/1537803466_fotomanipulyacii-22.jpg' alt='Реклама' />
                        </div>
                        <div className={styles.slide}>
                            <img src='https://www.youloveit.ru/uploads/posts/2018-09/1536336365_youloveit_ru_supergeroi_v_reklame08.jpg' alt='Реклама' />
                        </div>
                    </Slider>
                    <VStack  h={'100%'} w={'30%'}>
                        <div className={styles.adBlock}>
                            <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dress-up-product-display-ad-design-template-5f4018728bffa9169409a64ea758b795_screen.jpg?ts=1606822293' />
                        </div>
                        <div className={styles.adBlock}>
                            <img src='https://i.pinimg.com/736x/ac/35/23/ac35239e31ed6bd301f79e093e8598fb.jpg' />
                        </div>
                    </VStack>
                </HStack>
            </Flex>
        </>
    );

}

export default MainBlock