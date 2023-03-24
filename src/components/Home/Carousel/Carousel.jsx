import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel lg:w-3/4 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1598218674125-61de0837f8ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHNscnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
            src="https://images.unsplash.com/photo-1624949216539-cd17ef0a1a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
            src="https://images.unsplash.com/photo-1648205213494-b8352cb3db1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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