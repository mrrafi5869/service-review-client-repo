import { faArrowRight, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Service = (params) => {
    const {service} = params;
    const {id, img, name, price, desc} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {/* <div className="badge badge-secondary">NEW</div> */}
          <FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon>
        </h2>
        <p>{desc.length > 100 ? desc.slice(0, 99) + "..." : desc}</p>
        <div className="card-actions justify-end">
          <div className="bg-blue-400 w-full p-3 border-2 text-white text-center font-semibold rounded-lg">{price}</div>
          <Link to={`/service/${id}`} className="btn btn-outline rounded-lg font-semibold hover:bg-gray-500 hover:text-white w-full">Details<FontAwesomeIcon icon={faArrowRight} className="ml-1"></FontAwesomeIcon></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
