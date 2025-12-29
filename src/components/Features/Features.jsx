import "./Features.scss";
import featuresItems from "./featuresItems.temp";
import TwigLeafIcon from "../../assets/Svg/Icon/twigLeafsIcon";
function Features() {
    return (
        <div className="features-overlap">
            <section className="features">
                <ul className="features__list">
                    {featuresItems.map(({ id, text }) => (
                        <li key={id} className="features__item">
                            <TwigLeafIcon className="features__icon" />
                            <p className="features__text paragraph__item">{text}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default Features;
