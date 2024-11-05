import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__container container">
                    <h1 className="footer__title">Arthur Granito</h1>

                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">Sobre</a>
                        </li>

                        <li>
                            <a href="#portfolio" className="footer__link">Projetos</a>
                        </li>

                        <li>
                            <a href="#services" className="footer__link">Serviços</a>
                        </li>
                    </ul>

                    <div className="footer__social">
                        <a href="https://www.github.com/arthurgranito/" className="footer__social-link" target="_blank">
                            <i className="uil uil-github-alt"></i>
                        </a>

                        <a href="https://www.instagram.com/arthurgranito/" className="footer__social-link" target="_blank">
                            <i className="uil uil-instagram"></i>
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=+5521976318326&text=Olá,%20mais%20informações!" className="footer__social-link" target="_blank">
                            <i className="uil uil-whatsapp"></i>
                        </a>
                    </div>

                    <span className="footer__copy">
                        &#169; Arthur Granito. Todos os direitos reservados
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer