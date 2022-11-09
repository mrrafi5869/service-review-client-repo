import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service.img} alt={service.service} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {service.service}
          {/* <div className="badge badge-secondary">NEW</div> */}
          <FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon>
        </h2>
        <p>{service.desc}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{service.price}</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
