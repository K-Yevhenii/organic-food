import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <Navigation className="header__menu-nav" />
    </header>
  );
}

export default Header;
