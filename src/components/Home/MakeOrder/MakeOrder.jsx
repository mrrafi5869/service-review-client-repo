import React from "react";

const MakeOrder = () => {
  return (
    <div className="w-9/12 mx-auto flex justify-around my-16">
      <div>
        <h1 className="text-2xl text-indigo-600 font-semibold mb-8">Order Now</h1>
        <p className="font-serif mb-8">
          From intimate ceremonies to grand celebrations, <br /> Rafi will
          beautifully document your special day, <br />
          capturing every emotion,and candid moment that unfolds.
        </p>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered block w-full rounded-none mb-8"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered block w-full rounded-none mb-8"
        />
        <textarea
          className="textarea textarea-bordered rounded-none"
          rows="2"
          cols="65"
          placeholder="Bio"
        ></textarea>
        {/* <br /> */}
        <button
          href="#_"
          class="relative block py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-300 group"
        >
          <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              class="w-5 h-5 text-green-400"
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
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              class="w-5 h-5 text-green-400"
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
          <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Button Text
          </span>
        </button>
      </div>
      <img
        src="https://img.freepik.com/free-vector/photography-logo-black-color_23-2147822110.jpg?size=626&ext=jpg&ga=GA1.2.207808977.1658386615&semt=ais"
        className="h-[500px]"
        alt=""
      />
    </div>
  );
};

export default MakeOrder;
