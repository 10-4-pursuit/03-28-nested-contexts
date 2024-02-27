import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <p>Current Language: {language}</p>
      <button onClick={() => changeLanguage('English')}>English</button>
      <button onClick={() => changeLanguage('Spanish')}>Spanish</button>
    </div>
  );
};

export default LanguageSelector;