import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./aboutdrop.css";
import { FaCaretRight } from "react-icons/fa";
import tAtten from "/T_Attendance24.pdf";
import ntAtten from "/NT_Atten24.pdf";
import hAtten from "/H_Atten24.pdf";
const Facultydrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-navigation">
      <div
        className="dropdown-navigation aboutdrop--main"
        onMouseEnter={handleMouseEnter}
        onClick={handleMouseEnter}
      >
        Faculty
      </div>
      {isOpen && (
        <div
          className="dropdown-menu"
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseLeave}
        >
          <div
            onMouseEnter={handleMouseEnter}
            onClick={handleMouseEnter}
            className="aboutdrop--links dropdown-navigationIn"
          >
            <Link to="/introduction" className="flex aic jcsb">
              Teaching Staff
              <FaCaretRight />
            </Link>
            {isOpen && (
              <div
                className="dropdown-menuIn"
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseLeave}
              >
                <div className="aboutdrop--links">
                  <a target="_blank" href="">
                    List of teaching Staff Department-Wise
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={tAtten}>
                    Monthly Attendance of Teaching Staff
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onClick={handleMouseEnter}
            className="aboutdrop--links dropdown-navigationIn"
          >
            <Link to="/introduction" className="flex aic jcsb">
              Non-Teaching Staff
              <FaCaretRight />
            </Link>
            {isOpen && (
              <div
                className="dropdown-menuIn"
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseLeave}
              >
                <div className="aboutdrop--links">
                  <a target="_blank" href="">
                    List of Non-Teaching Staff Department-Wise
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={ntAtten}>
                    Monthly Attendance of Non-Teaching Staff
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onClick={handleMouseEnter}
            className="aboutdrop--links dropdown-navigationIn"
          >
            <Link to="/introduction" className="flex aic jcsb">
              Hospital Staff
              <FaCaretRight />
            </Link>
            {isOpen && (
              <div
                className="dropdown-menuIn"
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseLeave}
              >
                <div className="aboutdrop--links">
                  <a target="_blank" href="">
                    List of Hospital Staff Department-Wise
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={hAtten}>
                    Monthly Attendance of Hospital Staff
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="aboutdrop--links">
            <Link to="/course&fees">Organization Chart</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facultydrop;
