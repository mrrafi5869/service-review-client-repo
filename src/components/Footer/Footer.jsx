import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
          <div className="text-4xl font-bold"><FontAwesomeIcon className="ml-3 text-6xl" icon={faCameraRetro}></FontAwesomeIcon>DreamWeaver</div>
        <p>
          Content Writing Services Elementor Template Kit. 
          <br />
           Powered by Design8. All rights reserved.
        </p>
      </div>
      <div>
        <span className="footer-title">HEADQUARTER</span>
        <p className="link link-hover">Paradise Road 70, Office 99, Pacific Bay,  New York City 10010</p>
        <p className=" text-blue-400">+ 123 456 789</p>
        <Link className="text-blue-400">Hello @Write.up</Link>
      </div>
      <div>
        <span className="footer-title">PAGES</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">HELP</span>
        <p>Visit <Link href="" className="link link-hover">Help Center</Link></p>
        <p className="text-1xl font-semibold">Follow Us</p>
        <div>
          <Link className="text-blue-500">LinkedIn</Link>
          <Link className="ml-3 text-blue-500">Instagram</Link>
          <Link className="ml-3 text-blue-500">Facebook</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
