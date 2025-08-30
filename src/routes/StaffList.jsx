import React from "react";
import { menuItemsData } from "../menuItemsData";
import { data } from "../NewNavData";

// const sl = menuItemsData[3].submenu[3].submenu;
console.log(data[3].submenu);

const sl = data[3].submenu;
console.log(sl);

console.log("sl", sl);

// console.log(sl);

const StaffList = () => {
  return (
    <div>
      <div className="atR">
        {sl.map((item, index) => (
          <a target="_blank" href={item.to}>
            {" "}
            <div className="BAtt" key={index}>
              <div className="atr-heading">{item.label}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StaffList;
