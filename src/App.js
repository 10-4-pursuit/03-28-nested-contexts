import "./App.css";
import React, { useContext } from "react";
import { LanguageSelector } from "./components/LanguageSelector";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext"; // Import ThemeContext
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const { theme } = useContext(ThemeContext); // Consume the ThemeContext

  const themeClass = theme === "light" ? "light-theme" : "dark-theme";

  return (
    <div className={`App ${themeClass}`}>
      <ThemeProvider>
        <LanguageProvider>
          <ThemeSwitcher />
          <LanguageSelector />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
