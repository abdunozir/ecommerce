import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { FaLocationDot, FaBars } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { SocialLinks } from "../index";
import { BsGlobe } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="top">
      <div className="container">
        <div className="option-bar">
          <div className="select-box">
            <span>
              <BsGlobe />
            </span>
            <select value="default">
              <option value="default">Language</option>
              <option value="val1">uz</option>
              <option value="val1">ru</option>
              <option value="val1">en</option>
            </select>
          </div>
          <div className="select-box">
            <span>
              <BiSolidDollarCircle />
            </span>
            <select>
              <option value="lan">Currency</option>
            </select>
          </div>
        </div>

        <div className="right-side">
          <SocialLinks />
          <button className="top-bar-btn">
            <FaBars />
          </button>
          <div className="top-buttons">
            <button>
              <FaLocationDot />
              Track Order
            </button>
            <button>
              <AiOutlineShop />
              Shop
            </button>
            <button>
              <IoIosSettings />
              Settings
            </button>
            <button>FAQ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
