import React from "react";
import LanguageContext from "../../contexts/LanguageContext";

export default function LanguageSelector() {
    const availableLanguages = [
        "English",
        "Spanish",
        "German",
        "Japanese",
        "Arabic"
    ]

    const {language, setLanguage} = React.useContext(LanguageContext)

    return (
        <div>
            <select onChange={(event) => setLanguage(event.target.value)}>
                {availableLanguages.map(language => (<option value={language}>{language}</option>))}
            </select>
            {language}
        </div>
    );
}