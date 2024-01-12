import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

// ThemeSelector Component - allows user to toggle the theme
export default function ThemeSelector() {
    // Available themes list (not used in current implementation)
    const availableThemes = [
        "Light",
        "Dark"
    ]

    // Using ThemeContext to access and set the theme
    const {theme, setTheme} = React.useContext(ThemeContext);

    // Rendering a button to toggle themes and displaying the current theme
    return(
        <div>
            <button onClick={() => setTheme(
                theme === "Light" ? "Dark" : "Light"
            )}>Display Theme: {theme}</button>
        </div>
    );
}