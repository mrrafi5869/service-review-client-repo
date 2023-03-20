import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel lg:w-3/4 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/professional-camera-blurred_169016-10249.jpg?w=1380&t=st=1679296355~exp=1679296955~hmac=659d769e3842eda24748746170efd0148d9f3ebb5ddcc32adb9311c2237c5263"
            alt=""
            className="w-full h-3/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-3/4">
            <a href="#slide4" className="btn btn-circle btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/side-view-specialized-photographer-working-studio_23-2150247220.jpg?w=1380&t=st=1679296393~exp=1679296993~hmac=71b932ccd5dce88da951ce8a337f2b1b8b099b2891df525b8f2e8479367807e8"
            alt=""
            className="w-full h-3/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  left-1 right-1 top-3/4">
            <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/backpacker-relax-mountain-with-camera-adn-sunset_1150-7755.jpg?w=1380&t=st=1679296416~exp=1679297016~hmac=f1988eaf9bf5043df6f25dc2bcb67f2a487f545359e50197595079983a10922f"
            alt=""
            className="w-full h-3/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  left-1 right-1 top-3/4">
            <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/FBcCymT/drew-coffman-ll-Wjwo200fo-unsplash.jpg"
            alt=""
            className="w-full h-3/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  left-1 right-1 top-3/4">
            <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Carousel;