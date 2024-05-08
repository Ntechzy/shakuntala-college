import React from "react";
import InnerPages from "../components/InnerPages";

import { menuData } from "../components/menudata";

const Media = () => {
  const data = menuData[5];

  const heading = data.title;
  const sidemenu = data.submenu;
  const url = data.url;

  return (
    <>
      <InnerPages heading={heading} sidemenu={sidemenu} url={url} />
    </>
  );
};

export default Media;
