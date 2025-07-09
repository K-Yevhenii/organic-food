import "./Features.scss";
import { featuresItems } from "./featuresItems";
function Features() {
  return (
    <section className="features">
      <ul className="features__list">
        {featuresItems.map(({ id, Icon, text }) => (
          <li key={id} className="features__item">
            {Icon}
            <p className="features__text">{text}</p>
          </li>
        ))}
        ;
      </ul>
    </section>
  );
}

export default Features;
