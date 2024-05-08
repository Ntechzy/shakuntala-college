import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./aboutdrop.css";
import { FaCaretRight } from "react-icons/fa";
const Newsdrop = () => {
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
        News and Notice
      </div>
      {isOpen && (
        <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
          <div className="aboutdrop--links">
            <Link to="/introduction">Vacancies</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/mission&objective">News</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/affiliation">Notice</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsdrop;
