import React from "react";
import LanguageContext from "../../contexts/LanguageContext";

// LanguageSelector Component - allows user to select a language
export default function LanguageSelector() {
    // List of available languages for selection
    const availableLanguages = [
        "English",
        "Spanish",
        "German",
        "Japanese",
        "Arabic"
    ]

    // Using LanguageContext to access and set the language
    const {language, setLanguage} = React.useContext(LanguageContext)

    // Rendering a dropdown for language selection and displaying the current language
    return (
        <div>
            <select onChange={(event) => setLanguage(event.target.value)}>
                {availableLanguages.map(language => (<option value={language}>{language}</option>))}
            </select>
            {language}
        </div>
    );
}