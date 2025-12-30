import "./Hero.scss";
import ImageMask from "../ImageMask";

function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__title paragraph__h1">The dawn of a new era in health is here</h1>
            <p className="hero__description paragraph__p">
                Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit blandit
                facilisis
            </p>
            <button className="hero__button paragraph__text">Join now</button>
            <div className="hero__images">
                <div className="hero__images-wrapper">
                    <ImageMask
                        className="hero__image-wrapper"
                        height="390px"
                        imageProps={{ src: "./katherine-hanlon.png", alt: "" }}
                    />

                    <ImageMask
                        className="hero__image-wrapper"
                        height="390px"
                        imageProps={{ src: "./jared-rice.png", alt: "" }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
