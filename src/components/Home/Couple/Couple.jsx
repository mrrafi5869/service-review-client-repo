import React from "react";

const Couple = () => {
  return (
    <div className="relative">
      <img
        className="md:h-[700px] w-full"
        src="https://cassia.qodeinteractive.com/wp-content/uploads/2022/10/landing-parallax-1.jpg"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h5 className="uppercase font-semibold">Photography</h5>
        <p className="md:text-6xl font-serif  md:my-4">
          THE IDEAL COMPANION TO YOUR CAMERA LENS
        </p>
        <button
          className="relative inline-flex items-center justify-center md:px-6 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-300 rounded-full shadow-md group"
        >
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-300 group-hover:translate-x-0 ease">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Purchase
          </span>
          <span class="relative invisible">Button Text</span>
        </button>
      </div>
    </div>
  );
};

export default Couple;
