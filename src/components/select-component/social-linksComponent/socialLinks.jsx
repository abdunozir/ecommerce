import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./socialLinks.scss";

const socialLinks = () => {
  return (
    <ul className="social-links">
      <li className="social-link">
        <a href="#">
          <FaFacebookF />
        </a>
      </li>
      <li className="social-link">
        <a href="#">
          <FaInstagram />
        </a>
      </li>
      <li className="social-link">
        <a href="#">
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-link">
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li className="social-link">
        <a href="#">
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default socialLinks;
