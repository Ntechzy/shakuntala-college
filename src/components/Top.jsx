import React, { useState } from "react";
import "./top.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Top = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="topbar-container">
        <div className="topbar-wrapper">
          <div className="top-contact">
            <p className="top-phone">
              <FaPhoneAlt />
              +91-9918905623
            </p>
            <a className="top-email" href="mailto:siddharth@gmail.com">
              <IoMail />
              siddharth@gmail.com
            </a>
          </div>
          <div className="top-btns">
            <button className={`apply-now`} onClick={handleClick}>
              <Link to="/apply-now">Apply Now</Link>
            </button>
            <button className={`apply-now`} onClick={handleClick}>
              <Link
                to="https://softitlab.com/DOCTORDESK/login.php"
                target="_blank"
              >
                OPD Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
