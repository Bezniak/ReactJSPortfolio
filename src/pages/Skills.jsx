import React from 'react';
import Experience from "./Experience";

const Skills = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Skills</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, React-Router-Dom, React Hook Form</p>
                            <p>Redux, Redux Toolkit, Redux-Thunk</p>
                            <p>React-Redux</p>
                            <p>HTML / HTML5</p>
                            <p>CSS / CSS3 / SCSS</p>
                            <p>Axios, Reselect, BootStrap, TailwindCSS</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>in progress</p>
                        </li>
                    </ul>
                </div>
            </main>
            <Experience/>
        </>
    );
};

export default Skills;