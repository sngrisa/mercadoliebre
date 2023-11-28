import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Swiper.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


let swiper = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => {}}
                onSlideChange={() => {}}
            >
                <SwiperSlide>
                    <img src={'./../src/assets/Carrousel1.webp'} className="w-100" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'./../src/assets/Carrousel2.webp'} className="w-100" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'./../src/assets/Carrousel3.webp'} className="w-100" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default swiper;