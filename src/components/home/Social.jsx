import React from "react";

const Social = () => {
    return (
        <>
            <div className="home__social">
                <a href="https://www.instagram.com/arthurgranito/" className="home__social-icon" target="_blank">
                    <i className="uil uil-instagram"></i>
                </a>

                <a href="https://api.whatsapp.com/send?phone=+5521976318326&text=Olá,%20mais%20informações!" className="home__social-icon" target="_blank">
                    <i class="uil uil-whatsapp"></i>
                </a>

                <a href="https://www.github.com/arthurgranito/" className="home__social-icon" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>
        </>
    )
}

export default Social