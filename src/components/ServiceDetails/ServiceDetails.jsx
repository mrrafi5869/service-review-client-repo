import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const ServiceDetails = () => {
  const {img, price, desc, name, review } = useLoaderData();
  const {user} = useContext(AuthContext);
  return (
    <div className="flex w-9/12 mx-auto my-36 justify-between">
      <div className="card w-96 bg-base-100 shadow-xl mr-40">
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
            <div className="w-full mt-3 bg-red-300 p-3 border-2 text-white text-center font-semibold rounded-lg">
              {price}
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl h-full">
          <figure>
            <img src={review.img} alt="UserImage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {user?.displayName}
            </h2>
            <p>{review.text}</p>
            <div className="card-actions justify-end">
            <div className="w-full mt-3 bg-black p-3 border-2 text-white text-center font-semibold rounded-lg">
              <button>Review</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
