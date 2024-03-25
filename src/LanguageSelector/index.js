import React from 'react';
import { useLanguage } from '../LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage('English')}>English</button>
      <button onClick={() => changeLanguage('Spanish')}>Spanish</button>
      <p>Current Language: {language}</p>
    </div>
  );
};

export default LanguageSelector;
