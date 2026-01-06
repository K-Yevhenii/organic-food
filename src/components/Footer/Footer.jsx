import "./Footer.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import footerSocialLinks from "./footerSocialLinks";
import SocialIcon from "../SocialLink";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__logo-wrapper">
                        <Logo className="footer__logo paragraph__text" />
                    </div>
                    <div className="footer-nav-wrapper">
                        <Navigation className="footer__nav" />
                    </div>
                    <ul className="footer__link-list">
                        {footerSocialLinks.map(({ name, icon }) => (
                            <li className="footer__link-item" key={name}>
                                <SocialIcon icon={icon} className="footer__link-icon" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
