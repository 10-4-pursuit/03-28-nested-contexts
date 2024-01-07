import React from "react";

// Initial Context for Theme - sets default theme and a placeholder for changing the theme
const theme = "Light";
const ThemeContext = React.createContext({
    theme,
    setTheme: () => {}
});

export default ThemeContext;
