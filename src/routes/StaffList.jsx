import React from "react";
import { menuItemsData } from "../menuItemsData";

const sl = menuItemsData[3].submenu[3].submenu;
console.log("sl", sl);

// console.log(sl);

const StaffList = () => {
  return (
    <div>
      <div className="atR">
        {sl.map((item, index) => (
          <a target="_blank" href={item.url}>
            {" "}
            <div className="BAtt" key={index}>
              <div className="atr-heading">{item.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StaffList;
