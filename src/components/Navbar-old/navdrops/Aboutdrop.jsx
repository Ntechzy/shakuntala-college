import React, { useState } from "react";
import { Link } from "react-router-dom";
import collegecouncil from "/college council.pdf";
import "./aboutdrop.css";
import { FaCaretRight } from "react-icons/fa";
import statenoc from "/statenoc.jpg";
import affil from "/Affiliation_Letter_2021.jpg";
import permission from "/Permission2024.jpg";
const Aboutdrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-navigation">
      <div
        className="dropdown-navigation aboutdrop--main"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        About Us
      </div>
      {isOpen && (
        <div
          className="dropdown-menu"
          onClick={handleMouseLeave}
          onMouseLeave={handleMouseLeave}
        >
          <div className="aboutdrop--links">
            <a target="_blank" href={collegecouncil}>
              College Council
            </a>
          </div>
          <div className="aboutdrop--links">
            <Link to="/introduction">Introduction</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/mission&objective">Our Mission & Objective</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/affiliation">Affiliation</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/course&fees">Courses & Fees</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/rules&regulations">Rules & Regulation</Link>
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            className="aboutdrop--links dropdown-navigationIn"
          >
            <Link to="/permission&affiliation" className="flex aic jcsb">
              Permission & Affiliation <FaCaretRight />
            </Link>
            {isOpen && (
              <div className="dropdown-menuIn" onMouseLeave={handleMouseLeave}>
                <div className="aboutdrop--links">
                  <a target="_blank" href={statenoc}>
                    State NOC
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={affil}>
                    University Affiliation
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={permission}>
                    Permission Letter by Goverment of India
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            className="aboutdrop--links dropdown-navigationIn"
          >
            <Link to="/otheractivites" className="flex aic jcsb">
              Other Activites <FaCaretRight />
            </Link>
            {isOpen && (
              <div className="dropdown-menuIn" onMouseLeave={handleMouseLeave}>
                <div className="aboutdrop--links">
                  <a target="_blank" href={statenoc}>
                    Continous Medical Education
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={affil}>
                    conference Seminar
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={permission}>
                    Research Publication
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={statenoc}>
                    Award and Achievement
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={affil}>
                    Medical camp
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={permission}>
                    Games and other Extra-Curricular Activities
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Aboutdrop;
