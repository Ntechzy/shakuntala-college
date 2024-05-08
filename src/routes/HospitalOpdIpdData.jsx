import React from "react";
import { menuItemsData } from "../menuItemsData";

const att = menuItemsData[6];
// console.log(att.submenu);

const HospitalOpdIpdData = () => {
  return (
    <>
      <div className="hopd">
        {att.map((item, index) => (
          <a target="_blank" href={item.url}>
            {" "}
            <div className="hopd-data" key={index}>
              <div className="hopd-heading">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default HospitalOpdIpdData;
