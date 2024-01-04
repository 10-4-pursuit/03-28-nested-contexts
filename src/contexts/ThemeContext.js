import React from "react";

const theme = "Light";
const ThemeContext = React.createContext({
    theme,
    setTheme: () => {}
});

export default ThemeContext;
