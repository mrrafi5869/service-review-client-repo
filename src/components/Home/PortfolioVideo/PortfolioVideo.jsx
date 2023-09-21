import React from "react";
import video from "../../../video/portfolio.mp4";
const PortfolioVideo = () => {
  return (
    <div id="sample">
      <h1 className="text-center text-2xl lg:text-5xl mt-[5%] lg:mt-[10%] lg:mb-12 text-yellow-800 font-semibold italic">
        Our Work Sample
      </h1>
      <video autoPlay loop muted playsinline className="lg:w-9/12 my-5 mx-auto">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PortfolioVideo;
