import { useEffect, useState } from "react";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/service')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-48 w-9/12 mx-auto">
        {
        services.map(service => <div key={service.id} className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={service.review.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.review.name}</h2>
          <p>{service.review.text}</p>
        </div>
      </div>)
    }
    </div>    
  );
};

export default AllServices;
