// NewNavbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItemsData } from "../menuItemsData";
import MenuItems from "./MenuItems";
import logo from "../assets/logo.png";

const NewNavbar = () => {
  return (
    <header style={{ backgroundColor: "#f9fafb", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <div className="navbar-container" style={{ maxWidth: "1440px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: "48px", width: "auto" }} />
        </Link>

        {/* Center Menu */}
        <nav>
          <ul className="main-menu">
            {menuItemsData.map((menu, index) => (
              <MenuItems items={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NewNavbar;
