import React from 'react';
import './style.css';
import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">

                    <ul className="social">
                        <li className="social__item">
                            <NavLink to='https://vk.com/' target='_blank'>
                                <img src={vk} alt="link"/>
                            </NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to='https://www.instagram.com/ivan_bezniak/' target='_blank'>
                                <img src={instagram} alt="link"/>
                            </NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to="https://twitter.com/IBezniak" target='_blank'>
                                <img src={twitter} alt="link"/>
                            </NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to='https://github.com/Bezniak' target='_blank'>
                                <img src={gitHub} alt="link"/>
                            </NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to='https://www.linkedin.com/in/ivan-bezniak-2634a11a0/' target='_blank'>
                                <img src={linkedIn} alt="link"/>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="copyright">
                        <p>© 2023 Ivan Bezniak</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;