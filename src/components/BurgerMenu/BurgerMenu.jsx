import { useState } from "react";
import clsx from "clsx";
import Navigation from "../Navigation/Navigation";
import { RemoveScroll } from "react-remove-scroll";
import "./BurgerMenu.scss";

const BurgerMenu = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className={clsx("burger", className, { burger_open: isOpen })}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span />
                <span />
                <span />
            </button>

            <div className={clsx("mobile-menu", { "mobile-menu_open": isOpen })}>
                <div className="mobile-menu__content">
                    <Navigation listClassName="mobile-menu__list" itemClassName="paragraph_h1" />
                </div>
            </div>
            {isOpen && <RemoveScroll />}
        </>
    );
};

export default BurgerMenu;
