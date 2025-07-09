import clsx from "clsx";
import "./Navigation.scss";
import navContactsLinks from "./navContactsLinks";

function Navigation({ className }) {
  return (
    <nav className={clsx("nav", className)}>
      <ul className="nav__contacts">
        {navContactsLinks.map(({ label, href }) => (
          <li className="nav__item" key={label}>
            <a className="nav__contact" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
