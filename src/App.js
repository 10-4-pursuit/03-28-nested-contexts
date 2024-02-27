import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSelector from './LanguageSelector';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <h1>Your App</h1>
          <ThemeSwitcher />
          <LanguageSelector />
          {/* Other components of your app */}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;