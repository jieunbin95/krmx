import React from "react";
import "../component/mainSlide.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export const MainSlide = () => {
  return (
    <>
      <div>
        <Swiper
          pagination={true}
          navigation={true}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>배너1</SwiperSlide>
          <SwiperSlide>배너2</SwiperSlide>
          <SwiperSlide>배너3</SwiperSlide>
          <SwiperSlide>배너4</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
