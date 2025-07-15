import React from "react";
import "./attendanceReport.css";
import { menuItemsData } from "../menuItemsData";

const att = menuItemsData[5].submenu;
console.log(menuItemsData[3]);

const AttendanceReport = () => {
  return (
    <>
      <div className="atR">
        {att.map((item, index) => (
          <a target="_blank" href={item.url}>
            {" "}
            <div className="BAtt" key={index}>
              <div className="atr-heading">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default AttendanceReport;
