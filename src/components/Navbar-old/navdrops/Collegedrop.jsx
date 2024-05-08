import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./aboutdrop.css";
import { FaCaretRight } from "react-icons/fa";
import infraColl from "/college_infra.pdf";
const Collegedrop = () => {
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
      >
        College and Hostel
      </div>
      {isOpen && (
        <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
          <div className="aboutdrop--links">
            <Link to="/introduction">Introduction</Link>
          </div>
          <div className="aboutdrop--links">
            <a href={infraColl} target="_blank">
              Infrastructure of College
            </a>
          </div>
          <div className="aboutdrop--links">
            <Link to="/affiliation">Infrastructure of Hostel</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/course&fees">Facilities</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collegedrop;
