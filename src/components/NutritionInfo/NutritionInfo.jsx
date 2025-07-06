import "./NutritionInfo.scss";
function NutritionInfo() {
  return (
    <section className="nutrition-info">
      <img
        src="/public/Illustration-eat-nutur.png"
        alt="natur product"
        className="nutrition-info__image"
      />
      <div className="nutrition-info__content">
        <h2 className="nutrition-info__title">You are what you eat</h2>
        <ul className="nutrition-info__list">
          <li className="nutrition-info__item">
            <img
              src="/public/leaf.svg"
              alt="leaf"
              className="nutrition-info__icon"
            />
            <p className="nutrition-info__description">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea orci vel elit.
            </p>
          </li>
          <li className="nutrition-info__item">
            <img
              src="/public/leaf.svg"
              alt="leaf"
              className="nutrition-info__icon"
            />
            <p className="nutrition-info__description">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea orci vel elit.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default NutritionInfo;
