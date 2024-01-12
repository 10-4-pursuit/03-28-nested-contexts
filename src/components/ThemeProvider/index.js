import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

// ThemeProvider Component - manages and provides the theme state
export default function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("Light");

    // Providing theme state to children components
    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}