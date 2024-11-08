import React, { useState } from "react";
import "./header.css";

const Header = () => {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (scrollY >= 200) {
            header.style.boxShadow = '0 -1px 4px rgba(0, 0, 0, 0.1)';
        }
    });

    const [Toggle, showMenu] = useState(false);

    const [activeNav, setActiveNav] = useState("#home");

    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__logo">Arthur Granito</a>

                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-estate nav__icon"></i> Home
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-user nav__icon"></i> Sobre
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-file-alt nav__icon"></i> Habilidades
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-briefcase-alt nav__icon"></i> Serviços
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                    <i class="uil uil-chart-line nav__icon"></i> Qualificação
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-scenery nav__icon"></i> Portifólio
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-message nav__icon"></i> Contato
                                </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                    </div>

                    <div className="nav__toggle menu" onClick={() => showMenu(!Toggle)}>
                        <i className="bx bx-menu"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;