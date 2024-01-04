import React from "react";
import LanguageContext from "../../contexts/LanguageContext";

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = React.useState("English");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

