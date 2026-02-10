import { latestNavbarData } from "../data/latestNavbar";
import MenuItems from "./MenuItems";

const LatestNavbar = () => {
  const depthLevel = 0;

  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {latestNavbarData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default LatestNavbar;
