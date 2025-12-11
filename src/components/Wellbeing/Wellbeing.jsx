import "./Wellbeing.scss";
import wellbeingList from "./wellbeingList";
import LeafIcon from "../../assets/Svg/Icon/leafIcon";

function Wellbeing() {
    return (
        <section className="wellbeing">
            <div className="wellbeing__main">
                <h2 className="wellbeing__title paragraph__h2">Wellbeing is welldoing</h2>
                <ul className="wellbeing__list">
                    {wellbeingList.map(({ id, text }) => (
                        <li key={id} className="wellbeing__item">
                            <LeafIcon className="wellbeing__icon" />
                            <p className="wellbeing__content-text paragraph__item">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="wellbeing__image">
                <img src="./yoga.png" alt="" />
            </div>
        </section>
    );
}

export default Wellbeing;
