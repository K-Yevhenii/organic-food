import "./Footer.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import footerSocialLinks from "./footerSocialLinks";
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__logo-wrapper">
                        <Logo className="footer__logo" />
                    </div>
                    <Navigation className="footer__nav" />
                    <ul className="footer__link-list">
                        {footerSocialLinks.map(({ name, icon: Icon }) => (
                            <li className="footer__link-item" key={name}>
                                <Icon className="footer__link-icon" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
