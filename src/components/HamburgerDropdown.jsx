import { useState } from "react";
import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import './NewNav.css';
import MenuItems from "./MenuItems";
import { data } from "../NewNavData";

const NewNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container"
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        {/* Hamburger */}
        <button
          className="hamburger" 
        >
          ☰
        </button>

        {/* Main Menu */}
        <nav className={`main-menu ${menuOpen ? "show" : ""}`}>
          <ul className="ff_ul">
            {data.map((menu, index) => (
              <MenuDropdown items={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </header >
  );
};

export default NewNavbar;
