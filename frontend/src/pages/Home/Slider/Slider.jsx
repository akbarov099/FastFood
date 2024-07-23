import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import slider1 from "../../../assets/images/slider.jpg";
import slider2 from "../../../assets/images/slider2.webp";
import slider3 from "../../../assets/images/slider3.webp";

export const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="slider__img" src={slider1} alt="slider 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider__img" src={slider2} alt="slider 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider__img" src={slider3} alt="slider 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
