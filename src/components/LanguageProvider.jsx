import LanguageContext from "../context/LanguageContext";
import { useState } from "react";



export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('Japanese');

    const toggleLanguage = () => {
        setLanguage((prevlanguage) => (prevlanguage === 'Japanese' ? 'English' : 'Japanese'));
      };

      return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
           
             {children}
           
        </LanguageContext.Provider>
    );
};