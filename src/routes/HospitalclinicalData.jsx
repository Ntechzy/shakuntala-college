import React from "react";
import InnerPages from "../components/InnerPages";
import "./hospitalClinicalData.css";
import { menuItemsData } from "../menuItemsData";

import { menuData } from "../components/menudata";

const att = menuItemsData[6].submenu;

const HospitalclinicalData = () => {
  const data = menuData[6];

  const heading = data.title;
  const url = data.url;
  const sidemenu = data.submenu;

  return (
    <>
      {/* <InnerPages heading={heading} sidemenu={sidemenu} url={url} /> */}
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

export default HospitalclinicalData;
