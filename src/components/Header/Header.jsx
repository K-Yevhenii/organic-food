import "./Header.scss";
function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <a className="header__text-logo" href="#">
          Logo
        </a>
      </a>

      <nav className="header__menu-nav nav">
        <ul className="nav__contacts">
          <li className="nav__item">
            <a className="nav__contact" href="#">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__contact" href="#">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__contact" href="#">
              Team
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__contact" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
