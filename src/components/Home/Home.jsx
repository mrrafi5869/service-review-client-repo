import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCameraRetro, faPhone} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <div className="carousel w-full h-2/4">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/nM4xXDv/eugenivy-now-a0-XDlg-OF1u-A-unsplash.jpg"
            alt=""
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <section className="flex w-9/12 mx-auto my-20">
        <div className="h-2/5 w-3/5 relative mr-20">
            <img className="rounded-xl" src="https://i.ibb.co/1XRPsCN/natilyn-hicks-natilyn-photography-ab-Pr-Ovb-Ld-Aw-unsplash.jpg" alt="" />
            <img className="w-3/5 top-64 mr-10 left-80 border-8 rounded-lg absolute" src="https://i.ibb.co/Cvy198w/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg" alt="" />
        </div>
        <div className="mx-14">
            <h3 className="text-3xl italic font-semibold text-yellow-800">Why choose Us???</h3>
            <h1 className="text-5xl font-serif my-5 text-gray-400">Adding the memories of <br /> every moment</h1>
            <div className="flex my-10">
            <FontAwesomeIcon icon={faCheckCircle} className="mx-3 text-3xl bg-gray-400 p-4 rounded-xl" />
                <div>
                    <h3 className="text-2xl font-semibold">Professional</h3>
                    <p className="text-gray-500 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem assumenda provident ad aliquam sint</p>
                </div>
            </div>
            <div className="flex my-10">
            <FontAwesomeIcon icon={faCameraRetro} className="mx-3 text-3xl bg-gray-400 p-4 rounded-xl" />
                <div>
                    <h3 className="text-2xl font-semibold">Experienced Photographer</h3>
                    <p className="text-gray-500 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem assumenda provident ad aliquam sint</p>
                </div>
            </div>
            <div className="flex my-10">
            <FontAwesomeIcon icon={faPhone} className="mx-3 text-3xl bg-gray-400 p-4 rounded-xl" />
                <div>
                    <h3 className="text-2xl font-semibold">Support 24/7</h3>
                    <p className="text-gray-500 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem assumenda provident ad aliquam sint</p>
                </div>
            </div>
        </div>
      </section>
      <section className="w-9/12 mx-auto">
        <div>
          <img className="h-3/4 w-full" src="https://i.ibb.co/qy9ypP8/jakob-owens-DQPP9r-VLYGQ-unsplash.jpg" alt="" />
          <h1>Want to join with us?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis assumenda recusandae quo id eligendi officiis hic beatae dolorum nisi!</p>
          <button></button>
          <button></button>
        </div>
      </section>
    </div>
  );
};

export default Home;
