import React from "react";
import LanguageContext from "../../contexts/LanguageContext";

// LanguageProvider Component - manages and provides the language state
export default function LanguageProvider({ children }) {
    const [language, setLanguage] = React.useState("English");

    // Providing language state to children components
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

