import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './ThemeSwitcher.css';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    
    const buttonStyle = theme === 'light' ? 'darkButtonStyle' : 'lightButtonStyle';

    return (
        <button className={buttonStyle} onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

