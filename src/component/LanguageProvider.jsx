import LanguageContext from "../context/LanguageContext";
import { useState } from "react";

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('Russian'); 

    const toggleLanguage =  () => {
        setLanguage((prevLanguage) => (prevLanguage === 'French' ? 'Russian' : 'French'));
    };

    return (
        <LanguageContext.Provider value={{language,  toggleLanguage}}>

{children}

</LanguageContext.Provider>
    );

};