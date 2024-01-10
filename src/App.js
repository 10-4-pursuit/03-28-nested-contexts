import logo from "./logo.svg";
import "./App.css";
import React, { useContext, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import LanguageContext from "./context/LanguageContext";
import { ThemeSwitcher } from "./component/ThemeSwitcher";
import { LanguageSelector } from "./component/LanguageSelector";

function App() {
  const { theme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor:theme !== "light" ? "gray" : "#fff", height: "100vh", width: "100vw" }}>
      <h2>{language} is a beautiful language </h2>
      <div>
      <ThemeSwitcher />
      <LanguageSelector />
      </div>
      </div>
      </>
   
  );
}

export default App;
