import "./Footer.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import TwitterIcon from "../../assets/Svg/Icon/twitterIcon";
import FacebookIcon from "../../assets/Svg/Icon/facebookIcon";
import InstagramIcon from "../../assets/Svg/Icon/instagramIcon";
import LinkedinIcon from "../../assets/Svg/Icon/linkedinIcon";
function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__logo-wrapper">
          <Logo className="footer__logo" />
        </div>
        <ul className="footer__link-list">
          <li className="footer__link-item">
            <TwitterIcon alt="Twitter icon" className="footer__link-icon" />
          </li>
          <li className="footer__link-item">
            <InstagramIcon alt="" className="footer__link-icon" />
          </li>
          <li className="footer__link-item">
            <LinkedinIcon alt="" className="footer__link-icon" />
          </li>
          <li className="footer__link-item">
            <FacebookIcon className="footer__link-icon" />
          </li>
        </ul>
      </div>
      <Navigation className="header__menu-nav" />
    </footer>
  );
}
export default Footer;
