import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Gallery = () => {
    return (
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
    );
};

export default Gallery;