import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Custom = () => {
  return (
    <>
      <h2 className="text-center mb-[90px]">What Our Customer Says</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={555}
        loop={true}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="custom w-[816px]"
      >
        <SwiperSlide>
          <img
            src="/images/png/opanibasharasi.png"
            alt=""
            className="custom-img"
          />
          <p className="custom-info mb-[32px]">
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </p>
          <h3 className="custom-title mb-[8px]">Angelina Joly</h3>
          <h5 className="custom-mini-title">Co-founder</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/png/opanibasharasi.png"
            alt=""
            className="custom-img"
          />
          <p className="custom-info mb-[32px]">
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </p>
          <h3 className="custom-title mb-[8px]">Angelina Joly</h3>
          <h5 className="custom-mini-title">Co-founder</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/png/opanibasharasi.png"
            alt=""
            className="custom-img"
          />
          <p className="custom-info mb-[32px]">
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </p>
          <h3 className="custom-title mb-[8px]">Angelina Joly</h3>
          <h5 className="custom-mini-title">Co-founder</h5>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/png/opanibasharasi.png"
            alt=""
            className="custom-img"
          />
          <p className="custom-info mb-[32px]">
            I like Furniking.com and as compared to other company it's polices
            and customers support is very good easy to reach., also many time
            they unable to delivered. The ultricies are pregnant while the quis
            is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </p>
          <h3 className="custom-title mb-[8px]">Angelina Joly</h3>
          <h5 className="custom-mini-title">Co-founder</h5>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Custom;
