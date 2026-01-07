import React, { useEffect } from "react";
import InnerPages from "../components/InnerPages";
import InnerPagesNew from "../components/InnerPagesNew";

import { menuData } from "../components/menudata";
import { menuItemsData } from "../menuItemsData";
const About = () => {
  // const data = menuItemsData[1];
  const data = menuData[1];
  useEffect(() => {
  console.log("I run on every render!" ,data);
});
  const heading = data.title;
  const url = data.url;
  const sidemenu = data.submenu;

  return (
    <>
      <InnerPages heading={heading} sidemenu={sidemenu} url={url} />
      {/* <InnerPagesNew heading={heading} sidemenu={sidemenu} url={url} /> */}
    </>
  );
};

export default About;
