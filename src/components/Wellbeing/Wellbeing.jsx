import "./Wellbeing.scss";
import wellbeingList from "./wellbeingList";
import LeafIcon from "../../assets/Svg/Icon/leafIcon";

function Wellbeing() {
  return (
    <section className="wellbeing">
      <div className="wellbeing__main">
        <h2 className="wellbeing__title">Wellbeing is welldoing</h2>
        <ul className="wellbeing__list">
          {wellbeingList.map(({ id, text }) => (
            <li key={id} className="wellbeing__item">
              <LeafIcon className="wellbeing__icon" />
              <p className="wellbeing__content-text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <img className="wellbeing__image" src="/yoga.png" alt="" />
    </section>
  );
}

export default Wellbeing;
