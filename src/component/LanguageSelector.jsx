import React, {useContext, useState} from 'react'
import LanguageContext from '../context/LanguageContext';
import styled from 'styled-components'

export const LanguageSelector = (props) => {
    const {language, toggleLanguage } = useContext(LanguageContext);

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
        <TomatoButton className="language-button" onClick={toggleLanguage}>
        Switch to {language === 'French' ? 'Russian' : 'French'} language
      </TomatoButton>
    );
};