import React from "react";

const OpenExcelButton = () => {
  const handleOpenFile = () => {
    const officeViewerUrl = `https://docs.google.com/spreadsheets/d/1xKkUwSjGcgGA1CmLuV-H4sp8kjCOxwFk/edit?usp=sharing&ouid=112082225873776179523&rtpof=true&sd=true`;
    window.open(officeViewerUrl, "_blank");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={handleOpenFile}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Preview Excel File
      </button>
    </div>
  );
};

export default OpenExcelButton;
