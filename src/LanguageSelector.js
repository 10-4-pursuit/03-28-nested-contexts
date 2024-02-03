import React from 'react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const { theme } = useTheme();

  const renderLanguageContent = () => {
    if (language === 'English') {
        return (
            <div>
                <p>Hello, everyone!</p>
                <p>Goodbye, everyone!</p>
            </div>
        );
    } else if (language === 'Spanish') {
        return (
            <div>
                <p>Hola, todos!</p>
                <p>Hasta luego, todos!</p>
            </div>
        );
    }
  };

  return (
    <div>
      <p>Current Language: {language}</p>
      <button onClick={() => changeLanguage('English')}>English</button>
      <button onClick={() => changeLanguage('Spanish')}>Spanish</button>
      <p>{renderLanguageContent()}</p>
    </div>
  );
};

export default LanguageSelector;
