import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./aboutdrop.css";
import { FaCaretRight } from "react-icons/fa";
const Studentdrop = () => {
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
        Student's Corner
      </div>
      {isOpen && (
        <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
          <div className="aboutdrop--links">
            <Link to="/introduction">List of Students</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/mission&objective">Monthly Attendance of Students</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/affiliation">Results</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studentdrop;
