import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperTop.css";

// import required modules
import { Autoplay } from "swiper";
const SwiperTop = () => {
  const swiperStyles = {
    height: "auto",
    
  };
  return (
    <div>
      <Swiper
        
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper h-[450px] md:h-[700px] lg:h-[900px] "
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/FBcCymT/drew-coffman-ll-Wjwo200fo-unsplash.jpg"
            alt=""
            className="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1648205213494-b8352cb3db1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1624949216539-cd17ef0a1a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/close-up-young-woman-taking-pictures-outdoors-professional-slr-camera_169016-10588.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph"
            alt=""
            className="image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperTop;
