import React from "react";

// Initial Context for Language - sets default language and a placeholder for changing the language
const language = "English";
const LanguageContext = React.createContext({
    language, 
    setLanguage: () => {}
});

export default LanguageContext;