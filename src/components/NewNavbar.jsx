import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItemsData } from "../menuItemsData";
import MenuItems from "./MenuItems";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/logo.png"; // Replace with your logo path

const NewNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const depthLevel = 0;

  return (
    <header className="bg-[#f9fafb] shadow-md z-50 w-full">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Center: Navigation Menu */}
        <nav className="desktop-nav flex-1">
          <ul className="menus flex justify-center space-x-6 text-[16px] font-medium text-gray-800">
            {menuItemsData.map((menu, index) => (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            ))}
          </ul>
        </nav>

        {/* Right: Hover-based Hamburger Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="p-1 text-black hover:text-[#087521] bg-transparent border-none focus:outline-none">
            <CiMenuBurger size={24} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-3 w-52 rounded-md bg-white shadow-lg z-50">
              <ul className="flex flex-col list-none p-0 m-0 divide-y divide-gray-100">
                {[
                  { to: "/future-link-1", label: "Future Link 1" },
                  { to: "/future-link-2", label: "Future Link 2" },
                  { to: "/future-link-3", label: "Future Link 3" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="block px-4 py-3 text-black hover:bg-gray-100 transition"
                      onClick={() => setShowDropdown(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NewNavbar;
