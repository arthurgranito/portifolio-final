import React from "react";

const Info = () => {
    return(
        <>
            <div className="about__info grid">
                <div className="about__box">
                    <i className="bx bx-award about__icon"></i>

                    <h3 className="about__title">Experiência</h3>
                    <span className="about__subtitle">Formado em Front-end</span>
                </div>

                <div className="about__box">
                    <i className="bx bx-briefcase-alt about__icon"></i>

                    <h3 className="about__title">Completos</h3>
                    <span className="about__subtitle">15 + Projetos</span>
                </div>

                <div className="about__box">
                    <i className="bx bx-support about__icon"></i>

                    <h3 className="about__title">Suporte</h3>
                    <span className="about__subtitle">Online 24/7</span>
                </div>
            </div>
        </>
    )
}

export default Info;