import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        <div className="main-container">
            {/* <div className="category-sidebar">
                {Array.from({ length: 9 }, (_, index) => (
                    <div key={index} className="category-item">
                        <select>
                            <option value="category">Category {index + 1}</option>
                        </select>
                    </div>
                ))}
            </div> */}
            <Slider className='mainSlider' {...settings}>
                <div className='oneAd'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c5cbd49579303.58b886a0487a0.jpg' alt='Реклама'/>
                </div>
                <div className='oneAd'>
                    <img src='https://i.pinimg.com/originals/43/05/eb/4305ebbe02c3eb550ff3d72b8e9d31c8.jpg' alt='Реклама'/>
                </div>
                <div className='oneAd'>
                <img src='https://payload.cargocollective.com/1/14/471930/7126391/puma_03_1400.jpg' alt='Реклама'/>
                </div>
                <div className='oneAd'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/95b1fa51478567.58eec8c69df37.jpg' alt='Реклама'/>
                </div>
                <div className='oneAd'>
                    <img src='https://bugaga.ru/uploads/posts/2018-09/1537803466_fotomanipulyacii-22.jpg' alt='Реклама'/>
                </div>
                <div className='oneAd'>
                <img src='https://www.youloveit.ru/uploads/posts/2018-09/1536336365_youloveit_ru_supergeroi_v_reklame08.jpg' alt='Реклама'/>
                </div>
            </Slider>
            <div className="small-ads">
                <div className="ad-block">
                    <img src='https://img.miumag.pl/0003/d9105.jpg'/>
                </div>
                <div className="ad-block">
                    <img src='https://img.miumag.pl/0003/d9105.jpg'/>
                </div>
                <div className="ad-block">
                    <img src='https://img.miumag.pl/0003/d9105.jpg'/>
                </div>
            </div>
        </div>
    );

}

export default MainBlock