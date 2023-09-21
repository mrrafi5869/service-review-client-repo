import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar md:p-2 flex justify-between flex-row-reverse md:flex-row md:justify-between w-3/4 md:mx-auto">
      <Link to="/" className="font-semibold normal-case lg:text-xl">
        DreamWeaver{" "}
        <FontAwesomeIcon
          icon={faCameraRetro}
          className="ml-1 lg:ml-3 text-xl lg:text-3xl"
        />
      </Link>
      <div>
        <div>
          <ul className="hidden menu menu-horizontal md:flex justify-center items-center font-semibold text-gray-500 text-sm mr-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/sample"
              >
                Sample
              </Link>
            </li>
            <li>
              <Link
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <>
              {user?.uid && (
                <>
                  <li>
                    <Link to="/myreviews">My Reviews</Link>
                  </li>
                  <li>
                    <Link to="/myservices">Add Service</Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-36"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/sample"
              >
                Sample
              </Link>
            </li>
            <li>
              <Link
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <>
              {user?.uid ? (
                <>
                  <li>
                    <Link to="/myReviews" className="w-32">
                      My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/addService" className="w-32">
                      Add Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/logout" className="w-32" onClick={handleLogOut}>
                      Logout
                    </Link>
                  </li>
                  
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
      </div>
      <>
        {user?.uid ? (
            <li>
              <button
                class="hidden md:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200 mr-2"
                onClick={handleLogOut}
              >
                Logout
              </button>
              
            <span className="text-gray-500 hidden lg:flex">{user?.displayName}</span>
            <img
              className="mx-5 inline"
              style={{ height: "30px" }}
              rounded-full
              src={user?.photoURl}
              alt=""
            />
            </li>
        ) : (
          <div>
            <Link
              to="/login"
              className="hidden md:inline-block mr-2 py-2 px-6 bg-gray-200 hover:bg-gray-300 text-sm text-gray-900 font-bold  rounded-xl transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="hidden md:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-300"
            >
              Sign up
            </Link>
          </div>
        )}
      </>
    </div>
  );
};

export default Header;
