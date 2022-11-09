import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { img, price, desc, name } = useLoaderData();
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-36">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon>
        </h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <div className="w-full mt-3 bg-red-300 p-3 border-2 text-white text-center font-semibold rounded-lg">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
