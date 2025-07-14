import "./NutritionInfo.scss";
import nutritionInfoItem from "./nutritionInfoItem";
import LeafIcon from "../../assets/Svg/Icon/leafIcon";
function NutritionInfo() {
  return (
    <section className="nutrition-info">
      <img
        src="Illustration-eat-nutur.png"
        alt="natur product"
        className="nutrition-info__image"
      />
      <div className="nutrition-info__content">
        <h2 className="nutrition-info__title">You are what you eat</h2>
        <ul className="nutrition-info__list">
          {nutritionInfoItem.map(({ id, text }) => (
            <li key={id} className="nutrition-info__item">
              <LeafIcon className="nutrition-info__icon" />
              <p className="nutrition-info__description">{text}</p>
            </li>
          ))}
          ;
        </ul>
      </div>
    </section>
  );
}
export default NutritionInfo;
