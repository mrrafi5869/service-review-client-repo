import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ImageSwiper.css";

// import required modules
import { EffectCoverflow } from "swiper";

const ImageSwiper = () => {
  return (
    <div className="w-9/12 mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/professional-young-photographer-taking-photos-indian-model-studio-with-leight_231208-3803.jpg?size=626&ext=jpg&ga=GA1.2.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/positive-female-tourist-with-photo-camera-travel-backpack_613910-627.jpg?size=626&ext=jpg&ga=GA1.2.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/fashionable-woman-casual-jeans-enjoying-photoshoot-river-wall_197531-6308.jpg?size=626&ext=jpg&ga=GA1.2.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/young-pretty-smiling-happy-woman-wearing-white-blouse-sitting-against-wall-straw-hat_285396-4570.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305131.jpg?size=626&ext=jpg&ga=GA1.2.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/attractive-stylish-young-woman-khaki-dress-desert-traveling-africa-safari-wearing-hat-backpack-taking-photo-vintage-camera_285396-9174.jpg?size=626&ext=jpg&ga=GA1.2.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/woman-holding-camera-posing-front-car_23-2148585271.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/positive-female-tourist-with-photo-camera-travel-backpack_613910-649.jpg?size=626&ext=jpg&ga=GA1.2.207808977.1658386615&semt=sph" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
