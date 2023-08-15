import React from 'react';
import git from "./gitHub-black.svg";

const BtnGitHub = ({link}) => {
    return (
        <div>
            <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
                <img src={git} alt=""/>
                GitHub repo
            </a>
        </div>
    );
};

export default BtnGitHub;