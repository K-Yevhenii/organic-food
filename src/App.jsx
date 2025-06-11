import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  return (
    <div className='container'>
      <header className="header">
        <div className='header__logo'>
          <div className="header__logo-ellipse">
            {/* Logo */}
          </div>
            <h3 className='header__text-logo'>Logo</h3>
        </div>

        <nav className="header__menu-nav nav">
          <ul className="nav__contacts">
            <li className="nav__item"><a className='nav__contact' href="#">About</a></li>
            <li className="nav__item"><a className='nav__contact' href="#">Services</a></li>
            <li className="nav__item"><a className='nav__contact' href="#">Team</a></li>
            <li className="nav__item"><a className='nav__contact' href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="hero">
        {/* Контент головної секції */}
      </main>
    </div>
  )
}

export default App
