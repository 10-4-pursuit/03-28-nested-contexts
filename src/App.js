import { useContext, useState } from "react";
import "./App.css";
import ThemeContextProvider from "./components/ThemeContextProvider";
import ThemeContext from "./context/ThemeContext";
import Test from "./components/Test";
import LanguageContext from "./context/LanguageContext";
import LanguageProvider from "./components/LanguageProvider";


function App() {
 const {theme, toggleTheme}=useContext(ThemeContext);
 const {language, toggleLanguage}=useContext(LanguageContext);
 console.log(theme)

  return (
    
      <div className="HomePage">
            <h1>PICK A THEME AND LANGUAGE</h1>
            <h2><Test /></h2>
            <button className='theme-button' onClick={toggleTheme}>Change Theme</button> 
            <button className='language-button' onClick={toggleLanguage}>Change Language</button>
            </div>
 
  );
}

export default App;
 