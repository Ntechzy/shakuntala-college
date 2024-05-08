import React from "react";
import ListofTeachingStaff from "../components/ListofTeachingStaff";
import "./staffList.css";

const TeachingStaff = () => {
  return (
    <div className="staff-container">
      <div className="staff-wrapper">
        <ListofTeachingStaff />
      </div>
    </div>
  );
};

export default TeachingStaff;
