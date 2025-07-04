import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="container sider-container pb-[68px]">
      <div className="hero">
        <div className="hero-left">
          <h3 className="hero-title pb-[6px]">TOP COLLECTIONS 2022</h3>
          <h1 className="itle pb-[27px]">We Serve Your Dream Furniture</h1>
          <h4 className="hero-price pb-[35px]">Get 50% off all products</h4>
          <button className="hero-btn">SHOP NOW</button>
        </div>
        <div className="slider">
          <Swiper
            effect="cube"
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper w-[374px] h-[374px]"
          >
            <SwiperSlide className="slidelar">
              <img src="/images/png/Furniture 1.png" alt="Furniture 1" />
            </SwiperSlide>
            <SwiperSlide className="slidelar">
              <img src="/images/png/Furniture 1.png" alt="Furniture 2" />
            </SwiperSlide>
            <SwiperSlide className="slidelar">
              <img src="/images/png/Furniture 1.png" alt="Furniture 3" />
            </SwiperSlide>
            <SwiperSlide className="slidelar">
              <img src="/images/png/Furniture 1.png" alt="Furniture 4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
