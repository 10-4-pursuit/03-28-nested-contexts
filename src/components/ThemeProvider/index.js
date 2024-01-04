import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("Light");

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}