// App.js
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSelector from './LanguageSelector';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div>
          <ThemeSwitcher />
          <LanguageSelector />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
