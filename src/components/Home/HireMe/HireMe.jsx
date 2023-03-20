import { faCameraRetro, faCheckCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HireMe = () => {
    return (
        <section className="flex flex-col lg:flex-row w-9/12 mx-auto my-20">
        <div className="lg:h-2/5 lg:w-3/5 relative md:mr-20">
            <img className="rounded-xl" src="https://i.ibb.co/1XRPsCN/natilyn-hicks-natilyn-photography-ab-Pr-Ovb-Ld-Aw-unsplash.jpg" alt="" />
            <img className="w-32 md:w-1/2 lg:w-3/5 top-28 md:top-64 lg:top-64 lg:mr-10 left-32 md:left-96 lg:left-80 border-8 rounded-lg absolute" src="https://i.ibb.co/Cvy198w/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg" alt="" />
        </div>
        <div className="lg:mx-14 mt-16 lg:mt-0">
            <h3 className="text-2xl lg:text-3xl italic font-semibold text-yellow-800">Why choose Us???</h3>
            <h1 className="text-xl md:text-5xl font-serif my-5 text-gray-400">Adding the memories of <br /> every moment</h1>
            <div className="flex my-10">
            <FontAwesomeIcon icon={faCheckCircle} className="text-xl lg:text-3xl mr-2 md:mx-3 bg-gray-400 p-2 lg:p-4 rounded-xl" />
                <div>
                    <h3 className="text-2xl font-semibold">Professional</h3>
                    <p className="text-gray-500 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem assumenda provident ad aliquam sint</p>
                </div>
            </div>
            <div className="flex my-10">
            <FontAwesomeIcon icon={faCameraRetro}  className="text-xl lg:text-3xl mr-2 md:mx-3 bg-gray-400 p-2 lg:p-4 rounded-xl" />
                <div>
                    <h3 className="text-2xl font-semibold">Experienced Photographer</h3>
                    <p className="text-gray-500 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem assumenda provident ad aliquam sint</p>
                </div>
            </div>
            <div className="flex my-10">
            <FontAwesomeIcon icon={faPhone}  className="text-xl lg:text-3xl mr-2 md:mx-3 bg-gray-400 p-2 lg:p-4 rounded-xl" />
                <div>
                    <h3 className="text-2xl font-semibold">Support 24/7</h3>
                    <p className="text-gray-500 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem assumenda provident ad aliquam sint</p>
                </div>
            </div>
        </div>
      </section>
    );
};

export default HireMe;