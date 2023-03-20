import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel lg:w-3/4 mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/nM4xXDv/eugenivy-now-a0-XDlg-OF1u-A-unsplash.jpg"
            alt=""
            className="w-full h-3/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/fFJrYgW/sabesh-photography-R0f-Rn-Le-QXOI-unsplash.jpg"
            alt=""
            className="w-full h-3/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  left-1 right-1 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/jbB0cWZ/eugenivy-now-1-Bs2s-Z9f-D2-Q-unsplash.jpg"
            alt=""
            className="w-full h-3/4"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2  left-1 right-1 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
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
          <div className="absolute flex justify-between transform -translate-y-1/2  left-1 right-1 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Carousel;