import "./Header.scss";
import Navigation from "../Navigation";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu";
function Header() {
    return (
        <header className="header">
            <Logo className="header__logo" />
            <BurgerMenu className="header__burger" />
            <Navigation className="header__menu-nav " />
        </header>
    );
}

export default Header;
