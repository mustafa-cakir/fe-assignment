import React, { useState } from 'react';
import SwiperCore, { Keyboard, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slideImage1 from '../../../assets/images/slide/slide1.png';
import slideImage2 from '../../../assets/images/slide/slide2.jpg';
import slideImage3 from '../../../assets/images/slide/slide3.jpg';
import slideImage4 from '../../../assets/images/slide/slide4.jpg';
import slideImage5 from '../../../assets/images/slide/slide5.jpg';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import './Style.scss';

SwiperCore.use([Pagination, Keyboard, EffectCoverflow]);

const HomeSlider = () => {
    const [swiper, setSwiper] = useState(null);

    const slides = [
        {
            id: 1,
            image: slideImage1,
            title: 'Become a legendary Viking warrior raised on tales of battle and glory.',
        },
        {
            id: 2,
            image: slideImage2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
            id: 3,
            image: slideImage3,
            title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        },
        {
            id: 4,
            image: slideImage4,
            title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
        },
        {
            id: 5,
            image: slideImage5,
            title: 'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
        },
    ];

    const prevBtnClickHandler = () => {
        if (swiper) swiper.slidePrev();
    };

    const nextBtnClickHandler = () => {
        if (swiper) swiper.slideNext();
    };

    return (
        <div className="home-slider">
            <Swiper
                effect="coverflow"
                navigation
                pagination={{ clickable: true }}
                spaceBetween={15}
                centeredSlides
                loop
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 55,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                onInit={swiperInstance => {
                    setSwiper(swiperInstance);
                }}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-inner">
                            <img src={slide.image} alt={slide.id} className="slide-image" />
                            <div className="slide-title">{slide.title}</div>
                            <div className="shadow-iner" />
                        </div>
                        <div className="shadow-bottom" />
                    </SwiperSlide>
                ))}
                <div className="nav-btn-container">
                    <div className="container">
                        <button type="button" className="nav-btn btn-prev" onClick={prevBtnClickHandler}>
                            PREV
                        </button>
                        <button type="button" className="nav-btn btn-next" onClick={nextBtnClickHandler}>
                            NEXT
                        </button>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default HomeSlider;
