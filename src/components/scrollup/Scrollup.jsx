import React from "react";
import './scrollup.css';

const Scrollup = () => {
    window.addEventListener('scroll', () => {
        const scrollUp = document.getElementById('scrollup');
        if (scrollY >= 560) {
            scrollUp.style.bottom = '3rem';
        } else {
            scrollUp.style.bottom = '-20%';
        }
    });

    return (
        <>
            <a href="#" className="scrollup" id="scrollup">
                <i className="uil uil-arrow-up scrollup__icon"></i>
            </a>
        </>
    )
}

export default Scrollup;