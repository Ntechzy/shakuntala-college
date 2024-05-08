import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./aboutdrop.css";
import { FaCaretRight } from "react-icons/fa";
import hinfra from "/hospital_infra.pdf";
import panchakarma from "/panchakarma24.pdf";
import ksharsutra from "/ksharsutra24.pdf";
import OT2024 from "/OT2024.pdf";
import pathology24 from "/pathology24.pdf";
import xray from "/xrayusg.pdf";

const Hospitaldrop = () => {
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
        Hospital
      </div>
      {isOpen && (
        <div className="dropdown-menu" onMouseLeave={handleMouseLeave}>
          <div className="aboutdrop--links">
            <a target="_blank" href={hinfra}>
              Introduction with Infrastructure
            </a>
          </div>
          <div className="aboutdrop--links">
            <Link to="/mission&objective">Charge</Link>
          </div>
          <div className="aboutdrop--links">
            <Link to="/affiliation">
              Department-Wise Clinical Material and Facilities
            </Link>
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            className="aboutdrop--links dropdown-navigationIn"
          >
            <Link to="/permission&affiliation" className="flex aic jcsb">
              Monthly Attendance of Patients <FaCaretRight />
            </Link>
            {isOpen && (
              <div className="dropdown-menuIn" onMouseLeave={handleMouseLeave}>
                <div className="aboutdrop--links">
                  <a
                    target="_blank"
                    href="https://softitlab.com/sakayu/home.php?year=2023"
                  >
                    For OPD
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a
                    target="_blank"
                    href="https://softitlab.com/sakayu/home.php?year=2023"
                  >
                    For IPD
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={panchakarma}>
                    Panchakarma
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={ksharsutra}>
                    Ksharsutra
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={OT2024}>
                    Operation theatre
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={pathology24}>
                    Pathology
                  </a>
                </div>
                <div className="aboutdrop--links">
                  <a target="_blank" href={xray}>
                    X-Ray / ECG Section
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

export default Hospitaldrop;
