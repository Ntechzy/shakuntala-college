import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Top from "../components/Top";

const Root = () => {
  return (
    <>
      <Top />
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
