import { useState } from "react";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation";
import "./BurgerMenu.scss";

const BurgerMenu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button className={clsx("burger", className)} onClick={toggleMenu}>
        <span className={clsx("burger__icon", { burger__menu_open: isOpen })}>
          Mobile
        </span>
      </button>

      <div className={clsx("mobile-menu", { "mobile-menu_open": isOpen })}>
        <div className="mobile-menu__content">
          <Navigation listClassName="mobile-menu__list" />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
