import React from "react";

const Edit = () => {
  return (
    <div className="flex">
      <div className="relative">
        <img
          src="https://promo-theme.com/novo/wp-content/themes/novo-child-dev/images/screen1-dark.jpg"
          alt=""
        />
        <div className="absolute top-1/4 left-1/4 text-white">
          <p className="font-serif">Premium</p>
          <h1 className="text-5xl font-semibold">PhotoEditor</h1>
          <p className="font-mono text-xl text-cyan-500">
            With Photoshop, Illustrator, and others
          </p>
          <button
            href="#_"
            class="relative px-5 py-3 mt-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Order
            </span>
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://promo-theme.com/novo/wp-content/themes/novo-child-dev/images/screen1-light.jpg"
          alt=""
        />
        <div className="absolute top-1/4 left-1/4 text-black">
          <p className="font-serif">Premium</p>
          <h1 className="text-5xl font-semibold">VideoEditor</h1>
          <p className="font-mono text-xl text-yellow-800">
            With Premier Pro, Filmora, and others
          </p>
          <button
            href="#_"
            class="relative px-5 py-3 mt-2 overflow-hidden font-medium text-gray-600 bg-gray-200 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Order
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
