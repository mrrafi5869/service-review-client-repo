import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useTitle("MyServices");
  useEffect(() => {
    fetch("https://service-review-server-mu.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-10 lg:my-48 place-items-center w-9/12 mx-auto">
      {services.map((service) => (
        <div
          key={service._id}
          className="card card-compact w-72 lg:w-96 h-[600px] bg-base-100 shadow-xl"
        >
          <figure>
            <PhotoProvider>
              <PhotoView src={service.img}>
                <img src={service.img} className="w-full h-52" alt="Service" />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.name}</h2>
            <p>{service.desc}</p>
            <p className="font-bold">Price:{service.price}</p>
            <div className="card-actions justify-end">
              <Link
                to={`/review/${service._id}`}
                className="bg-blue-400 w-full p-3 border-2 text-white text-center font-semibold rounded-lg"
              >
                Review
              </Link>
              <Link
                to={`/service/${service._id}`}
                className="btn btn-outline rounded-lg font-semibold hover:bg-gray-500 hover:text-white w-full"
              >
                Details
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-1"
                ></FontAwesomeIcon>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllServices;
