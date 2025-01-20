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
      <a href="/apply-now">Admissions Open</a>
    </div>
  );
};

export default AdmissionOpen;
