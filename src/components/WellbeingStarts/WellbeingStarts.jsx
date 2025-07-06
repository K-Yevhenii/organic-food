import "./WellbeingStarts.scss";
function WellbeingStarts() {
  return (
    <section className="wellbeing-starts">
      <div className="wellbeing-starts__content">
        <img
          src="/public/leaf.svg"
          alt="leaf"
          className="wellbeing-starts__icon"
        />
        <h2 className="wellbeing-starts__title">
          Wellbeing starts with welldoing
        </h2>
        <p className="wellbeing-starts__description">
          Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
          lacus platea orci vel elit blandit facilisis enim risus. Ut tristique
          eget integer odio nec.
        </p>
        <button className="wellbeing-starts__button">Join now</button>
      </div>
    </section>
  );
}
export default WellbeingStarts;
