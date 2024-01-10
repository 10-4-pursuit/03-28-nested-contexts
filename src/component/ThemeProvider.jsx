import ThemeContext from "../context/ThemeContext";
import { useState } from "react";

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")
   
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>

{children}

</ThemeContext.Provider>
    );

};