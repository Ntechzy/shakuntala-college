import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "/image99.png";
import HamburgerDropdown from "./HamburgerDropdown";

const Header = () => {

  const menuLinks = [
  { to: "/future-link-1", label: "Future Link 1" },
  { to: "/future-link-2", label: "Future Link 2" },
  { to: "/future-link-3", label: "Future Link 3" },
];

  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>

        {/* for large screens */}
        <Navbar />

        {/* for small screens */}
        <MobileNav />

       {/* add Hamburgar here */}
       <HamburgerDropdown menuItems={menuLinks} />
      </div>
    </header>
  );
};

export default Header;
