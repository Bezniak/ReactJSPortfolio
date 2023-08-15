import React, {useEffect} from 'react';
import {detectDarkMode} from "../../utils/detectDarkMode";
import './BtnDarkMode.css';
import sun from "./sun.svg";
import moon from "./moon.svg";
import {useLocalStorage} from "../../utils/useLocalStorage";

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        // 3. if systems settings change when theme changed
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            })
    }, [setDarkMode]);

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active'

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        });
    }

    return (
        <button onClick={toggleDarkMode}
                className={darkMode === 'dark' ? btnActive : btnNormal}
        >
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
};

export default BtnDarkMode;