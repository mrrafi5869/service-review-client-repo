import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li tabIndex={0}>
              <a>
                PRICING
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>CONTACT</a>
                </li>
                <li>
                  <a>REVIEWS</a>
                </li>
                <li>
                  <a>BLOG</a>
                </li>
              </ul>
            </li>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>PRICING</a>
            </li>
            <li>
              <a>HELP</a>
            </li>
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
              PRICING
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul className="p-2">
              <li>
                  <a>CONTACT</a>
                </li>
                <li>
                  <a>REVIEWS</a>
                </li>
                <li>
                  <a>BLOG</a>
                </li>
              </ul>
            </li>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>PRICING</a>
            </li>
            <li>
              <a>HELP</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
