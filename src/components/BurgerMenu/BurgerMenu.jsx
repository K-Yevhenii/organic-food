import { useState } from "react";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation";
import "./BurgerMenu.scss";

const BurgerMenu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={clsx("burger-menu", className)}>
      <button className="burger__btn" onClick={toggleMenu}>
        <span
          className={isOpen ? "burger__icon  burger__open" : "burger__icon"}
        >
          OpenMobile
        </span>
      </button>
      {isOpen && (
        <div className="burger-menu__content">
          <Navigation className="burger-nav" />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
