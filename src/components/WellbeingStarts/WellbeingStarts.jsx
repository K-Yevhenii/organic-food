import "./WellbeingStarts.scss";
import LeafIcon from "../../assets/Svg/Icon/leafIcon";
function WellbeingStarts() {
    return (
        <section className="wellbeing-starts">
            <div className="wellbeing-starts__content">
                <LeafIcon alt="leaf" className="wellbeing-starts__icon" />
                <h2 className="wellbeing-starts__title  paragraph__subtitle">Wellbeing starts with welldoing</h2>
                <p className="wellbeing-starts__description  paragraph__item">
                    Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit
                    blandit facilisis enim risus. Ut tristique eget integer odio nec.
                </p>
                <button className="wellbeing-starts__button paragraph__text">Join now</button>
            </div>
        </section>
    );
}
export default WellbeingStarts;
