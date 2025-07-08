import "./Produce.scss";
import ProduceIcon from "../../assets/Svg/Icon/produceIcon";

function Produce() {
  return (
    <section className="produce">
      <img
        className="produce__image"
        src="produce.png"
        alt="fresh organic produce"
      />
      <div className="produce__content">
        <h2 className="produce__title">Fresh organic produce</h2>
        <ul className="produce__list">
          <p className="produce__content-text">
            Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
            lacus platea orci vel elit blandit facilisis enim risus. Ut
            tristique eget integer odio nec vulputate consequat. Elit mattis ac
            in amet sit viverra.
          </p>
          <li className="produce__item">
            <ProduceIcon className="produce__icon-item" />
            <p className="produce__text-item">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea
            </p>
          </li>
          <li className="produce__item">
            <ProduceIcon className="produce__icon-item" />
            <p className="produce__text-item">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea
            </p>
          </li>
          <li className="produce__item">
            <ProduceIcon className="produce__icon-item" />
            <p className="produce__text-item">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea
            </p>
          </li>
          <li className="produce__item"></li>
        </ul>
      </div>
    </section>
  );
}

export default Produce;
