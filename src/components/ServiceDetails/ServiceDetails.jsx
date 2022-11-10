import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";


const ServiceDetails = () => {
  useTitle("ServiceDetails")
  const {img, price, desc, name } = useLoaderData();
  const {user} = useContext(AuthContext);

  const [ownReview, setOwnReview] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setOwnReview(data));
  }, [])
  const myDatas = ownReview.filter(same => same.serviceName === name)

  return (
    <div className="flex w-9/12 mx-auto my-36 justify-between">
      <div className="card w-96 bg-base-100 shadow-xl mr-40 h-full">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {
          user?.uid ?
          <>
            {
          myDatas.map(myData => <div className="card w-96 bg-base-100 shadow-xl h-full">
          <figure>
            <img className="w-full" src={user?.photoURL} alt="UserImage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Name: {user?.displayName}
            </h2>
            <p>Email: {myData.userEmail}</p>
            <p>{myData?.userReview}</p>
            <div className="card-actions justify-end">
          </div>
          </div>
        </div>)
        }
          </>
          :
          <h1 className="text-4xl font-bold">
            Please Login to add review
          </h1>
        }
        
      </div>
    </div>
  );
};

export default ServiceDetails;
