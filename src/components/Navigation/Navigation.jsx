import clsx from "clsx";
import "./Navigation.scss";

function Navigation({ className }) {
  return (
    <nav className={clsx("nav", className)}>
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
  );
}

export default Navigation;
