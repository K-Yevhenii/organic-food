import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
            <img src="https://placehold.co/600x400" alt="" />
            <img src="https://placehold.co/600x400" alt="" />
          </div>
        </section>
        <section className="wellbeing">
          <h3 className="wellbeing__title">Wellbeing is welldoing</h3>
          <div className="wellbeing__main">
            <ul className="wellbeing__list">
              <li className="wellbeing__item">
                <img src="https://placehold.co/58x57" alt="leaf" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea orci vel elit.
                </p>
              </li>
              <li className="wellbeing__item">
                <img src="https://placehold.co/58x57" alt="leaf" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Quam ut consequat at
                  a. Diam lacus platea orci vel elit.
                </p>
              </li>
            </ul>
            <img
              className="wellbeing__image"
              src="https://placehold.co/291x294"
              alt=""
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
