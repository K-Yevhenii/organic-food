import "./Footer.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import footerSocialLinks from "./footerSocialLinks";
function Footer() {
    return (
        <footer className="footer">
            <div>
                <div className="footer__logo-wrapper">
                    <Logo className="footer__logo" />
                </div>
                <ul className="footer__link-list">
                    {footerSocialLinks.map(({ name, icon: Icon }) => (
                        <li className="footer__link-item" key={name}>
                            <Icon className="footer__link-icon" />
                        </li>
                    ))}
                </ul>
            </div>
            <Navigation />
        </footer>
    );
}
export default Footer;
