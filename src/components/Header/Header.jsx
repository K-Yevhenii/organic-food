import "./Header.scss";
import Navigation from "../Navigation";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu";
import clsx from "clsx";
function Header({ className }) {
    return (
        <header className={clsx("container header", className)}>
            <Logo className="header__logo" />
            <BurgerMenu className="header__burger" />
            <Navigation className="header__menu-nav " />
        </header>
    );
}

export default Header;
