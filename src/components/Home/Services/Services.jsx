import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Service from "../../Service/Service";
import './Services.css'
const Services = () => {
  const [services, setServices] = useState([]);
  useTitle("Home");
  useEffect(() => {
    fetch("https://service-review-server-mu.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services">
      <div className="container mx-auto mt-0 mb-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center my-12">
        <Link
          to="/allservices"
          className="btn btn-warning rounded-lg font-semibold"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Services;
