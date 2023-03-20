import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Gallery = () => {
    return (
        <section className="md:w-9/12 mx-auto relative my-32">
        <div className="image">
          <img src="https://i.ibb.co/qy9ypP8/jakob-owens-DQPP9r-VLYGQ-unsplash.jpg" alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute top-2 lg:top-80 w-full text-center">
          <h1 className="text-white text-sm md:text-5xl font-bold font-sans">Capture Your Precious Moments With Us</h1>
          <p className="text-gray-300 font-bold text-xs md:text-2xl font-serif my-4 md:my-14">A photoshoot is an excellent way to capture memories and showcase your personality or products. Whether it's a professional shoot or a fun, candid session with friends, photography can be a powerful tool for self-expression and creativity.</p>
          <button className="btn btn-xs md:btn-md btn-warning mr-5 font-semibold">BOOK A DAY<FontAwesomeIcon className="ml-2" icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
          <button className="btn btn-xs md:btn-md btn-outline btn-success">SEE GALLERY</button>
        </div>
    </section>
    );
};

export default Gallery;