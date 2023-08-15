import React from 'react';
import './style.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong> Hi, my name is <em>Ivan</em> </strong> <br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <NavLink to='https://www.linkedin.com/feed/update/urn:li:activity:7091122385298276352/'
                         target='_blank'
                         className="btn"
                         download="newfilename"
                >
                    Download CV
                </NavLink>
            </div>
        </header>
    );
};

export default Header;