import clsx from "clsx";

import Navigation from "../Navigation";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu";

import "./Header.scss";

function Header({ className }) {
    return (
        <header className={clsx("container header", className)}>
            <Logo className="header__logo paragraph__text" />
            <BurgerMenu className="header__burger" />
            <Navigation className="header__menu-nav " />
        </header>
    );
}

export default Header;
