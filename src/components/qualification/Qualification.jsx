import React, { useState } from "react";
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <section className="qualification section" id="qualification">
                <h2 className="section__title">Qualificação</h2>
                <span className="section__subtitle">Minha jornada pessoal</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                            <i className="uil uil-graduation-cap qualification__icon"></i> Educação
                        </div>
                    </div>

                    <div className="qualification__sections">
                        <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web Design</h3>
                                    <span className="qualification__subtitle">Tech4me - Teresópolis</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> 02/2024 - 12/2024
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Git & Github</h3>
                                    <span className="qualification__subtitle">Udemy - Teresópolis</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> 02/2024 - 12/2024
                                    </div>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Desenvolvimento Web</h3>
                                    <span className="qualification__subtitle">Tech4me - Teresópolis</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> 02/2024 - 12/2024
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Qualification;