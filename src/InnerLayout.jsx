import React from "react";
import { Outlet } from "react-router-dom";

const InnerLayout = () => {
  return (
    <>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default InnerLayout;
