// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <a className="header__text-logo" href="#">
            Logo
          </a>
        </div>

        <nav className="header__menu-nav nav">
          <ul className="nav__contacts">
            <li className="nav__item">
              <a className="nav__contact" href="#">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__contact" href="#">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__contact" href="#">
                Team
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__contact" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1 className="hero__title">
            The dawn of a new era in health is here
          </h1>
          <p className="hero__description">
            Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
            lacus platea orci vel elit blandit facilisis
          </p>
          <button className="hero__button">Join now</button>
          <div className="hero__images">
            <img className="hero__image" src="jared-rice.png" alt="" />
            <img className="hero__image" src="katherine-hanlon.png" alt="" />
          </div>
        </section>
        <section className="wellbeing">
          <h3 className="wellbeing__title">Wellbeing is welldoing</h3>
          <div className="wellbeing__main">
            <ul className="wellbeing__list">
              <li className="wellbeing__item">
                <img className="wellbeing__icon" src="leaf.svg" alt="leaf" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea orci vel elit.
                </p>
              </li>
              <li className="wellbeing__item">
                <img className="wellbeing__icon" src="leaf.svg" alt="leaf" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea orci vel elit.
                </p>
              </li>
            </ul>
            <img className="wellbeing__image" src="./Group.png" alt="" />
          </div>
        </section>
        <section className="produce">
          <img
            className="produce__image"
            src="produce.png"
            alt="fresh organic produce"
          />
          <div className="produce__content">
            <h3 className="produce__title">Fresh organic produce</h3>
            <ul className="produce__list">
              <p className="produce__content-text">
                Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
                Diam lacus platea orci vel elit blandit facilisis enim risus. Ut
                tristique eget integer odio nec vulputate consequat. Elit mattis
                ac in amet sit viverra.
              </p>
              <li className="produce__item">
                <img
                  src="/public/produce-icon.svg"
                  alt="produce icon"
                  className="produce__icon"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea
                </p>
              </li>
              <li className="produce__item">
                <img
                  src="/public/produce-icon.svg"
                  alt="produce icon"
                  className="produce__icon"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea
                </p>
              </li>
              <li className="produce__item">
                <img
                  src="/public/produce-icon.svg"
                  alt="produce icon"
                  className="produce__icon"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea
                </p>
              </li>
              <li className="produce__item"></li>
            </ul>
          </div>
        </section>
        <section className="nutrition-info">
          <img
            src="/public/Illustration-eat-nutur.png"
            alt="natur product"
            className="nutrition-info__image"
          />
          <div className="nutrition-info__content">
            <h3 className="nutrition-info__title">You are what you eat</h3>
            <ul className="nutrition-info__list">
              <li className="nutrition-info__item">
                <img
                  src="/public/leaf.svg"
                  alt="leaf"
                  className="nutrition-info__icon"
                />
                <p className="nutrition-info__description">
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea orci vel elit.
                </p>
              </li>
              <li className="nutrition-info__item">
                <img
                  src="/public/leaf.svg"
                  alt="leaf"
                  className="nutrition-info__icon"
                />
                <p className="nutrition-info__description">
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea orci vel elit.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="wellbeing-starts">
          <div className="wellbeing-start__content">
            <img
              src="/public/leaf.svg"
              alt="leaf"
              className="wellbeing-starts__icon"
            />
            <h3 className="wellbeing-starts__title">
              Wellbeing starts with welldoing
            </h3>
            <p className="wellbeing-starts__description">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea orci vel elit blandit facilisis enim risus. Ut
              tristique eget integer odio nec.
            </p>
            <button className="wellbeing-starts__button">Join now</button>
          </div>
          <section className="features">
            <ul className="features__list">
              <li className="features__item">
                <img
                  src="/public/twig-leafs.svg"
                  alt="twig with leafs"
                  className="features__icon"
                />
                <p className="features__text"></p>
              </li>
              <li className="features__item">
                <img
                  src="/public/twig-leafs.svg"
                  alt="twig with leafs"
                  className="features__icon"
                />
                <p className="features__text"></p>
              </li>
              <li className="features__item">
                <img
                  src="/public/twig-leafs.svg"
                  alt="twig with leafs"
                  className="features__icon"
                />
                <p className="features__text"></p>
              </li>
              <li className="features__item">
                <img
                  src="/public/twig-leafs.svg"
                  alt="twig with leafs"
                  className="features__icon"
                />
                <p className="features__text"></p>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
