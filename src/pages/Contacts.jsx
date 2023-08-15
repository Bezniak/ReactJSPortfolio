import React from 'react';
import {NavLink} from "react-router-dom";
import {FaLocationDot} from "react-icons/fa6";
import {SiYourtraveldottv} from "react-icons/si";
import {FaPhoneAlt, FaTelegram} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import {AiFillLinkedin, AiOutlineGithub} from "react-icons/ai";

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2"><FaLocationDot className='icons-img'/> Location</h2>
                        <p>Grodno, Belarus (ready for relocation at own expense <SiYourtraveldottv className='icons-img'/>) </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2"><FaPhoneAlt className='icons-img'/>Phone</h2>
                        <p><NavLink to="tel:+375295210417">+375 (29) 521-04-17</NavLink></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2"><FaTelegram className='icons-img'/> Telegram</h2>
                        <p><NavLink to="https://t.me/ivan_bezniak" target='_blank'>https://t.me/ivan_bezniak</NavLink></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2"><AiOutlineGithub className='icons-img'/>GitHub</h2>
                        <p><NavLink to="https://github.com/Bezniak" target="_blank">https://github.com/Bezniak</NavLink>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2"><AiFillLinkedin className='icons-img'/>LinkedIn</h2>
                        <p><NavLink to="https://www.linkedin.com/in/ivan-bezniak-2634a11a0/"
                                    target="_blank">https://www.linkedin.com/in/ivan-bezniak-2634a11a0/</NavLink>
                        </p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2"><MdOutlineEmail className='icons-img'/> Email</h2>
                        <p><NavLink to="mailto:ivan.bezniak@gmail.com">ivan.bezniak@gmail.com</NavLink></p>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Contacts;