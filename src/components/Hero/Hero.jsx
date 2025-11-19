import "./Hero.scss";
function Main() {
    return (
        <section className="hero">
            <h1 className="hero__title">The dawn of a new era in health is here</h1>
            <p className="hero__description">
                Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit blandit
                facilisis
            </p>
            <button className="hero__button">Join now</button>
            <div className="hero__images">
                <div className="hero__images-wrapper">
                    <div className="hero__image-wrapper">
                        <img className="hero__image" src="/jared-rice.png" alt="" />
                    </div>
                    <div className="hero__image-wrapper">
                        <img className="hero__image" src="/katherine-hanlon.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;
