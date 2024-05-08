import React from "react";
import InnerPages from "../components/InnerPages";

import { menuData } from "../components/menudata";

const Facilities = () => {
  const data = menuData[4];

  const heading = data.title;
  const url = data.url;
  const sidemenu = data.submenu;

  return (
    <>
      <InnerPages heading={heading} sidemenu={sidemenu} url={url} />
    </>
  );
};

export default Facilities;
