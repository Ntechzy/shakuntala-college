import { useState, useEffect, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const HamburgerDropdown = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block", textAlign: "left" }} ref={dropdownRef}>
      <button
        style={{
          color: "black",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          outline: "none"
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#087521")}
        onMouseOut={(e) => (e.currentTarget.style.color = "black")}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <CiMenuBurger size={28} />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: "0.5rem",
            width: "13rem",
            backgroundColor: "white",
            borderRadius: "0.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            zIndex: 50,
            border: "1px solid #e5e7eb"
          }}
        >
          <ul style={{ display: "flex", flexDirection: "column", margin: 0, padding: 0 }}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                style={{
                  borderBottom: index === menuItems.length - 1 ? "none" : "1px solid #e5e7eb"
                }}
              >
                <Link
                  to={item.to}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    fontSize: "0.875rem",
                    color: "#374151",
                    textDecoration: "none",
                    transition: "background-color 0.15s ease"
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerDropdown;
