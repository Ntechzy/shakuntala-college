// MenuItems.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NewNav.css"

const MenuDropdown = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    const hasSubmenu = items.submenu && items.submenu.length > 0;

    return (
        <li
            className="menu-item"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
        >
            {hasSubmenu ? (
                <>
                    <span className="menu-link">
                        {items.label}
                    </span>

                    <ul className={`dropdown__ ${dropdown ? "show" : ""}`}>
                        {items.submenu.map((submenu, index) => (
                            <li key={index}>
                                <Link className="dropdown-link" to={submenu.to}>
                                    {submenu.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <Link className="menu-link" to={items.to}>
                    {items.label}
                </Link>
            )}
        </li>
    );
};

export default MenuDropdown;
