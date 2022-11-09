import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allservices')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-48 w-9/12 mx-auto">
        {
        services.map(service => <div key={service._id} className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={service.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.review.text}</p>
          <Link to={`/service/${service._id}`} className="btn btn-outline rounded-lg font-semibold hover:bg-gray-500 hover:text-white w-full">Details<FontAwesomeIcon icon={faArrowRight} className="ml-1"></FontAwesomeIcon></Link>
        </div>
      </div>)
    }
    </div>    
  );
};

export default AllServices;
