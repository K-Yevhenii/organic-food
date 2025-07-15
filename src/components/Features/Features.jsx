import "./Features.scss";
import featuresItems from "./featuresItems.temp";
import TwigLeafIcon from "../../assets/Svg/Icon/twigLeafsIcon";
function Features() {
  return (
    <section className="features">
      <ul className="features__list">
        {featuresItems.map(({ id, text }) => (
          <li key={id} className="features__item">
            <TwigLeafIcon className="features__item" />
            <p className="features__text">{text}</p>
          </li>
        ))}
        ;
      </ul>
    </section>
  );
}

export default Features;
