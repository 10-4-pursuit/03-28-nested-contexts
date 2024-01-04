import React from "react";

const language = "English";
const LanguageContext = React.createContext({
    language, 
    setLanguage: () => {}
});

export default LanguageContext;