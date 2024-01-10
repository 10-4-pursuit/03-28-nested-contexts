import React, {useContext, useState} from 'react'
import ThemeContext from "../context/ThemeContext";
import styled from 'styled-components'

export const ThemeSwitcher = (props) => {
    const {theme, toggleTheme } = useContext(ThemeContext)
    
    const backgroundStyle = theme === 'dark' ? 'blackBackround' : 'whiteBackround';

function switchTheme () {
    toggleTheme()
}

const color = theme === 'light' ? '#234' : '#fff'

const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
    return (
        <TomatoButton className={backgroundStyle} onClick={switchTheme} > 
            Switch to {theme === 'light' ? 'dark' : 'light'} background
        </TomatoButton >   
       
    );
};
