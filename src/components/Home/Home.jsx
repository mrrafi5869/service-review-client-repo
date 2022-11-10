import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCameraRetro, faPhone, faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import './Home.css'
import Service from "../Service/Service";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle('Home')
  useEffect(() => {
    fetch('http://localhost:5000/service')
    .then(res => res.json())
    .then(data => setServices(data))
  } , [])
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
      {/* services */}
      <div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 my-52">
              {
                services.map(service => <Service 
                  key={service._id}
                  service={service}
                ></Service>)
              }
          </div>
          <div className="text-center">
                <Link to='/allservices' className="btn btn-warning rounded-lg font-semibold">See All</Link>
          </div>
      </div>
      {/* Reason for hire us */}
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
      {/* gallery/Photos */}
      <section className="w-9/12 mx-auto relative my-32">
          <div className="image">
            <img src="https://i.ibb.co/qy9ypP8/jakob-owens-DQPP9r-VLYGQ-unsplash.jpg" alt="" className="w-full rounded-xl" />
          </div>
          <div className="absolute top-80 w-full text-center">
            <h1 className="text-white text-5xl font-bold font-sans">Capture Your Precious Moments With Us</h1>
            <p className="text-gray-300 font-bold text-2xl font-serif my-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ab veritatis assumenda recusandae quo id eligendi officiis hic beatae dolorum nisi!</p>
            <button className="btn btn-warning mr-5 font-semibold">BOOK A DAY<FontAwesomeIcon className="ml-2" icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
            <button className="btn btn-outline btn-success">SEE GALLERY</button>
          </div>
      </section>
    </div>
  );
};

export default Home;
