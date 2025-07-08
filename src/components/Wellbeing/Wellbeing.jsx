import "./Wellbeing.scss";
import Leaf from "../../assets/Svg/Icon/leafIcon";

function Wellbeing() {
  return (
    <section className="wellbeing">
      <div className="wellbeing__main">
        <h2 className="wellbeing__title">Wellbeing is welldoing</h2>
        <ul className="wellbeing__list">
          <li className="wellbeing__item">
            <Leaf className="wellbeing__icon" alt="leaf" />
            <p className="wellbeing__content-text">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea orci vel elit.
            </p>
          </li>
          <li className="wellbeing__item">
            <Leaf className="wellbeing__icon" alt="leaf" />
            <p className="wellbeing__content-text">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea orci vel elit.
            </p>
          </li>
        </ul>
      </div>
      <img className="wellbeing__image" src="/yoga.png" alt="" />
    </section>
  );
}

export default Wellbeing;
