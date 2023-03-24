import { faArrowRight, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const Service = (params) => {
    const {service} = params;
    const {_id, img, name, price, desc} = service;
  return (
    <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
            <PhotoView src={img}>
                <img src={img} className="w-full h-52" alt={name} />
            </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {/* <div className="badge badge-secondary">NEW</div> */}
          <FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon>
        </h2>
        <p>{desc.length > 100 ? desc.slice(0, 99) + "..." : desc}</p>
        <p className="font-bold">Price:{price}</p>
        <div className="card-actions justify-end">
          <Link to= {`/review/${_id}`} className="bg-blue-400 w-full p-3 border-2 text-white text-center font-semibold rounded-lg">Review</Link>
          <Link to={`/service/${_id}`} className="btn btn-outline rounded-lg font-semibold hover:bg-gray-500 hover:text-white w-full">Details<FontAwesomeIcon icon={faArrowRight} className="ml-1"></FontAwesomeIcon></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
