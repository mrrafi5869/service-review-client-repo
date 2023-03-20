import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar flex justify-between flex-row-reverse md:flex-row w-3/4 md:mx-auto">
      <div className="">
        <Link to="/" className="btn btn-ghost normal-case lg:text-xl">
          DreamWeaver{" "}
          <FontAwesomeIcon
            icon={faCameraRetro}
            className="ml-1 lg:ml-3 text-xl lg:text-3xl"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal flex items-center font-semibold lg:text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <>
              {user?.uid ? (
                <>
                  <li>
                    <Link to="/myreviews">My Reviews</Link>
                  </li>
                  <li>
                    <Link to="/myservices">Add Service</Link>
                  </li>

                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>

                  <span>{user?.displayName}</span>
                  <img
                    className="mx-5 inline"
                    style={{ height: "30px" }}
                    rounded-full
                    src={user?.photoURl}
                    alt=""
                  />
                </>
              ) : (
                <div className="flex lg:flex-row md: flex-col">
                  <span className="mr-5">
                    <Link to="/login">LOGIN</Link>
                  </span>
                  <span className="mr-5">
                    <Link to="/register">REGISTER</Link>
                  </span>
                </div>
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
            className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-38"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
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
                  <p className="text-black">{user?.displayName}</p>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">LOGIN</Link>
                  </li>
                  <li>
                    <Link to="/register">REGISTER</Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
