import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__logo-wrapper">
          <a className="footer__logo" href="#">
            <a className="footer__text-logo" href="#">
              Logo
            </a>
          </a>
        </div>
        <ul className="footer__link-list">
          <li className="footer__link-item">
            <img
              src="/public/twitter-icon.svg"
              alt=""
              className="footer__link-icon"
            />
          </li>
          <li className="footer__link-item">
            <img
              src="/public/instagram-icon.svg"
              alt=""
              className="footer__link-icon"
            />
          </li>
          <li className="footer__link-item">
            <img
              src="/public/linkedin-icon.svg"
              alt=""
              className="footer__link-icon"
            />
          </li>
          <li className="footer__link-item">
            <img
              src="/public/facebook-icon.svg"
              alt=""
              className="footer__link-icon"
            />
          </li>
        </ul>
      </div>
      <nav className="footer__menu-nav nav-footer">
        <ul className="footer-nav__contacts">
          <li className="footer-nav__item">
            <a className="footer-nav__contact" href="#">
              About
            </a>
          </li>
          <li className="footer-nav__item">
            <a className="footer-nav__contact" href="/public/twitter-icon.svg">
              Services
            </a>
          </li>
          <li className="footer-nav__item">
            <a className="footer-nav__contact" href="">
              Team
            </a>
          </li>
          <li className="footer-nav__item">
            <a className="footer-nav__contact" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
