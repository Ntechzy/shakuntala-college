import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./admissionOpen.css";
const AdmissionOpen = () => {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const toggleSecondDiv = () => {
    setShowSecondDiv(!showSecondDiv);
  };

  const handleMouseEnter = () => {
    setShowSecondDiv(true);
  };

  const handleMouseLeave = () => {
    setShowSecondDiv(false);
  };
  return (
    <div className="ad-open rotate">
      <Link to="/apply-now">Admissions Open</Link>
      <Link to="/apply-now"></Link>
    </div>
  );
};

export default AdmissionOpen;
