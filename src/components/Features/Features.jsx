import "./Features.scss";
import TwigLeafIcon from "../../assets/Svg/Icon/twigLeafsIcon";

function Features() {
  return (
    <section className="features">
      <ul className="features__list">
        <li className="features__item">
          <TwigLeafIcon alt="twig with leafs" className="features__icon" />
          <p className="features__text">Plant Protective</p>
        </li>
        <li className="features__item">
          <TwigLeafIcon alt="twig with leafs" className="features__icon" />
          <p className="features__text">Plant Protective</p>
        </li>
        <li className="features__item">
          <TwigLeafIcon alt="twig with leafs" className="features__icon" />
          <p className="features__text">Plant Protective</p>
        </li>
        <li className="features__item">
          <TwigLeafIcon alt="twig with leafs" className="features__icon" />
          <p className="features__text">Plant Protective</p>
        </li>
      </ul>
    </section>
  );
}

export default Features;
