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
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
      logOut();
  }

  return (
    <div className="navbar bg-base-100 w-9/12 mx-auto">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          DreamWeaver{" "}
          <FontAwesomeIcon icon={faCameraRetro} className="mx-3 text-3xl" />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link className="text-blue-300 text-xl hover:text-black">
              <FontAwesomeIcon icon={faEnvelope} />
              Send message
            </Link>
          </li>
          <li>
            <Link className="text-blue-300 text-xl hover:text-black">
              <FontAwesomeIcon icon={faPhone} />
              +971404453
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 flex items-center font-semibold text-lg">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to='/blog'>BLOG</Link>
            </li>
            <h1 className="mx-2">
            {user?.uid ? (
            <>
              <Link to='/myreviews'>
                <button className="btn btn-sm mr-4">My Reviews</button>
              </Link>
              <Link to='/myservices'>
                <button className="btn btn-sm mr-4">Add Service</button>
              </Link>
              <button className="btn btn-sm mr-4" onClick = {handleLogOut}>Logout</button>
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
          </h1>
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 mr5 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to='/blog'>BLOG</Link>
            </li>
            <li>
            {user?.uid ? (
            <>
              <button className="btn btn-sm text-white w-20">My Reviews</button>
              <button className="btn btn-sm text-white w-20">Add Service</button>
              <button className="btn btn-sm text-white w-20" onClick = {handleLogOut}>Logout</button>
              <p className="text-black">{user?.displayName}</p>
            </>
            ) : (
              <>
                <div>
                    <Link to="/login">LOGIN</Link>
                </div>
                <div>
                  <Link to="/register">REGISTER</Link>
                </div>
              </>
            )}
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
