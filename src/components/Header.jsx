import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "/image99.png";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
