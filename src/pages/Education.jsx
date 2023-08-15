import React from 'react';
import Languages from "./Languages";

const Education = () => {
    return (
        <>
            <Languages/>
            <main className="section">
                <div className="container">
                    <h1 className="title-1">Education</h1>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">IT-KAMASUTRA. "React JS - the way of the samurai 1.0"</h2>
                            <p>Programming courses</p>
                            <p>November 2022 - May 2023</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">IT Shatle</h2>
                            <p>Programming courses</p>
                            <p>October 2021 - April 2022</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Yanka Kupala State University of Grodno</h2>
                            <p>Bachelor degree</p>
                            <p>September 2015 - June 2019</p>
                            <p>Lawyer</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">University of Maribor, Slovenia</h2>
                            <p>Bachelor</p>
                            <p>October 2018 - February 2019</p>
                            <p>Lawyer</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">English Language School in Grodno</h2>
                            <p>Interpreter</p>
                            <p>September 2016 - October 2020</p>
                            <p>Spoken English</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
};

export default Education;