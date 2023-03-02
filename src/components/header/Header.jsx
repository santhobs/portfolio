import React, { useState } from 'react'
import './header.css'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation();
    console.log(location.hash);
    const hashLocation = location.hash;
    /* =============================== Change Background Header =============================== */
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add ("scroll-header")
        else header.classList.remove ("scroll-header")
    })


    /* =============================== Toggle Menu =============================== */
    const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Ican</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className={hashLocation === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className={hashLocation === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className={hashLocation === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className={hashLocation === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualification" className={hashLocation === "#qualification" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Qualification
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className={hashLocation === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className={hashLocation === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
