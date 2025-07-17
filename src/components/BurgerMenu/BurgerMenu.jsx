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
          className={clsx(
            "burger__icon",
            { burger__menu_open: isOpen },
            className
          )}
        >
          Mobile
        </span>
      </button>
      {isOpen && (
        <div className="mobile-menu">
          <div className="burger-menu__content">
            <Navigation
              className="burger-nav"
              listClassName="burger-nav__list"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
